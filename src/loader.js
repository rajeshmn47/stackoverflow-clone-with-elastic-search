import { useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "./sidebar";
import Rightbar from "./rightbar";
import PublicIcon from "@material-ui/icons/Public";
import ReactMarkdown from "react-markdown";
import {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import "./answerscontainer.css";
import { format } from "timeago.js";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  CircularProgress,
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import MarkdownEditor from "./Markdown";
import Usercard from "./Usercard";
import { useAlert } from "react-alert";
import Answer from "./answers";
import bottomicon from "./images/bottomdown.jpeg";
import upicon from "./images/upperup.jpeg";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import { URL } from "./constants/userConstants";

export const Loader = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: "45%",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <CircularProgress />
      </div>
    </>
  );
};
export default Loader;
