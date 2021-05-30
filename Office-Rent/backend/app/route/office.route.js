module.exports = function (app) {
  const offices = require("../controller/office.controller.js");
  // Get Office Listing
  app.get("/api/office-listing", offices.officeListing);

  // Get Office Listing
  app.get("/api/office-detail/:id", offices.officeDetail);

  // Get Office Listing with Search Filters
  app.post("/api/search-offices", offices.searchOffice);

  // Get Office images
  app.get("/api/office-images", offices.officeImageListing);

  // Add Office furniture
  app.post("/api/add-furniture", offices.addFurniture);

  // Multiple short term Lease Package Listing
  app.get(
    "/api/short-term-lease-packages/:duration",
    offices.shortLeasePackage
  );

  // Multiple long term Lease Package Listing
  app.get("/api/long-term-lease-packages/:duration", offices.longLeasePackage);

  // Create New Office Package
  app.post("/api/create-package", offices.createPackage);
};
