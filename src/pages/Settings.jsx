import React from "react";
import { Row, Col } from "antd";

import {
  PlayCircleFilled,
  FastBackwardFilled,
  FastForwardFilled,
  BellOutlined,
  SettingTwoTone,
} from "@ant-design/icons";

const Settings = () => {
  return (
    <>
      <Row>
        <Col span={4} style={{ background: "white", height: "100vh" }}>
          <Space style={{ fontSize: "30px", padding: "20px" }}>
            {/* <BsCodeSlash style={{ marginTop: "20px" }} /> */}
            <div>Let's Discuss </div>
          </Space>
          <br />
          <Space
            onClick={(e) => setShowProfile(true)}
            style={{
              fontSize: "20px",
              paddingLeft: "20px",
              paddingTop: "15px",
            }}
          >
            <BiUser style={{ marginTop: "10px" }} />
            <div style={{ fontWeight: "500" }}>profile</div>
          </Space>
          <br />
          <Space
            onClick={(e) => setShowExplore(true)}
            style={{
              fontSize: "20px",
              paddingLeft: "20px",
              paddingTop: "15px",
            }}
          >
            <BiHash style={{ marginTop: "10px" }} />
            {/* <MdOutlineShoppingCart style={{ marginTop: "10px" }} /> */}
            <div style={{ fontWeight: "500" }}>explore</div>
          </Space>
          <br />
          <Space
            style={{
              fontSize: "20px",
              paddingLeft: "20px",
              paddingTop: "15px",
            }}
          >
            <BiBell style={{ marginTop: "10px" }} />
            <div style={{ fontWeight: "500" }}>notifications</div>
          </Space>
          {/* <br />
          <Space
            style={{
              fontSize: "20px",
              paddingLeft: "20px",
              paddingTop: "15px",
            }}
          >
            <AiOutlineAppstore style={{ marginTop: "10px" }} />
            <div style={{ fontWeight: "bold" }}>Customer</div>
          </Space> */}
        </Col>

        <Col span={14} style={{ background: "#EBF4F9", height: "100vh" }}>
          {conditionalMiddleSection()}
        </Col>
        <Col span={6} style={{ background: "white", height: "100vh" }}>
          {conditional3rdseaction()}
        </Col>
      </Row>
    </>
  );
};

export default Settings;
