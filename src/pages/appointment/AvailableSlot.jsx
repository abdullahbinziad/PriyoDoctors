import React from 'react';
import SlotsCard from '../../components/slotscard/SlotsCard';
import { format } from 'date-fns';


const AvailableSlot = ({  service,selectedDate,availableSlots}) => {

   
    return (
        <div className='mt-20'>
             <h1 className='text-center text-3xl font-bold'> { service && selectedDate? <>Available slots for {service}{selectedDate ? ` On ${format(selectedDate, "PP")} `:''}</>: "You have to Select a Date and a Service Must"}</h1>
             <h1 className='text-3xl font-semibold text-center py-4'> {service && selectedDate? <>Total Result : {availableSlots?.length}</>: ""}</h1>
        <div className='grid grid-cols-3 gap-10 mt-16'>

           
            {
                availableSlots?.map(slot=><SlotsCard key={slot._id} slot={slot}></SlotsCard>)
            }
        </div>
        </div>
    );
};

export default AvailableSlot;