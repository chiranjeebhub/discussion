import { Space } from "antd";
import React from "react";

import {
  UserOutlined,
  SmileOutlined,
  KeyOutlined,
  SafetyCertificateOutlined,
  BgColorsOutlined,
} from "@ant-design/icons";

const SettingsMiddleSection = () => {
  return (
    <>
      <div style={{ padding: "30px" }}>
        <h2>Settings</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <SmileOutlined style={{ fontSize: "20px" }} />
          </div>
          <div style={{ paddingLeft: "20px" }}>
            <div style={{ fontWeight: "600" }}>Account Information</div>
            <div style={{ fontSize: "13px" }}>
              See your account information like phone number
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", paddingTop: "20px" }}
        >
          <div>
            <KeyOutlined style={{ fontSize: "20px" }} />
          </div>
          <div style={{ paddingLeft: "20px" }}>
            <div style={{ fontWeight: "600" }}>Security & Account Access</div>
            <div style={{ fontSize: "13px" }}>
              See your account information like phone number
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", paddingTop: "20px" }}
        >
          <div>
            <SafetyCertificateOutlined style={{ fontSize: "20px" }} />
          </div>
          <div style={{ paddingLeft: "20px" }}>
            <div style={{ fontWeight: "600" }}>Privacy & Safety</div>
            <div style={{ fontSize: "13px" }}>
              See your account information like phone number
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", paddingTop: "20px" }}
        >
          <div>
            <BgColorsOutlined style={{ fontSize: "20px" }} />
          </div>
          <div style={{ paddingLeft: "20px" }}>
            <div style={{ fontWeight: "600" }}>
              Accessibility, display, and languages
            </div>
            <div style={{ fontSize: "13px" }}>
              See your account information like phone number
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsMiddleSection;
