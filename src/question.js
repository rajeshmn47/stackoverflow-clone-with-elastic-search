import { useNavigate } from "react-router-dom";
import Usercard from "./Usercard";
import bottomicon from "./images/bottomdown.jpeg";
import upicon from "./images/upperup.jpeg";
import { format } from "timeago.js";

export const Question = ({
  text,
  tags,
  id,
  userid,
  answers,
  views,
  votes,
  createdat,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="question" onClick={() => navigate(`/answers/${id}`)}>
        <div className="questio">
          <h5 style={{ marginRight: "2vw" }}>{votes} votes</h5>
          <h5 style={{ marginRight: "2vw", color: "#6c757e" }}>
            {answers} answers
          </h5>
          <h5 style={{ marginRight: "2vw", color: "#6c757e" }}>
            {views} views
          </h5>
        </div>
        <div className="questi">
          <div style={{ color: "#0e7bce" }}>{text}</div>
          <div
            style={{ color: "#0e7bce", display: "flex", width: "100%" }}
            className="tags"
          >
            {tags.map((t) => (
              <>
                <div className="tag">{t.text}</div>
              </>
            ))}

            <div
              style={{
                marginLeft: "auto",
              }}
            >
              {" "}
              <span
                style={{
                  color: "blue",
                  fontSize: "12px",
                  marginLeft: "auto",
                }}
              >
                {}
              </span>
              <span
                style={{
                  color: "black",
                  fontSize: "12px",
                  marginLeft: "1vmax",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Usercard id={userid} />
                  <p style={{ marginLeft: "1vmax" }}>{format(createdat)}</p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Question;
