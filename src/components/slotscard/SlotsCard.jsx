import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Modal from './Modal';
import { UserContext } from '../../AuthProvider/AuthProvider';
import { format } from 'date-fns';

const SlotsCard = (props) => {

    const{user} = useContext(UserContext);


     const {_id,speciality,doctor,degree,fees,timeslot,date,image} =props.slot;
     
     const data={doctor,fees,date,timeslot}
console.log(data);

  // ...other component code...

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (data) => {

    const bookingDate= format(new Date(),"yyyy-MM-dd");
const appointmentData= {
    patientName:data.patientName,
    patientAge:data.patientAge,
    mobile:data.patientNumber,
    timeslot:data.timeslot,
    slotTitle:speciality,
    bookingDate: bookingDate,
    appointmentDate: date,
    doctor:doctor,
    doctorTitle:degree,
    fees: fees,
    userEmail: user.email

}


    // Handle form submission here
 console.log(data);
 axios.post('http://localhost:3000/appointments', appointmentData, {
           
          })
          .then((response)=> {
            Swal.fire("Appointment Booked ", "", "success");
            handleModalClose();
            console.log(response);
          })
          .catch( (error)=> {
            console.log(error);
          });
     


    // Close the modal
    
  };

    return (
        <div className="bg-base-100 shadow-xl p-5 rounded-md">
            <div className=" flex gap-4 mb-4 ">
            <div className="avatar">
  <div className="w-24 rounded">
    <img src={image} />
  </div>
</div>
  <div className="">
    <h2 className="font-semibold text-xl">{doctor}</h2>
    <p>{speciality}</p>
    <p className='font-semibold '>{timeslot}</p>
    </div>
    </div>
    <div className="card-actions justify-center">
      <button onClick={handleModalOpen} className="btn btn-sm w-full bg-doctor-btn text-white"  >Book Appointment</button>
    </div>


    <Modal isOpen={isModalOpen} data={data} closeModal={handleModalClose} onSubmit={handleSubmit} />
    {/* code for modal  */}

 

  




   
</div>
        
    );
};

export default SlotsCard;

{/* Open the modal using ID.showModal() method */}

