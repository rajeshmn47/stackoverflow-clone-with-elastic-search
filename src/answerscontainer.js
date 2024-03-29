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
import Loader from "./loader";

export const Answerscontainer = ({ props, ref }) => {
  const { user, isAuthenticated, loading, error } = useSelector(
    (state) => state.user
  );
  const alert = useAlert();
  const [votes, setVotes] = useState();
  const [voted, setVoted] = useState();
  const [formData, setFormData] = useState();
  const [value, setValue] = useState();
  const markdownEditorRef = useRef(null);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [question, setQuestion] = useState();
  const [text, setText] = useState();
  const [open, setOpen] = useState(false);

  useEffect(async () => {
    console.log(id);
    const { data } = await axios.get(`${URL}/question/getonequestion/${id}`);
    console.log(data?.question?.answers[0]?.text);
    setQuestion(data.question);
  }, [id]);

  useEffect(() => {
    setVotes(
      question?.votes.length > 0 ? question?.votes.reduce((a, b) => a + b.vote, 0) : 0
    );
    const z = question?.votes?.find((a) => a?.user === user._id);
    if (z) {
      if (z?.vote === 1) {
        setVoted("upvoted");
      } else {
        if (z?.vote === -1) setVoted("downvoted");
      }
    } else {
      console.log("ok bro");
    }
  }, [question]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      if (user) {
        console.log(user._id, "postanswer");
        await axios.post(`${URL}/question/postanswer`, {
          questionid: id,
          authorid: user._id,
          text: text,
        });
        alert.success("posted succesfully");
        const { data } = await axios.get(
          `${URL}/question/getonequestion/${id}`
        );
        console.log(data?.question?.answers[0]?.text);
        setQuestion(data.question);
      } else {
        alert.error("please login");
      }
    } catch (error) {
      alert.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  const updateConvertedContent = (htmlConvertedContent) => {
    setText(htmlConvertedContent);
  };
  console.log(votes, 'votes');
  const increasevotes = async () => {
    console.log(id);
    if (!(voted === "upvoted")) {
      setVotes(votes + 1);
      setVoted("upvoted");
      await axios.post(`${URL}/question/upvotequestion/${id}`, {
        user: user._id,
        vote: 1,
        questionid: question?._id,
      });
    } else {
      setVotes(votes - 1);
      setVoted();
      await axios.post(`${URL}/question/upvotequestion/${id}`, {
        user: user._id,
        vote: -1,
        questionid: question._id,
      });
    }
  };
  const decreasevotes = async () => {
    console.log(id);
    if (!(voted === "downvoted")) {
      setVotes(votes - 1);
      setVoted("downvoted");
      await axios.post(`${URL}/question/upvotequestion/${id}`, {
        user: user._id,
        vote: -1,
        questionid: question._id,
      });
    } else {
      setVotes(votes + 1);
      setVoted();
      await axios.post(`${URL}/question/upvotequestion/${id}`, {
        user: user._id,
        vote: 1,
        questionid: question._id,
      });
    }
  };
  const toolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: [
      "INLINE_STYLE_BUTTONS",
      "BLOCK_TYPE_BUTTONS",
      "LINK_BUTTONS",
      // 'BLOCK_TYPE_DROPDOWN',
      // 'HISTORY_BUTTONS',
    ],
    INLINE_STYLE_BUTTONS: [
      { label: "Bold", style: "BOLD", className: "button-format" },
      { label: "Italic", style: "ITALIC", className: "button-format" },
      { label: "Underline", style: "UNDERLINE", className: "button-format" },
      // {label: 'Monospace', style: 'CODE', className: 'button-format'},
    ],
    // BLOCK_TYPE_DROPDOWN: [
    //   {label: 'Normal', style: 'unstyled'},
    //   {label: 'Heading Large', style: 'header-one'},
    //   {label: 'Heading Medium', style: 'header-two'},
    //   {label: 'Heading Small', style: 'header-three'},
    // ],
    BLOCK_TYPE_BUTTONS: [
      { label: "UL", style: "unordered-list-item", className: "button-format" },
      { label: "OL", style: "ordered-list-item", className: "button-format" },
      { label: "Blockquote", style: "blockquote", className: "button-format" },
      {
        label: "Code Block",
        style: "code-block",
        className: "button-format code-block",
      },
    ],
  };

  return (
    <>
      <div className="flex justify-between m-50 p-2 home">
        <Sidebar />
        <div className="containeranswers">
          {question ? (
            <>
              <div className="answercontainer">
                <h1 style={{ fontSize: "3vmax" }}>{question?.title}</h1>
                <p style={{ fontSize: "12px" }}>
                  Asked{" "}
                  <span style={{ opacity: "0.5", marginRight: "3vw" }}>
                    {format(question?.created)}
                  </span>
                  Modified{" "}
                  <span style={{ opacity: "0.5", marginRight: "3vw" }}>
                    {format(question?.created)}
                  </span>
                  Views{" "}
                  <span style={{ opacity: "0.5", marginRight: "3vw" }}>
                    {question?.views}
                  </span>
                </p>
              </div>
              <div className="answers">
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "2vmax",
                    }}
                  >
                    <div
                      className={
                        voted === "upvoted" ? "votedarrow-up" : "arrow-up"
                      }
                      onClick={() => increasevotes()}
                    />
                    <h1 style={{ fontSize: "2vmax", opacity: "0.7" }}>
                      {votes}
                    </h1>
                    <div
                      className={
                        voted === "downvoted" ? "votedarrow-down" : "arrow-down"
                      }
                      onClick={() => decreasevotes()}
                    />
                  </div>
                  <div
                    style={{
                      minHeight: "15vh",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flexStart",
                      alignItems: "flexStart",
                    }}
                  >
                    <p> {question?.text}</p>

                    <div className="tagscontainer">
                      {question?.tags?.map((q) => (
                        <div className="tag">{q.text}</div>
                      ))}
                    </div>
                    <div
                      className="shareit"                    >
                      <p style={{ opacity: "0.7" }}> share edit follow</p>
                      <Usercard id={question?.author} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h1 style={{ fontSize: "2vmax", margin: "3vmax 0vmax" }}>
                  {question.answers.length} Answers
                </h1>
                {question?.answers.length > 0
                  ? question?.answers?.map((q) => (
                    <>
                      <Answer
                        answer={q?.text?.slice(3, q?.text?.length - 4)}
                        id={q?.author}
                        ans={q}
                        questionid={question._id}
                      />
                    </>
                  ))
                  : null}
              </div>
            </>
          ) : (
            <Loader />
          )}
          <div>
            <h1 style={{ fontSize: "2vmax" }}>Your Answer</h1>
            <form onSubmit={(e) => handlesubmit(e)} className="answerform">
              <MarkdownEditor
                ref={markdownEditorRef}
                onChange={updateConvertedContent}
              />
              <button type="submit" className="askquestion">
                Post Your Answer
              </button>
            </form>
          </div>
        </div>
        <Rightbar />
      </div>
    </>
  );
};
export default Answerscontainer;
