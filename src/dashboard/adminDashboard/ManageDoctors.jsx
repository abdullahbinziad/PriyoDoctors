import React, { useState } from "react";

const ManageDoctors = () => {


const [doctors,setDoctors] = useState([]);


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
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left  leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left  leading-4 font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left  leading-4 font-medium text-gray-500 uppercase tracking-wider">Shift</th>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left  leading-4 font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left  leading-4 font-medium text-gray-500 uppercase tracking-wider"></th>
                              
                            </tr>
                        </thead>

                        <tbody className="bg-white">
                           {
                            doctors.map((n,index)=>  <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </div>

                                    <div className="ml-4">
                                        <div className="text-sm leading-5 font-medium text-gray-900">{n.name}</div>
                                        <div className="text-sm leading-5 text-gray-500">{n.speciality}</div>
                                    </div>
                                </div>
                            </td>
                            
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-900">{n.email}</div>
                               
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <span className="px-2 inline-flex  leading-5 font-semibold rounded-full bg-green-100 text-green-800">{n?.shift}</span>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">{n?.mobile}</td>

                            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                
                            <button className="btn btn-sm mx-2">View</button>
                            <button className="btn btn-sm mx-2">Edit</button>
                            <button className="btn btn-sm mx-2">Delete</button>

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
