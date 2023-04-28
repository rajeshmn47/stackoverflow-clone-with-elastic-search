import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "./constants/userConstants";

export const Usercard = ({ id }) => {
  const [user, setUser] = useState();
  console.log(id);
  useEffect(async () => {
    const data = await axios.get(`${URL}/auth/getoneuser/${id}`);
    console.log(data);
    setUser(data.data.message);
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{ marginLeft: "1vmax", width: "14px", height: "14px" }}
          src={user?.profilePhoto}
          alt=""
          width="20"
        />
        <p style={{ marginLeft: "1vmax" }}>{user?.username}</p>
      </div>
    </>
  );
};
export default Usercard;
