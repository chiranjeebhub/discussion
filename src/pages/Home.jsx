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

import React, { useState, useContext } from "react";

import { MyContext } from "../Context";

import { BiUser, BiBell, BiHash } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";

import ReactPlayer from "react-player";

import Nav from "./Nav";

import {
  PlayCircleFilled,
  FastBackwardFilled,
  FastForwardFilled,
  BellOutlined,
} from "@ant-design/icons";
import AudioPost from "../components/AudioPost";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";

const AudioPosts = [
  {
    trackName: "Electronic Music",
    artist: "DJCJ",
    albumArt:
      "https://i.pinimg.com/originals/59/ea/1d/59ea1d6e00d464d2c320309d399d8918.jpg",
    trackLink: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    likeCount: "780",
    retweetCount: "40",
    shareCount: "10",
    userName: "Chiranjeeb Jena",
    userAvatar:
      "https://chatsgx.s3-us-east-2.amazonaws.com/chiranjib.jena@gmail.com/1628090376099.jpeg",
    timestamp: "1 days ago",
    tags: [
      "Electro",
      "DJCJ",
      "ElectroManic",
      "ProductivityTrack",
      "FeelTheBeat",
    ],
  },
  {
    trackName: "Rock Music",
    artist: "DJRK",
    albumArt:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4bb82b72535211.5bead62fe26d5.jpg",
    trackLink: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    likeCount: "620",
    retweetCount: "30",
    shareCount: "20",
    userName: "Chiranjeeb Jena",
    userAvatar:
      "https://chatsgx.s3-us-east-2.amazonaws.com/chiranjib.jena@gmail.com/1628090376099.jpeg",
    timestamp: "2 days ago",
    tags: ["Rock", "DJRK", "RockManic", "TheRock", "ItsRocking"],
  },
  {
    trackName: "Insomaniac",
    artist: "21Pilots",
    albumArt:
      "https://images.complex.com/complex/images/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/hcjrqlvc6dfhpjxob9nt/cudi",
    trackLink: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    likeCount: "620",
    retweetCount: "30",
    shareCount: "20",
    userName: "Chiranjeeb Jena",
    userAvatar:
      "https://chatsgx.s3-us-east-2.amazonaws.com/chiranjib.jena@gmail.com/1628090376099.jpeg",
    timestamp: "3 days ago",
    tags: ["Rock", "DJRK", "RockManic", "TheRock", "ItsRocking"],
  },
];

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">👋 This is the first Notification.</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.antgroup.com">👋 This is the 2nd Notification.</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="https://www.antgroup.com">👋 This is the 3rd Notification.</a>
    </Menu.Item>
  </Menu>
);

const Home = () => {
  const { showProfile, setShowProfile } = useContext(MyContext);

  return (
    <>
      {!localStorage.getItem("token") ? (
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
            {showProfile ? (
              <div style={{ overflowY: "scroll", height: "100vh" }}>
                <Profile />
              </div>
            ) : (
              <>
                <Nav />
                <div style={{ overflowY: "scroll", height: "90vh" }}>
                  {AudioPosts.map((item) => {
                    return (
                      <div>
                        <AudioPost item={item} />
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </Col>
          <Col span={6} style={{ background: "white", height: "100vh" }}>
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
                <BellOutlined
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                />
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
                  Major announcement on crypto tax. My thoughts on its
                  implications.
                </small>
              </div>
            </div>

            {/* <div style={{ padding: "20px" }}>
              <img
                style={{ borderRadius: "10px" }}
                width="100%"
                src="https://i.pinimg.com/originals/59/ea/1d/59ea1d6e00d464d2c320309d399d8918.jpg"
                alt=""
              />
              <div style={{ paddingTop: "20px" }}>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Audio title goes here
                </div>
                <div style={{ color: "gray" }}>Chiranjeeb Jena</div>
              </div>
              <br />
              <ReactPlayer
                url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                width="100%"
                height="40px"
                playing={false}
                controls={true}
              />
             
              
            </div> */}
          </Col>
        </Row>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Login />
        </div>
      )}
    </>
  );
};

export default Home;
