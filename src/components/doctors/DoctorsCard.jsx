import React from "react";

const DoctorsCard = () => {
  return (
    <div>
      <div class="card flex-1 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src="https://ibb.co/GTnc87K"
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
            <button class="btn btn-outline">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
