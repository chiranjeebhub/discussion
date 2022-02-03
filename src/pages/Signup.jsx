import React from "react";
import { Button, Input } from "antd";
import axios from "axios";

const Signup = () => {
  const handleSignup = () => {
    axios
      .post(`https://disappbackend.pulse.stream/account/register_user`, {
        username: "ichiranjeeb",
        first_name: "Chiranjeeb",
        last_name: "Jena",
        bio: "Hi 👋🏻",
        profile_image:
          "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
      })
      .then((res) => {
        console.log(res, "kjkwgfkw");
      });
  };
  return (
    <>
      <div
        style={{
          width: "400px",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
        }}
      >
        <h1>Register</h1>
        <Input placeholder="Enter Username" />
        <br /> <br />
        <Input placeholder="Enter Email" />
        <br /> <br />
        <Input placeholder="Enter Password" />
        <br /> <br />
        <Button type="primary" block onClick={handleSignup}>
          SignUp
        </Button>
      </div>
    </>
  );
};

export default Signup;
