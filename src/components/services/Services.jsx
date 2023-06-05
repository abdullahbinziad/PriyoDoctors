import { format } from 'date-fns';
import React from 'react';
import teethOrthoDontics from "../../assets/icons/Teeth-Orthodontics.svg";
import cosmeticDentisty from "../../assets/icons/Cosmetic-Dentisty.svg";
import teethCleaning from "../../assets/icons/Teeth-Cleaning.svg";
import cavityProtection from "../../assets/icons/Cavity-Protection.svg";
import pediatricDental from "../../assets/icons/Pediatric-Dental.svg";
import oralSurgery from "../../assets/icons/Oral-Surgery.svg";
import { Link } from 'react-router-dom';

const Services = ({selectedDate,takeService}) => {
const services= [
    {
        title: "Teeth Orthodontics",
        icon: teethOrthoDontics,
    },
    {
        title: "Cosmetic Dentisty",
        icon: cosmeticDentisty,
    },
    {
        title: "Teeth Cleaning",
        icon: teethCleaning,
    },
    {
        title: "Cavity Protechtion",
        icon: cavityProtection,
    },
    {
        title: "Padiatric Dental",
        icon: pediatricDental,
    },
    {
        title: "Oral Surgery",
        icon: oralSurgery,
    },
]
   console.log();
    return (
        <div className='text-center '>
            <h1 className='text-xl text-bubble-gum font-semibold'>Available Service on {selectedDate ? format(selectedDate, 'yyyy-MM-dd') :''} </h1>
            <h1 className='text-3xl py-2 font-bold'>Please Select a Service</h1>

<div className=' mx-auto mt-10'>
    <div className='grid grid-cols-3 gap-4'>

        {
            services.map((element,index)=> <Link onClick={()=>takeService(element.title)} key={index} className="p-4 text-left card card-side bg-base-100 shadow-md">
            <figure><img className='w-20 ' src={element.icon} alt="Movie"/></figure>
            <div className="card-body">
              <h2 className="card-title">{element.title}</h2>
            </div>
          </Link>)
        }

    </div>
</div>


<div>
    
</div>





        </div>
    );
};

export default Services;