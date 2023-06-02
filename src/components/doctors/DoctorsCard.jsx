import React from "react";
import ReactStars from "react-rating-stars-component";
import { FaLocationArrow,FaRegCalendarTimes,FaMoneyBillAlt } from "react-icons/fa";



const DoctorsCard = () => {
  return (
    <div>
      <div className="card flex-1 bg-base-100 shadow-xl">
        <figure className="p-6">
          <img
            src="https://res.cloudinary.com/flexsoftr/image/upload/v1685675985/Rectangle_15_2_phtlbf.png"
            alt="Shoes"
            className="rounded-xl w-full object-contain"
          />
        </figure>
        <div className=" text-left p-6">
          <h2 className="text-2xl font-bold">Karyen Anderson</h2>
          <p>BTP - Senior Physiotherapist</p>
          <ReactStars value={5} edit={false} size={24} activeColor="#ffd700" />
<div className="space-y-2 mt-4">
 <p className="flex items-center gap-3 ">  <FaLocationArrow className="text-2xl"/>  Dhanmondi, Dhaka, Bangladesh</p>
    <p className="flex items-center gap-3 "> <FaRegCalendarTimes className="text-2xl"/> Available On Mon, 22 December</p>
    <p className="flex items-center gap-3 "> <FaMoneyBillAlt className="text-2xl"/> Dhanmondi, Dhaka, Bangladesh</p>
</div>
          <div className="w-full">
            <button className="btn btn-outline w-full border-doctor-btn border-1 hover:border-0 text-doctor-btn hover:bg-doctor-btn  hover:text-white mt-4">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
