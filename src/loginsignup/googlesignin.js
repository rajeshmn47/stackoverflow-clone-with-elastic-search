import React from "react";
import { GoogleLogin } from "react-google-login";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { URL } from "../constants/userConstants";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Logingoogle() {
  const classes = useStyles();
  const history = useNavigate();

  const onGoogleSuccess = async (response) => {
    const access_token = response.tokenId;
    const { data } = await axios.post(`${URL}auth/googlelogin`, {
      tokenId: access_token,
    });
    console.log(data);
    localStorage.setItem("server_token", data.server_token);
  };

  const onGoogleFailure = (err) => {
    console.log(err);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#151a30",
        color: "white",
      }}
    >
      <h1>Google Oauth Sign In</h1>
      <GoogleLogin
        clientId="711974125982-gaeieriu9q60ctbps2qpbjitv0374d7l.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={onGoogleSuccess}
        onFailure={onGoogleFailure}
        className="google-login-button"
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
