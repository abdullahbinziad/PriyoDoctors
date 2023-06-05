import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import AllSlots from "../../components/allslots/AllSlots";





const AddServiceSlot = () => {
const [ reload,setRealod] = useState(false);
const reloadData =()=>{
    return setRealod(true) ; 
}
    
  const [filterdDoctor, setFilterdDoctor] = useState([]);

  const handleSelectChange =  (event) => {
    const filterd=event.target.value;
    // setSpeciality(event.target.value);
    axios
      .get(`http://localhost:3000/doctors?speciality=${filterd}`)
      .then((res) => setFilterdDoctor(res.data));
  };

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
const findImg = filterdDoctor.find(n=> n.speciality == data.speciality)
data.image = findImg.image;
   
 
    axios.post('http://localhost:3000/slots', data, {
       
      })
      .then((response)=> {
        Swal.fire("Slots Added Successfully", "", "success");
        reset();
        reloadData();
        console.log(response);
      })
      .catch( (error)=> {
        console.log(error);
      });
  };

//date picker 




  return (
    <div className="p-10 m-6">
      <div className="flex  gap-6 2xl:gap-20">
        <div className="p-10 2xl:w-1/3 w-1/2 mx-start shadow-sm bg-white rounded-lg">
          <h1 className="text-left mb-3 text-2xl font-semibold">
            {" "}
            Add Service Slot
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-2 my-3 w-full "
            action=""
          >
            
            <div className="form-control w-full pb-2 ">
              <label className="label">
                <span className=" font-bold">Specialty</span>
              </label>
              <select
                onChangeCapture={(event) => handleSelectChange(event)}
               
                required
                {...register("speciality")}
                className="select select-bordered  "
              >
                <option selected disabled>
                  Select One
                </option>
                <option value="Teeth Orthodontics">Teeth Orthodontics</option>
                <option value="Cosmetic Dentisty">Cosmetic Dentisty</option>
                <option value="Teeth Cleaning">Teeth Cleaning</option>
                <option value="Cavity Protection">Cavity Protection</option>
                <option value="Padiatric Dental">Padiatric Dental</option>
                <option value="Oral Surgery">Oral Surgery</option>
              </select>
            </div>
            <div className="form-control w-full pb-2 ">
              <label className="label">
                <span className=" font-bold">Select Specialized Doctors</span>
              </label>
              <select
                required
                {...register("doctor")}
                className="select select-bordered  "
              >
                <option selected disabled>
                  Select One
                </option>
                {filterdDoctor.map((n, index) => (
                  <option key={index} >
                    {n.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control w-full pb-2 ">
              <label className="label">
                <span className=" font-bold">Times Slot</span>
              </label>
              <input
                required
                {...register("date")}
                type="date"
                placeholder="Enter Doctor's Fees"
                className="input py-5 w-full bg-doctor-login-input"
              />
             
            </div>
            <div className="form-control w-full pb-2 ">
              <label className="label">
                <span className=" font-bold">Times Slot</span>
              </label>
              <select
                
                required
                {...register("timeslot")}
                className="select select-bordered  "
              >
                <option selected disabled>
                  Select One
                </option>
                <option >08:00 AM - 09:00 AM</option>
                <option >09:00 AM - 10:00 AM</option>
                <option >10:00 AM - 11:00 AM</option>
                <option >11:00 AM - 12:00 PM</option>
                <option >02:00 PM - 04:00 PM</option>
                <option >04:00 AM - 06:00 PM</option>
                
              </select>
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className=" font-bold">Enter The Fees</span>
              </label>
              <input
                required
                {...register("fees")}
                type="number"
                placeholder="Enter Doctor's Fees"
                className="input mb-5 py-5 w-full bg-doctor-login-input"
              />
            </div>

            
         
            <button
              type="submit"
              className=" bg-doctor-primary text-white  input  w-full "
            >
              Add Slots
            </button>
            
          </form>
        </div>

        <div className=" flex w-full 2xl:h-[700px] h-[600px] overflow-y-auto ">
         
<AllSlots reaload={reload}></AllSlots>
         
        </div>
      </div>
    </div>
  );
};

export default AddServiceSlot;
