import React from 'react';
import DoctorsCard from '../../../components/doctors/DoctorsCard';

const data = [
    {
        _id:1,
    },
    {
        _id:2,
    },
    {
        _id:3,
    },
    {
        _id:4,
    }
]


const ExpertDoctor = () => {
    return (
        <div className='flex flex-col justify-center text-center mt-20 space-y-4'>
            <h1 className='text-3xl font-bold'>Our Expert Doctors</h1>
           <p className=''>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
           <div className='grid md:grid-cols-3   gap-3'>
            {
data.slice(0,3).map(n=> <DoctorsCard key={n._id}></DoctorsCard>)
            }
           </div>
        </div>
    );
};

export default ExpertDoctor;