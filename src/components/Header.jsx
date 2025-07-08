import React from "react";
import "../css/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate(null);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(removeUser());
    navigate("/");
  };

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        // width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        boxSizing: "border-box",
      }}
    >
      <img
        className="netflix-logo"
        alt="netflix-logo"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />

      {user && (
        <button
          onClick={handleSignOut}
          style={{
            backgroundColor: "#e50914",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
