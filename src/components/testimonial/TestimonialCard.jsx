import React from "react";
import { FaQuoteLeft } from "react-icons/fa";


const TestimonialCard = (props) => {
    const {img,name,position,feedBack}= props.content;
  return (
    <div className="p-10 space-y-4 shadow-xl  rounded-sm">
    <div className="flex justify-between ">
      <div className="flex gap-3">
  
        <img className="w-12 h-12 border border-1 rounded-full border-doctor-btn " src={img} alt="" />
        <div className="text-left">
         
          <h3 className="text-xl font-bold">{name}</h3>
        <h5 className="">{position}</h5>
        </div>
      </div>
      <div> <FaQuoteLeft className="text-5xl text-doctor-btn" /> </div>
     
    </div>
    <p className="text-left">{feedBack}</p>
    </div>
  );
};

export default TestimonialCard;
