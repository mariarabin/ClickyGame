import React from "react";
import "./Headers1.css";

const Header1 = props => (
  <div className="header1">
    <div className="title1">{props.children}</div>
    <div className="scores1">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default Header1;