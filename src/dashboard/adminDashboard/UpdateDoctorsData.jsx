import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateDoctorsData = () => {
const data = useLoaderData() ;
const {_id,image,name,degree,speciality
  ,email,mobile,specializations}= data;
console.log(data);
// get data 


  const { register, handleSubmit, reset } = useForm();

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');


  const onSubmit = async (data) => {
    console.log(data);
   
if(previewUrl){
  const formData = new FormData();
  formData.append("image", data.image[0]);

  const response = await axios.post(
    "https://api.imgbb.com/1/upload",
    formData,
    {
      headers: {
        "content-type": "multipart/form-data",
      },
      params: {
        key: `${import.meta.env.VITE_IMGBB}`, // Replace with your ImgBB API key
      },
    }
  );
  const imageUrl = response.data.data.url;
  data.image = imageUrl  ;
  console.log(data.image, imageUrl);
}
else{
  data.image = image  ;
}
data.name=name;
data.speciality=speciality;

axios
  .put(`http://localhost:3000/doctors/${_id}`, data)
  .then((res) => res.data)
  .then((data) => {
    if (data.modifiedCount === 1) {
      Swal.fire('Doctor Updated Successfully', '', 'success');
    }
  })
  .catch((error) => {
    console.error(error);
    // Handle any errors that occur during the request
  });

  // await axios
  //     .put(`http://localhost:3000/doctors/${_id}`, data, {})
  //     .then(function (response) {
  //       
  //       reset();
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  };

 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    const imageUrl = URL.createObjectURL(file);
    setPreviewUrl(imageUrl);
    console.log("Clicked");
  };

  return (
    <div className="p-10  m-10">
      <h1 className="text-left mb-3 text-2xl font-semibold">
        {" "}
        Update The Doctors
      </h1>
      <div className="p-10 flex  gap-8 mx-auto shadow-sm bg-white rounded-lg">
        <div className="flex flex-col items-center ">
          <div className="form-control w-full   ">
            <div className="avatar">
              <div className="w-60 rounded-xl">
              { previewUrl ? <img className="obj" src={previewUrl} alt="Preview" /> :<img className="obj" src={image} alt={name}/>   }

              </div>
            </div>
            <h1 className="text-xl text-center mt-2 font-semibold text-neutral-500">{name}</h1>
          </div>
          <div className="form-control w-64 pb-4 ">
                <label className="label">
                  <span className=" font-bold">Image</span>
                </label>
                <input
            
            onChangeCapture={handleImageChange}
             
                accept="image/*"
                  required
                  type="file"
                  {...register("image")}
                  className="file-input file-input-bordered w-full "
                />
              </div>
        </div>
        <div className="w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3 my-3"
            action=""
          >
            <div className="grid grid-cols-2 gap-x-4">
              <div className="form-control w-full ">
                <label className="label">
                  <span className=" font-bold">Degree</span>
                </label>
                <input
                 defaultValue={degree?degree:'Example Degree'}
                  required
                  {...register("degree")}
                  type="text"
                  placeholder="Enter Doctor's Degree"
                  className="input py-5 w-full bg-doctor-login-input"
                />
              </div>
              <div className="form-control w-full pb-4 ">
                <label className="label">
                  <span className=" font-bold">Specialty</span>
                </label>
                <input
                defaultValue={speciality                }
                  disabled
                  {...register("speciality")}
                  className="select select-bordered"
                
               />
              </div>

              <div className="form-control w-full col-span-2 ">
                <label className="label">
                  <span className=" font-bold">Specializations</span>
                </label>
                <input
               defaultValue= { specializations ? specializations: 'etc Specializations'}
                  required
                  {...register("specializations")}
                  type="text-area"
                  placeholder="Enter Specializations separate by Comma"
                  className="input py-5 w-full bg-doctor-login-input"
                />
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className=" font-bold">Email</span>
                </label>
                <input
                defaultValue={email}
                  required
                  {...register("email")}
                  type="email"
                  placeholder="Enter Doctor's Email"
                  className="input py-5 w-full bg-doctor-login-input"
                />

               
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className=" font-bold">Mobile</span>
                </label>
                <input
                defaultValue={ mobile? mobile: '017'}
                  required
                  {...register("mobile")}
                  type="text"
                  placeholder="Enter Doctor's Moile"
                  className="input py-5 w-full bg-doctor-login-input"
                />

               
              </div>

           
              <div className="form-control col-span-2 flex justify-end w-full pb-4 ">
                <button
                  type="submit"
                  className=" bg-doctor-primary text-white mt-6  input  w-full "
                >
                  Update Now
                </button>{" "}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateDoctorsData;
