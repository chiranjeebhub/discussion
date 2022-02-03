import { Col, Divider, Row, Space, Tag } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import ReactPlayer from "react-player";

import {
  HeartOutlined,
  RetweetOutlined,
  ShareAltOutlined,
  MoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const AudioPost = ({ item }) => {
  return (
    <div
      style={{
        padding: "20px 30px",
        background: "white",
        margin: "20px",
        borderRadius: "10px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <Avatar src={item.userAvatar} />
          <div style={{ fontWeight: "bold" }}>
            &nbsp;&nbsp;{item.userName}
          </div>{" "}
          &nbsp;&nbsp;
          <div style={{ color: "gray" }}>posted a track {item.timestamp}</div>
        </div>
        <div>
          {/* <MoreOutlined /> */}
          <SettingOutlined />
        </div>
      </div>

      <Row gutter={20}>
        <Col span={6}>
          <img
            style={{ borderRadius: "10px" }}
            src={item.albumArt}
            alt=""
            width="100%"
          />
        </Col>
        <Col span={18}>
          <ReactPlayer
            forceAudio
            url={item.trackLink}
            width="100%"
            height="50px"
            playing={false}
            controls={true}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                padding: "0px 10px",
                paddingTop: "20px",
                fontSize: "18px",
              }}
            >
              <span>{item.trackName}</span>{" "}
              <span style={{ color: "gray" }}>by</span>{" "}
              <span style={{ color: "hotpink", fontWeight: "600" }}>
                {item.artist}
              </span>
            </div>
            <Space
              size={10}
              style={{ padding: "20px 20px", fontSize: "15px" }}
              split={<Divider type="vertical" />}
            >
              <div>
                <HeartOutlined /> {item.likeCount}
              </div>
              <div>
                <RetweetOutlined /> {item.retweetCount}
              </div>
              <div>
                <ShareAltOutlined /> {item.shareCount}
              </div>
            </Space>
          </div>

          <div
            style={{
              padding: "0px 10px",
              paddingTop: "10px",
              fontSize: "18px",
            }}
          >
            {item.tags.map((item) => {
              return <Tag style={{ borderRadius: "10px" }}>#{item}</Tag>;
            })}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AudioPost;
