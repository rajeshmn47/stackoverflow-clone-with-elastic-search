import Usercard from "./Usercard";
import bottomicon from "./images/bottomdown.jpeg";
import upicon from "./images/upperup.jpeg";
import { format } from "timeago.js";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { URL } from "./constants/userConstants";
import { useAlert } from "react-alert";

export const Answer = ({ answer, id, ans, questionid }) => {
  console.log(ans);
  const { user, isAuthenticated, loading, error } = useSelector(
    (state) => state.user
  );
  const alert = useAlert();
  const [votes, setVotes] = useState();
  const [voted, setVoted] = useState();

  useEffect(() => {
    console.log(ans.votes.length);
    setVotes(
      ans.votes.length > 0 ? ans.votes.reduce((a, b) => a + b.vote, 0) : 0
    );
    const z = ans?.votes?.find((a) => a?.user === user._id);
    if (z) {
      if (z?.vote === 1) {
        setVoted("upvoted");
      } else {
        if (z?.vote === -1) setVoted("downvoted");
      }
    } else {
      console.log("ok bro");
    }
  }, [ans, user]);

  const increasevotes = async (id, questionid) => {
    try {
      if (user) {
        console.log(id, questionid);
        if (!(voted === "upvoted")) {
          setVotes(votes + 1);
          setVoted("upvoted");
          await axios.post(`${URL}/question/upvoteanswer/${questionid}`, {
            user: user._id,
            vote: 1,
            answerid: ans._id,
          });
        } else {
          await axios.post(`${URL}/question/upvoteanswer/${questionid}`, {
            user: user._id,
            vote: -1,
            answerid: ans._id,
          });

          setVotes(votes - 1);
          setVoted();
        }
      }
    }
    catch (error) {
      alert.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  };
  const decreasevotes = async (id, questionid) => {
    try {
      if (user) {
        console.log(id, questionid);
        if (!(voted === "downvoted")) {
          setVotes(votes - 1);
          setVoted("downvoted");
          await axios.post(`${URL}/question/upvoteanswer/${questionid}`, {
            user: user._id,
            vote: -1,
            answerid: ans._id,
          });
        } else {
          await axios.post(`${URL}/question/upvoteanswer/${questionid}`, {
            user: user._id,
            vote: 1,
            answerid: ans._id,
          });
          setVotes(votes + 1);
          setVoted();
        }
      }
    }
    catch (error) {
      alert.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  const deleteAnswer = async (id, questionid) => {
    try {
      await axios.post(`${URL}/question//deleteoneanswer/${questionid}`, {
        user: user._id,
        answerid: ans._id,
      });
      alert.success("answer deleted succesfully");
      window.location.reload();
    } catch {
      alert.error("something gone wrong");
    }
  }

  return (
    <>
      <div className="answer">
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "1vmax",
            }}
          >
            <div
              className={voted === "upvoted" ? "votedarrow-up" : "arrow-up"}
              onClick={() => increasevotes(id, questionid)}
            />
            <h1 style={{ fontSize: "2vmax" }}>{votes}</h1>
            <div
              className={
                voted === "downvoted" ? "votedarrow-down" : "arrow-down"
              }
              onClick={() => decreasevotes(id, questionid)}
            />
          </div>
          <div style={{ width: "100%" }}>
            <ReactMarkdown children={answer} rehypePlugins={[rehypeRaw]} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                opacity: "0.7",
                marginTop: "1.5vmax",
              }}
            >
              {user._id === ans.author.toString() ? (
                <div>
                  share{" "}
                  <button style={{ marginRight: "5px" }}>edit</button>
                  <button onClick={() => deleteAnswer(id, questionid)}>delete</button>
                </div>
              ) : <p style={{ opacity: "0.7", textTransform: "capitalize" }}>
                {" "}
                share edit follow
              </p>}
              <div>
                <Usercard id={id} />
                {format(ans.created)}
              </div>
            </div>
          </div>
        </div>
        <div style={{ margin: "1vmax 1vmax" }}>
          <input
            type="text"
            placeholder="add comment"
            style={{ outline: "none" }}
          />
        </div>
      </div>
    </>
  );
};
export default Answer;
