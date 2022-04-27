import { Button, Container, Link, InputLabel, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { notify } from "../../components/Toastify/Toastify";
import { useAuth } from "../../contexts/AuthContextProvider";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright SAYAKAT © "}
      <Link color="inherit" href="/">
        Home page
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}
const Login = () => {
  const { resetPass } = useAuth();
  const [inpVal, setInpVal] = useState("");

  const handleSend = () => {
    if (!inpVal) {
      notify("error", "Fill the field");
    } else {
      resetPass(inpVal);
      notify("success", "Sent to your email.");
      setInpVal("");
    }
  };
  return (
    <div className="back-img">
      <Header />
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            maxWidth: "200px",
            padding: "30px",
          }}
        >
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_398183.png"
            alt=""
            width="50px"
          />
          <h4 style={{ color: "black" }}>Reset Password</h4>
          <InputLabel style={{ marginBlock: "20px", fontWeight: "bold" }}>
            Email
          </InputLabel>
          <input
            style={{
              height: "30px",
              width: "300px",
              border: "none",
              borderRadius: "10px",
            }}
            value={inpVal}
            onChange={(e) => setInpVal(e.target.value)}
          ></input>
          <Button
            onClick={handleSend}
            className="btn-all"
            variant="outlined"
            style={{
              height: "30px",
              width: "300px",
              marginTop: "10px",
            }}
          >
            Send Code
          </Button>
          <Copyright sx={{ mt: 5 }} />
        </div>
      </div>
    </div>
  );
};

export default Login;
