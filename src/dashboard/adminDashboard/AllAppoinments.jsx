import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const AllAppoinments = () => {
  const nevigate = useNavigate();

  const { data: appointments = [], refetch } = useQuery(["appointments"], async () => {
    const res = await axios.get("http://localhost:3000/appointments");
    return res.data;
  });
  //delete handle
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/appointments/${id}`).then((res) => {
          console.log("deleted res", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            ).then((res) => console.log(res));
          }
        });
      }
    });
  };

  const thead = [
    "Sl No",
    " Patient Info",
    "Mobile",
    'Appointment For ',
   
    "Doctor",
    "",
   
  ];
  //
  return (
    <div className="p-10 m-10">
      <h1 className="text-left mb-3 text-2xl font-semibold">
        {" "}
        All Appointments that User Booked
      </h1>
      <div className="p-10  mx-auto shadow-sm bg-white rounded-lg">
        <div className="">
          <div className="flex flex-col mt-6">
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="align-middle inline-block min-w-full  overflow-hidden sm:rounded-lg border-b border-gray-200">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      {thead.map((n, index) => (
                        <th
                          key={index}
                          className="px-6 py-3 text-sm border-b border-gray-200 bg-gray-100 text-left  leading-4 text-gray-500 uppercase tracking-wider"
                        >
                          {n}
                        </th>
                      ))}
                    </tr>
                  </thead> 

                  <tbody className="bg-white">
                    {appointments.map((n, index) => (
                      <tr  className="px-6 py-4 whitespace-no-wrap items-center border-b border-gray-200">
                        <td>0{index+1}</td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 "></div>

                            <div className="ml-4">
                              <div className=" font-semibold leading-5 text-gray-900">
                                {n?.patientName}
                              </div>
                              <div className=" leading-5 text-gray-500">
                                {n?.patientAge}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-500">
                          {n?.mobile}
                        </td>
                        

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className=" leading-5 text-gray-900">
                            {n?.slotTitle}
                          </div>
                          <div className=" leading-5 text-gray-900">
                            {n?.slotTime}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className=" leading-5 text-gray-900">
                            {n?.doctor}
                          </div>
                          <div className=" leading-5 text-gray-900">
                            {n?.doctorTitle}
                          </div>
                        </td>
                        

                        <td className="px-6 py-4 flex self-center whitespace-no-wrap text-right  leading-5 font-medium">
                      
                          <button
                           
                            className="btn text-white btn-xs bg-doctor-btn mx-2"
                          >
                            Paid
                          </button>
                          <button
                            onClick={() => handleDelete(n._id)}
                            className="btn text-white btn-xs bg-doctor-primary mx-2"
                          >
                            Approved
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAppoinments;
