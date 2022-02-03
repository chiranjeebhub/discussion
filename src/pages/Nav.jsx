import { Col, Input, Row, Avatar, Button } from "antd";
import React from "react";
import { FcAudioFile } from "react-icons/fc";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

const Nav = () => {
  return (
    <Row
      style={{
        padding: "20px",
        paddingTop: "30px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* <Col span={5}>
        <BsArrowLeft style={{ fontSize: "25px" }} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <BsArrowRight style={{ fontSize: "25px" }} />
        
      </Col> */}

      <Col span={24} style={{ display: "flex", alignItems: "center" }}>
        <Button size="large" style={{ borderRadius: "10px" }}>
          Attach Audio
        </Button>{" "}
        &nbsp;&nbsp;or&nbsp;&nbsp;
        <Input
          size="large"
          placeholder="Paste Brain.stream link..."
          style={{ borderRadius: "10px" }}
        />
        &nbsp;&nbsp;
        <Button
          size="large"
          type="primary"
          style={{
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <AiOutlineArrowRight />
          &nbsp; Post
        </Button>
      </Col>
      {/* <Col span={4} style={{ display: "flex", justifyContent: "right" }}>
        <Avatar src="https://chatsgx.s3-us-east-2.amazonaws.com/chiranjib.jena@gmail.com/1628090376099.jpeg" />
      </Col> */}
    </Row>
  );
};

export default Nav;
