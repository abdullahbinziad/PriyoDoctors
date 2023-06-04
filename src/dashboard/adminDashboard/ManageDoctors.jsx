import axios from "axios";
import React, { useState } from "react";
import {
 
    useQuery,
  } from '@tanstack/react-query'
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const ManageDoctors = () => {

const nevigate = useNavigate();

const { data: doctors = [], refetch } = useQuery(['doctors'], async () => {
    const res = await axios.get('http://localhost:3000/doctors')
    return res.data;
})
//delete handle
const handleDelete = id => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {

            axios.delete(`http://localhost:3000/doctors/${id}`)
                .then(res => {
                    console.log('deleted res', res.data);
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        ).then((res)=> console.log(res))
                    }
                })

        }
    })
}
//
  return (
    <div className="p-10 m-10">
      <h1 className="text-left mb-3 text-2xl font-semibold">
        {" "}
        Manage Doctors
      </h1>
      <div className="p-10  mx-auto shadow-sm bg-white rounded-lg">
    
    <div className="">
        
        
        <div className="flex flex-col mt-6">
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="align-middle inline-block min-w-full  overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left  leading-4 text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left  leading-4 text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left  leading-4 text-gray-500 uppercase tracking-wider">Mobile</th>
                            
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-right  leading-4 text-gray-500 uppercase tracking-wider">Action</th>
                              
                            </tr>
                        </thead>

                        <tbody className="bg-white">
                           {
                            doctors.map((n,index)=>  <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 ">
                                    <div className="avatar">
  <div className="w-16 rounded-full">
    <img src={n.image} alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
                                    </div>

                                    <div className="ml-4">
                                        <div className=" font-semibold leading-5 text-gray-900">{n.name}</div>
                                        <div className=" leading-5 text-gray-500">{n.speciality}</div>
                                    </div>
                                </div>
                            </td>
                            
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className=" leading-5 text-gray-900">{n.email}</div>
                               
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-500">{n?.mobile}</td>
                           

                         

                            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200  leading-5 font-medium">
                                
                            <button onClick={()=> nevigate(`/doctors/${n._id}`)  } className="btn btn-sm mx-2">View</button>
                            <button onClick={()=> nevigate(`/dashboard/UpdateDoctorsData/${n._id}`)} className="btn btn-sm mx-2">Edit</button>
                            <button onClick={()=>handleDelete(n._id)} className="btn btn-sm btn-secondary mx-2">Delete</button>

                            </td>
                        </tr>
                       )
                           }
                           
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

export default ManageDoctors;
