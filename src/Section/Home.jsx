import { SideButton } from "./SideButton";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Home = ({ triangles, displayTriangle }) => {
  const [sideBtn, setSideBtn] = useState(false);

  const makeBtnWider = () => {
    setSideBtn(true);
  };
  const makeBtnShort = () => {
    setSideBtn(false);
  };

  return (
    <div className="section--home">
      <div className="section--home--container">
        <div className="section--header">
          <h1>Jane Doe</h1>
          <p className="paragraph">Senior Astral Projectionist</p>
        </div>
        <NavLink to="work" className="section--image">
          <div onMouseOver={makeBtnWider} onMouseOut={makeBtnShort}>
            <img
              className="section--home--image"
              src={require("../images/me.jpg")}
              alt="me"
            ></img>
            <SideButton
              sideBtn={sideBtn}
              triangles={triangles}
              displayTriangle={displayTriangle}
            />
          </div>
        </NavLink>
      </div>
    </div>
  );
};
