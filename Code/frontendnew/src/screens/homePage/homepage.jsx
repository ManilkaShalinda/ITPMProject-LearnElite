import React, { useEffect, useState } from "react";
import "./homepage.css";
import { useNavigate } from "react";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="hp">
      <div className="tital">Wellcome to the Learnelight !</div>
      <div className="tbody">
        " In here We are mainly focusing on qulitiy of education.
        <br />
        so if you want to be a part of our project you
        <br /> can join with us. "
      </div>

      <div className="btnp">
        <button className="btn1" onClick={() => navigate("/allcourse")}>
          <h3>Course Managment</h3>
        </button>

        <button className="btn2">
          <h3>
            Event
            <br /> Managment
          </h3>
        </button>

        <button className="btn3">
          <h3>Donetion Managment</h3>
        </button>

        <button className="btn4">
          <h3>psychology Managment</h3>
        </button>
      </div>
    </div>
  );
}

export default Homepage;
