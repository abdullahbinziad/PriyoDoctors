import React from 'react';
import InfoCard from '../../../components/infoCard/infoCard';

const ContactInfoSection = () => {
const data = [
    {_id:"32264912e3hdcs",icon:'' ,label:"Opening Hours", detail:"Open 9.00 am to 5.00pm Everyday"},
    {_id:"32264912h3dcs",icon:'' ,label:"Our Location", detail:"Open 9.00 am to 5.00pm Everyday"},
    {_id:"322649142hdcs",icon:'' ,label:"Contact Us", detail:"+99028364844 or +0178347834"}
]


    return (
        <div className='flex  gap-6 '>
            {
data.map((n,index)=> <InfoCard key={n._id} info={n} index={index}></InfoCard>)
            }
        </div>
    );
};

export default ContactInfoSection;