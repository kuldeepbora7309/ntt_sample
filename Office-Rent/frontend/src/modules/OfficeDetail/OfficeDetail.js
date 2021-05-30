import React, { useEffect, useState } from "react";
import { TextField, ButtonField } from "../../utils";
import { Descriptions, Col, Row, Carousel } from "antd";

const contentStyle = {
  height: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const OfficeDetail = (props) => {
  useEffect(() => {
    props.getOfficeDetail();
  }, []);
  let { detail, addFurniture } = props;
  let { officeDetail } = detail;
  let [newFurniture, setNewFurniture] = useState(null);
  const setNewFurnitureHandler = (event) => {
    let { value } = event.target;
    setNewFurniture(value);
  };
  const addNewFurnitureHandler = () => {
    let furnitureData = {
      office_id: officeDetail.id,
      name: newFurniture,
    };
    addFurniture(furnitureData);
    setNewFurniture(null);
  };
  return (
    <>
      <Descriptions
        title="Office Details"
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Location">
          {officeDetail.location}
        </Descriptions.Item>
        <Descriptions.Item label="Space">
          {officeDetail.space} Square Feet
        </Descriptions.Item>
        <Descriptions.Item label="Floor">
          {officeDetail.floor}
        </Descriptions.Item>
        <Descriptions.Item label="Rent">{officeDetail.rent}</Descriptions.Item>
        <Descriptions.Item label="Furniture">
          {officeDetail.furniture &&
            officeDetail.furniture.map((item, index) => (
              <p key={index}>{item.name}</p>
            ))}
          <Row gutter={16} style={{ marginTop: "10px" }}>
            <Col size={8}>
              <TextField
                placeholder="Add Furniture/Equipment"
                name="furniture"
                value={newFurniture}
                onChange={setNewFurnitureHandler}
              />
            </Col>
            <Col size={8}>
              <ButtonField
                type="primary"
                disabled={!newFurniture}
                onClick={addNewFurnitureHandler}
              >
                Add Equipment
              </ButtonField>
            </Col>
          </Row>
        </Descriptions.Item>
      </Descriptions>
      <Descriptions
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Photos">
          <Carousel autoplay style={{ width: 300 }}>
            {officeDetail &&
              officeDetail.images &&
              officeDetail.images.length &&
              officeDetail.images.map((item, index) => (
                <div key={index}>
                  <h3 style={contentStyle}>
                    {
                      <img
                        alt="example"
                        src={item.pic_url}
                        style={{ width: 300 }}
                      />
                    }
                  </h3>
                </div>
              ))}
          </Carousel>
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default OfficeDetail;
