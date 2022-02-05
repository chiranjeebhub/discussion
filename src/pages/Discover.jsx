import React from "react";
import Profile from "./Profile";
import {
  Card,
  Col,
  Divider,
  Input,
  Progress,
  Row,
  Space,
  Menu,
  Dropdown,
} from "antd";
import {
  PlayCircleFilled,
  FastBackwardFilled,
  FastForwardFilled,
  BellOutlined,
} from "@ant-design/icons";
const Discover = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">
          👋 This is the first Notification.
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.antgroup.com">👋 This is the 2nd Notification.</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="https://www.antgroup.com">👋 This is the 3rd Notification.</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div style={{ overflowY: "scroll", height: "100vh" }}>
        <div
          style={{
            padding: "10px",
            paddingTop: "30px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Input
            type="search"
            style={{ borderRadius: "30px" }}
            placeholder="Search..."
          />
          &nbsp;&nbsp;&nbsp;
          <Dropdown overlay={menu} trigger={["click"]}>
            <BellOutlined style={{ fontSize: "20px", fontWeight: "bold" }} />
          </Dropdown>
          &nbsp;
        </div>
        <div
          style={{
            // fontWeight: "600",

            padding: "20px",
            borderRadius: "10px",
            background: "#EBF4F8",
            margin: "10px",
          }}
        >
          <div style={{ fontSize: "20px" }}>#TrendingTracks</div>
          <br />
          <div>
            <span style={{ fontWeight: "700" }}>
              1. My thoughts on Budget 2022
            </span>
            <br />
            <small>
              Finance Minister has announced budget 2022. My Thoughts on it.
            </small>
          </div>
          <br />
          <div>
            <span style={{ fontWeight: "700" }}>
              2. What is Virtual Digital Asset.
            </span>
            <br />
            <small>
              Let's discuss what's Virtual Digital Asset (VDA) and it's tax
              implications
            </small>
          </div>
          <br />
          <div>
            <span style={{ fontWeight: "700" }}>
              3. Crypto will be taxed at 30%.
            </span>
            <br />
            <small>
              Major announcement on crypto tax. My thoughts on its implications.
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
