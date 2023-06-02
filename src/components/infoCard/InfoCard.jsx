import React from 'react';

import { BiTimeFive } from 'react-icons/bi';

const InfoCard = (props) => {

    const {label,_id,detail} = props.info;
    const index = props.index;
    return (
        <div className={`card flex-1 ${index===1  ? ' bg-doctor-btn': 'bg-doctor-primary'} text-primary-content`}>
         
        <div className="card-body">
      <div className='flex gap-2'>
      <div>
          <BiTimeFive className='text-5xl'></BiTimeFive>
          </div>
        <div>
        <h2 className="card-title">{label}</h2>
          <p>{detail}</p>
        </div>
        
      </div>
        
        </div>
      </div>
    );
};

export default InfoCard;