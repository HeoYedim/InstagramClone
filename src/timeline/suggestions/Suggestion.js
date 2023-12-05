import React from "react";
import "./Suggestion.css";
import { Avatar } from "@mui/material";

function Suggestion({ suggestionUser, suggestionRelation }) {
  return (
    <div className="suggestion">
      <div className="suggestion__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>{suggestionUser.charAt(0).toUpperCase()}</Avatar>
          </span>
          <div className="username__info">
            <span className="username">{suggestionUser}</span>
            <span className="relation">{suggestionRelation}</span>
          </div>
        </div>
        <button className="follow__button">Follow</button>
      </div>
    </div>
  );
}

export default Suggestion;
