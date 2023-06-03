import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddDoctors = () => {

    const { register, handleSubmit, reset} = useForm();
    const onSubmit = async ( data )=> {
        console.log(data)
    const formData = new FormData();
    formData.append('image', data.image[0]);

        const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
            headers: {
              'content-type': 'multipart/form-data',
            },
            params: {
              key:`${import.meta.env.VITE_IMGBB}`, // Replace with your ImgBB API key
            },
          });
          const imageUrl = response.data.data.url;
       data.image=imageUrl ;
          axios.post('http://localhost:3000/doctors', data ,{
         
          })
          .then(function (response) {
            Swal.fire(
                'Doctor Added Successfully',
                '',
                'success'
              )
              reset()
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    };



  return (
    <div className="p-10 w-1/2 m-10">
      <h1 className="text-left mb-3 text-2xl font-semibold"> Add doctors page</h1>
     <div className="p-10  mx-auto shadow-sm bg-white rounded-lg">
   
     <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3 my-3"
        action=""
      >
        <div className="form-control w-full ">
          <label className="label">
            <span className=" font-bold">Name</span>
          </label>
          <input required
            {...register("name")}
            type="text"
            placeholder="Enter Doctor's Name"
            className="input py-5 w-full bg-doctor-login-input"
          />
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className=" font-bold">Email</span>
          </label>
          <input required
            {...register("email")}
            type="email"
            placeholder="Enter Doctor's Email"
            className="input py-5 w-full bg-doctor-login-input"
          />
        </div>

        <div className="form-control w-full pb-4 ">
          <label className="label">
            <span className=" font-bold">Specialty</span>
          </label>
          <select required {...register("Specialty")} className="select select-bordered">
            <option disabled selected>
              Pick one
            </option>
            <option>Teeth Orthodontics</option>
            <option>Cosmetic Dentisty</option>
            <option>Teeth Cleaning</option>
            <option>Cavity Protection</option>
            <option>Padiatric Dental</option>
            <option>Oral Surgery</option>
          </select>
        </div>
        <div className="form-control w-full pb-4 ">
          <label className="label">
            <span className=" font-bold">Image</span>
          </label>
          <input required type="file" {...register("image")}  className="file-input file-input-bordered w-full " />
        </div>
        <button
          type="submit"
          className=" bg-doctor-primary text-white  input  w-full "
        >
          Add Doctor
        </button>
      </form>
     </div>
    </div>
  );
};

export default AddDoctors;
