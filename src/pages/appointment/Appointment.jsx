import React, { useState } from "react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DatePicker from "../../components/DatePick/DatePicker";
import chair from '../../assets/shape/chair.png'
import './appointment.css'
import Services from "../../components/services/Services";
import AvailableSlot from "./AvailableSlot";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "date-fns";

const Appointment = () => {
    const [selected, setSelected] = useState("");
    const [service, setService] = useState("");
    const dateselect =(data)=>{
        setSelected(data)
    }
    const serviceSelect =(data)=>{
       setService(data)
    }
console.log(service);

    // available slots data load 
    const { data: slots=[], refetch} = useQuery({
      queryKey: ['slots'],
      queryFn: async () =>
       await axios(`http://localhost:3000/slots?speciality=${service}&date=${format(selected,"yyyy-MM-dd")}`).then(
          (res) => res.data,
        ),
    })

    if(service && selected ){
      refetch();
    }
  
  return (
    <div className="">
      <Breadcrumb Title={"Appointment"} routePath={"appointment"}></Breadcrumb>
<div className="md:w-3/4 2xl:w-3/5 mx-auto">


      <div id="datePick" className="mt-10 w-full h-[700px]  mx-auto flex items-center align-middle justify-center gap-20">
        <div><DatePicker takeDate={dateselect}></DatePicker></div>
        <div><img src={chair} alt="" /></div>
      </div>

      <Services takeService={serviceSelect} selectedDate={selected}></Services>
      <AvailableSlot service={service} selectedDate={selected} availableSlots={slots}></AvailableSlot>
    </div>
    </div>
  );
};

export default Appointment;
