const db = require("../config/db.config.js");
const Office = db.office;
const OfficePic = db.officePic;
const OfficeFurniture = db.officeFurniture;
const Package = db.package;
const PackageOffice = db.packageOffice;
const Op = db.Sequelize.Op;

const officeDetailsById = (req, res) => {
  condition = {
    where: { id: req.params.id },
    include: [
      {
        model: OfficePic,
        as: "images",
      },
      {
        model: OfficeFurniture,
        as: "furniture",
      },
    ],
  };

  return Office.findOne(condition)
    .then((offices) => {
      return res.status(200).send({
        error: false,
        data: offices,
      });
    })
    .catch((error) => res.status(400).send({ error: true, message: error }));
};

// get office details
exports.officeDetail = (req, res) => {
  return officeDetailsById(req, res);
};

// FETCH all offices
exports.officeListing = (req, res) => {
  condition = {
    order: [["id", "ASC"]],
    include: [
      {
        model: OfficePic,
        as: "images",
      },
      {
        model: OfficeFurniture,
        as: "furniture",
      },
    ],
  };

  Office.findAll(condition)
    .then((offices) => {
      return res.status(200).send({
        error: false,
        data: offices,
      });
    })
    .catch((error) => res.status(400).send({ error: true, message: error }));
};

// search offices
exports.searchOffice = (req, res) => {
  var condition = {};
  var filterWhereCondition = "";
  var filterArr = [];

  if (req.body.space) {
    filterArr.push({ space: req.body.space });
  }

  if (req.body.floor) {
    filterArr.push({ floor: req.body.floor });
  }

  if (req.body.location) {
    filterArr.push({ location: req.body.location });
  }
  filterWhereCondition = {
    [Op.and]: filterArr,
  };
  if (filterWhereCondition !== "") {
    condition = {
      where: filterWhereCondition,
      order: [["id", "ASC"]],
    };
  } else {
    condition = {
      order: [["id", "ASC"]],
    };
  }

  condition.include = [
    {
      model: OfficePic,
      as: "images",
    },
    {
      model: OfficeFurniture,
      as: "furniture",
    },
  ];

  Office.findAll(condition)
    .then((offices) => {
      return res.status(200).send({
        error: false,
        data: offices,
      });
    })
    .catch((error) => res.status(400).send({ error: true, message: error }));
};

// FETCH all offices images
exports.officeImageListing = (req, res) => {
  condition = {
    order: [["id", "ASC"]],
  };

  OfficePic.findAll(condition, {
    include: ["office"],
  })
    .then((officeImages) => {
      return res.status(200).send({
        error: false,
        data: officeImages,
      });
    })
    .catch((error) => res.status(400).send({ error: true, message: error }));
};

// Add Office furniture and equipments
exports.addFurniture = (req, res) => {
  OfficeFurniture.create(req.body)
    .then(() => {
      req.params.id = req.body.office_id;
      return officeDetailsById(req, res);
    })
    .catch((error) => res.status(400).send({ error: true, message: error }));
};

// Display multiple Office short term lease packages
exports.shortLeasePackage = (req, res) => {
  req.params.leaseType = "short";
  return getLeasePackages(req, res);
};

// Display multiple Office long term lease packages
exports.longLeasePackage = (req, res) => {
  req.params.leaseType = "long";
  return getLeasePackages(req, res);
};

const getLeasePackages = (req, res) => {
  var leaseDuration = req.params.duration ? req.params.duration : "all";
  var filterWhereCondition = {};
  if (leaseDuration && leaseDuration !== "all") {
    filterWhereCondition = { lease_duration: leaseDuration };
  }
  filterWhereCondition.lease_type = req.params.leaseType;
  condition = {
    order: [["id", "ASC"]],
    where: filterWhereCondition,
    include: [
      {
        model: PackageOffice,
        as: "offices",
        include: [
          {
            model: Office,
            as: "office",
            include: [
              {
                model: OfficePic,
                as: "images",
              },
              {
                model: OfficeFurniture,
                as: "furniture",
              },
            ],
          },
        ],
      },
    ],
  };

  return Package.findAll(condition)
    .then((packages) => {
      return res.status(200).send({
        error: false,
        data: packages,
      });
    })
    .catch((error) => res.status(400).send({ error: true, message: error }));
};

// create new office package
exports.createPackage = (req, res) => {
  var attachedOffices =
    req.body.attachedOfficeList && req.body.attachedOfficeList.length
      ? req.body.attachedOfficeList
      : [];

  console.log("attachedOffices", attachedOffices);

  Package.create(req.body)
    .then((response) => {
      var packageId = response.id;
      attachedOffices.forEach((item) => {
        PackageOffice.create({
          package_id: packageId,
          office_id: item.id,
        });
      });
      return res.status(200).send({
        error: false,
        message: "Package successfully created",
        data: response,
      });
    })
    .catch((error) => res.status(400).send({ error: true, message: error }));
};
