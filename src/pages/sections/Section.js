// import React from "react";
import Counter from "../components/counter/Counter";
import Award from "../components/awards/Award";
import tripleImg from "../../assets/img/triple2x.png";
import googleImg from "../../assets/img/play-store2x.png";
import appleImg from "../../assets/img/badge-apple4x.png";

import "./Section.css";
import CONSTATNS from "./Constants";

function Section() {
  return (
    <div className="section-wrapper">
      <div className="section">
        <div className="triple-wrapper">
          <img
            className="triple-img"
            src={tripleImg}
            alt={CONSTATNS.TRIPLE.ALT}
          />
          <div className="triple-label">{CONSTATNS.TRIPLE.LABEL}</div>
        </div>
        <div className="counter-wrapper">
          <Counter
            number={CONSTATNS.COUNTER.USER.NUM}
            numberLabel={CONSTATNS.COUNTER.USER.NUMLABEL}
            textLabel={CONSTATNS.COUNTER.USER.TEXTLABEL}
          />
          <Counter
            number={CONSTATNS.COUNTER.REVIEW.NUM}
            numberLabel={CONSTATNS.COUNTER.REVIEW.NUMLABEL}
            textLabel={CONSTATNS.COUNTER.REVIEW.TEXTLABEL}
          />
          <Counter
            number={CONSTATNS.COUNTER.SAVE.NUM}
            numberLabel={CONSTATNS.COUNTER.SAVE.NUMLABEL}
            textLabel={CONSTATNS.COUNTER.SAVE.TEXTLABEL}
          />
        </div>
        <div className="award-wrapper">
          <Award
            image={googleImg}
            alt={CONSTATNS.AWARD.GOOGLE.ALT}
            label={CONSTATNS.AWARD.GOOGLE.LABEL}
          />
          <Award
            image={appleImg}
            alt={CONSTATNS.AWARD.GOOGLE.ALT}
            label={CONSTATNS.AWARD.APPLE.LABEL}
          />
        </div>
      </div>
    </div>
  );
}

export default Section;
