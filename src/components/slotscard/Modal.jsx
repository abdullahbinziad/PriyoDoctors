import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Modal = ({ isOpen, closeModal, onSubmit,data }) => {

    const { register, handleSubmit  } = useForm();


const submitData=(data)=>{
    onSubmit({ patientName:data.patientName, patientAge:data.patientAge, patientNumber:data.patientNumber, timeslot:data.timeslot });
}

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Call the onSubmit function with the form data
//    
//   };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white relative w-96 rounded-lg shadow-lg">
        <div className="px-6 py-4 ">
          <h2 className="text-2xl font-semibold py-6 text-center">Book Appointment</h2>
          <div className=" flex justify-between ">

<div className=''>
    <div className='flex gap-5'><h1 className=''>Doctor : <span className='text- font-semibold'>{data?.doctor}</span> </h1>
    || <h1 className=' '>Fee : <span className='text- font-semibold'>{data?.fees}</span></h1></div>
    <h1 className='py-3'>Date: <span className='text- font-semibold'>{data?.date}</span></h1>
</div>
  {/* if there is a button in form, it will close the modal */}

</div>
          {/* ...other modal content... */}
          <form onSubmit={handleSubmit(submitData)} className="mt-4 space-y-4 ">
            <div className="form-control">
              <input
              {...register("patientName")}
              required
                type="text"
                placeholder="Enter Patient Name"
               
               
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control">
              <input
              {...register("patientAge")}
                required
                type="number"
                placeholder="Patient Age"
              
               
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control">
              <input
               {...register("patientNumber")}
              required
                type="text"
                placeholder="Enter Contacts Number"
               
               
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control">
              <select
              {...register("timeslot")}
               
              
                className="select select-bordered w-full"
              >
                {/* <option selected disabled>Select One</option> */}
                <option selected disabled>{data?.timeslot}</option>
              </select>
            </div>
            <div className="mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Add Slots
              </button>
            </div>
          </form>
        </div>
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 p-2  text-gray-600 hover:text-gray-800"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;