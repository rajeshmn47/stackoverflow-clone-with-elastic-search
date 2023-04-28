import "./loginsignup.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import google from "../images/googleicon.jpeg";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userAction";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated, loading, error } = useSelector(
    (state) => state.user
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const alert = useAlert();

  useEffect(() => {
    if (error) {
      alert.error(error);
    }
    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, loading, isAuthenticated, user, error]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    const formdata = { username: username, password: password };
    dispatch(login(formdata));
    console.log("ok");
  };
  return (
    <>
      <div className="signup">
        <div className="signupbox">
          <div
            className="sociallogin google"
            onClick={() => navigate("/googlelogin")}
          >
            <img src={google} alt="" style={{ marginRight: "5px" }} />
            Sign up with google
          </div>
          <div className="sociallogin git">
            <GitHubIcon style={{ marginRight: "5px" }} />
            Sign up with google
          </div>
          <div className="sociallogin fb">
            <FacebookIcon style={{ marginRight: "5px" }} />
            Sign up with facebook
          </div>
          <form className="loginform" onSubmit={(e) => handlesubmit(e)}>
            <div>
              <h5 className="font-bold">username</h5>
              <input
                type="text"
                className="inputs"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <h5 className="font-bold">password</h5>
              <input
                type="text"
                className="inputs"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input type="submit" className="submitbutton" value="Log in" />
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
