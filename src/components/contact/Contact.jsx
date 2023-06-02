import React from "react";

const Contact = () => {
  return (
    <div className="mt-20 flex justify-betwwen items-center gap-6  bg-doctor-primary p-20 text-white rounded-lg">
      <div className=" w-2/5 space-y-10 ">
        <h1 className="text-3xl font-bold">Contact With Us</h1>
        <h2>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi.
        </h2>
        <div>
          <div>+880177206#####</div>
          <div>Dhanmondi, Dhaka, Bangladesh</div>
        </div>
      </div>
      <div className="w-5/6">
        <form action="">
          <div className="grid grid-cols-2 gap-4 ">
            <input
              type="text"
              placeholder="Name"
              className="input bg-doctor-input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Email"
              className="input bg-doctor-input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Mobile Number "
              className="input bg-doctor-input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Doctor Name"
              className="input bg-doctor-input input-bordered w-full"
            />
             <input
              type="date"
              placeholder=""
              className="input bg-doctor-input input-bordered w-full"
            />
            <select class="select text-white bg-doctor-input  w-full ">
              <option disabled selected>
                Pick the best JS framework
              </option>
              <option>Svelte</option>
              <option>Vue</option>
              <option>React</option>
            </select>
          </div>
          <button className="btn w-full mt-5 border-0 bg-doctor-btn">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
