import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Card, Col, Row } from "antd";
import { TextField, ButtonField } from "../../utils";

const Dashboard = (props) => {
  let { items, getDashboardList, searchOfficeWithFilter } = props;
  useEffect(() => {
    getDashboardList();
  }, []);

  const getCoverImage = (item) => {
    if (item && item.images && item.images.length) {
      console.log(item.images[0].pic_url);

      return item.images[0].pic_url;
    } else {
      return "https://picsum.photos/200/300";
    }
  };

  let [filter, setFilter] = useState({
    space: "",
    floor: "",
    location: "",
  });

  const setFilterHandler = (event) => {
    let { name, value } = event.target;
    setFilter((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const searchOfficeHandler = () => {
    searchOfficeWithFilter(filter);
  };

  return (
    <>
      <Row gutter={16} style={{ marginTop: "10px" }}>
        <Col size={8}>
          <TextField
            placeholder="Space in sqft"
            name="space"
            value={filter.space}
            onChange={setFilterHandler}
          />
        </Col>
        <Col size={8}>
          <TextField
            placeholder="Floor"
            name="floor"
            value={filter.floor}
            onChange={setFilterHandler}
          />
        </Col>
        <Col size={8}>
          <TextField
            placeholder="Location"
            name="location"
            value={filter.location}
            onChange={setFilterHandler}
          />
        </Col>
        <Col size={8}>
          <ButtonField type="primary" onClick={searchOfficeHandler}>
            Search Office
          </ButtonField>
        </Col>
      </Row>

      <Row gutter={16}>
        {items &&
          items.length > 0 &&
          items.map((item, index) => (
            <Col
              xs={24}
              xl={8}
              sm={12}
              style={{ paddingTop: "10px" }}
              key={index}
            >
              <Card
                style={{ width: 300 }}
                title={item.location}
                bordered={true}
              >
                <p>
                  {
                    <img
                      alt="example"
                      src={getCoverImage(item)}
                      style={{ height: "200", width: "100%" }}
                    />
                  }
                </p>
                <p>Square Ft: {item.space} </p>
                <p>Floor: {item.floor} </p>

                <p>
                  <NavLink exact to={"/office-detail/" + item.id}>
                    <span>View Details</span>
                  </NavLink>
                </p>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Dashboard;
