import SearchIcon from "@material-ui/icons/Search";
import stack from "./images/stackoverflow.jpeg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./actions/userAction";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import PublicIcon from "@material-ui/icons/Public";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading, error } = useSelector(
    (state) => state.user
  );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    setOpen(false);
  };

  const handleclick = () => {
    setOpen(!open);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    localStorage.removeItem("server_token");
    dispatch(loadUser());
    navigate("/");
  };
  const logout = () => {
    localStorage.removeItem("server_token");
    dispatch(loadUser());
    navigate("/");
  };
  return (
    <>
      <div className="navbar flex align-center justify-center">
        <div className="menuicon">
          {" "}
          <div>
            <MenuIcon onClick={() => handleclick()} />
            <Drawer
              style={{ height: "100vh" }}
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
            >
              <div style={{ marginTop: "10vmax" }}>
                <div>
                  <h2 style={{ margin: "1vmax 1vmax", opacity: "0.5" }}>
                    Home
                  </h2>
                </div>
                <h5
                  style={{ margin: "1vmax 1vmax" }}
                  className="ml-3 opacity-50"
                >
                  Public
                </h5>
                <h1 className="ml-3 opacity-50 flex content-center">
                  <PublicIcon /> Questions
                </h1>
                <h1 style={{ margin: "1vmax 3vmax", fontSize: "1vmax" }}>
                  Tags
                </h1>
                <h1 style={{ margin: "1vmax 3vmax", fontSize: "1vmax" }}>
                  Users
                </h1>
                <h1 className="ml-3 opacity-50 flex content-center">
                  COLLECTIVES
                </h1>
                <h1 style={{ margin: "1vmax 3vmax", fontSize: "1vmax" }}>
                  Explore Collectives
                </h1>

                <h1 className="ml-3 opacity-50 flex content-center">
                  FIND A JOB
                </h1>
                <h1 style={{ margin: "1vmax 3vmax", fontSize: "1vmax" }}>
                  Jobs
                </h1>
                <h1 style={{ margin: "1vmax 3vmax", fontSize: "1vmax" }}>
                  Companies
                </h1>
                <h1 className="ml-3 opacity-50 flex content-center">TEAMS</h1>
                <h1 style={{ margin: "1vmax 3vmax", fontSize: "1vmax" }}>
                  Jobs
                </h1>
              </div>
            </Drawer>
          </div>
        </div>
        <img src={stack} alt="stacl" className="image" />
        <h5 className="m-1 stackoverflow">
          Stack<span className="font-bold">Overflow</span>
        </h5>

        <p className="opacity-50 m-1" style={{fontSize:'12px',margin:'0 10px'}}>Products</p>
        <div className="navbarinputcontainer">
          <SearchIcon style={{ opacity: "0.5",margin:'0 5px' }} />
          <input className="navbarinput" placeholder="search..." />
        </div>
        {user?.username ? (
          <>
            <div className="authresponsive">
              <div style={{ display: "flex", alignItems: "center" }}>
                <SearchIcon />
                <img
                  src={user.profilePhoto}
                  alt=""
                  width="20"
                  onClick={handleClick}
                  style={{ marginLeft: "1vmax" }}
                />
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  style={{
                    zIndex:
                      "102222222222222222222222222222222222222222222222222222",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="authresponsive">
              <button className="loginbtn" onClick={() => navigate("login")}>
                Login
              </button>
              <button className="signupbtn" onClick={() => navigate("/signup")}>
                Signup
              </button>
            </div>
          </>
        )}
        {user?.username ? (
          <>
            <div className="auth">
              <h5 className="username">{user.username}</h5>
              <img src={user.profilePhoto} alt="" width="20" />
              <img
                src="./inbox.svg"
                alt=""
                style={{ width: "20px", margin: "0 10px" }}
              />
              <img
                src="./prize.svg"
                alt=""
                style={{ width: "20px", margin: "0 10px" }}
              />
              <img
                src="./help.svg"
                alt=""
                style={{ width: "20px", margin: "0 10px" }}
              />
              <img
                src="./exchange.svg"
                alt=""
                style={{ width: "20px", margin: "0 10px" }}
              />
            </div>
          </>
        ) : (
          <>
            <div className="auth">
              <button className="loginbtn" onClick={() => navigate("login")}>
                Login
              </button>
              <button className="signupbtn" onClick={() => navigate("/signup")}>
                Signup
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Navbar;
