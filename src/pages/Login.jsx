import React, { useState } from "react";
import { Button, Input } from "antd";
import axios from "axios";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    axios
      .post("https://gxauth.apimachine.com/gx/user/login", {
        email: emailId,
        password: password,
      })
      .then((res) => {
        console.log(res, "thisisres");
        if (res.statusText == "OK") {
          localStorage.setItem("token", res.data.idToken);
        }
      });

    // axios.post(`https://disappbackend.pulse.stream/account/register_user`);
  };

  const handleRegistration = (res) => {
    axios
      .post(
        "https://disappbackend.pulse.stream/account/register_user",

        {
          username: "ichiranjeeb",
          first_name: "Chiranjeeb",
          last_name: "Jena",
          bio: "Hi 👋🏻",
          profile_image:
            "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
        },
        {
          headers: {
            email: emailId,
            token: res.data.idToken,
          },
        }
      )
      .then((res1) => {
        console.log(res1, "thisisres1");
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
        <Input
          placeholder="Enter Username"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        />
        <br /> <br />
        <Input
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /> <br />
        <Button type="primary" block onClick={handleLogin}>
          Login
        </Button>
      </div>
    </>
  );
};

export default Login;
