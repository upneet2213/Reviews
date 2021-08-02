import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex]= useState(0);
  const { name, job, image, text } = people[index];
  const nextPerson =()=>{
  index<people.length-1?setIndex((index+1)):setIndex(0)
  }
  const beforePerson =()=>{
    index>0?setIndex(index-1):setIndex(3)
  }
  const random =()=>{
    const randomNumber= Math.floor(Math.random()*people.length )
    setIndex(randomNumber)
  }
  return (
  <article>
  <div className="review">
    <div className="img-container">
      <img src={image} alt="" className="person-img"/>
      <span className="quote-icon"><FaQuoteRight/></span>
    </div>
    <div className="info">
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p>{text}</p>
      <div className="button-container">
      <button className="prev-btn" onClick={beforePerson}> <FaChevronLeft/></button>
      <button className="next-btn" onClick={nextPerson}> <FaChevronRight/></button>
      
      </div>
      <button className="random-btn" onClick={random}> Surprise Me</button>
      
    </div>
  </div>
  </article>)
  
};

export default Review;
