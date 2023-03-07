import React, { useState } from "react";
import people from "./data";
import {
  FaArrowAltCircleLeft,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
  FaStackOverflow,
} from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const prev = () => {
    let newIndex = index;
    if (newIndex <= 0) {
      newIndex = 3;
    } else newIndex--;
    setIndex(newIndex);
  };

  const next = () => {
    let newIndex = index;
    if (newIndex >= 3) {
      newIndex = 0;
    } else newIndex++;
    setIndex(newIndex);
  };
  const surprise = () => {
    let newIndex = Math.trunc(Math.random() * 4);
    setIndex(newIndex);
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job"> {job}</p>
      <p className="info"> {text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={next}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={surprise}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
