import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const AllSlots = ({reaload}) => {
  const { data: slots = [], refetch } = useQuery({
    queryKey: ["slots"],
    queryFn: () =>
      fetch("http://localhost:3000/slots").then((res) => res.json()),
  });
console.log(reaload);

 if(reaload){
    refetch();
 }
  //handle delete
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
        axios.delete(`http://localhost:3000/slots/${id}`).then((res) => {
          console.log("deleted res", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire(
              "Deleted!",
              "Your Slot has been deleted.",
              "success"
            ).then((res) => console.log(res));
          }
        });
      }
    });
  };

  return (
    <div className=" ">
      <thead className=" ">
        <tr>
        <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left  leading-4 text-gray-500 uppercase tracking-wider">Doctor</th>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left  leading-4 text-gray-500 uppercase tracking-wider">Date and Time</th>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left  leading-4 text-gray-500 uppercase tracking-wider">Fees</th>
                            
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-right  leading-4 text-gray-500 uppercase tracking-wider">Action</th>
                              
        </tr>
      </thead>

      <tbody className="bg-white "></tbody>
      {slots.map((n) => (
        <tr key={n._id}>
          <td className=" align-middle px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0 ">
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img src={n.image} alt="Tailwind-CSS-Avatar-component" />
                  </div>
                </div>
              </div>

              <div className="ml-4">
                <div className=" font-semibold leading-5 text-gray-900">
                  {n.doctor}
                </div>
                <div className=" leading-5 text-gray-500">{n.speciality}</div>
              </div>
            </div>
          </td>

          <td className=" align-middle px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div className=" leading-5 text-gray-900">{n?.date}</div>
            <div className=" leading-5 text-gray-900">{n.timeslot}</div>
          </td>
          <td className=" align-middle px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-500">
            {n?.fees}
          </td>

          <td className=" align-middle px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200  leading-5 font-medium">
         
            <button
              onClick={() => handleDelete(n._id)}
              className="btn btn-sm bg-secondary text-white mx-2"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
      <tbody />
    </div>
  );
};

export default AllSlots;
