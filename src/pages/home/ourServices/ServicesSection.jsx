import React from "react";
import doctors from "../../../assets/doctors.png";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Link } from "react-router-dom";

const ServicesSection = () => {

    const tabElements=[
     
         {label:'Cavity Protection', content:[{img:'https://www.freepnglogos.com/uploads/doctor-png/doctor-bulk-billing-doctors-chapel-hill-health-care-medical-3.png', heading: 'Electro  Gastrology Therapy', description:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error .Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ', _id: '652138774'}]},
         {label:'Cosmetic Dentisty', content:[{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZaaLHnAO8DLvpSQEZka7Q9H5uDwNMHJtFByefubY&s', heading: '', description:'', _id: '652138re774'}]},
         {label:'Cavity Protection', content:[{img:'Oral Surgery', heading: '', description:'',_id: '652138dr774'}]},
  
      
    ]
  return (
    <div className="flex gap-6  py-16">
      <div className="">
        <img className="w-full" src={doctors} alt="" />
      </div>
      <div className="w-3/4 ">
        <h1 className="text-3xl font-bold">Our Services</h1>

        <p className="text-xl py-5">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <div className="">
        <Tabs>
    <TabList>
   <div className="flex gap-2  shadow-md py-3 px-1 rounded-sm">
   {
tabElements.map(n=> <Tab ><button className="hover:bg-doctor-btn btn bg-transparent	border-0 ">{n.label}</button></Tab>)
     }
   </div>
    </TabList>
    {
tabElements.map(n=> <TabPanel> 
<div className=" space-y-6 py-4 flex flex-col  "> 
    <img className="w-full h-80 object-contain rounded-md" src={n.content[0].img} alt={n.content[0].heading}  />
    <h1 className="text-2xl font-bold">{n.content[0].heading} </h1>
    <p>{n.content[0].description} </p>
   <Link to={`/service/details/${n.content[0]._id}`}> <button  className="btn  hover:bg-doctor-btn">More Details</button></Link>
</div>

</TabPanel>)
     }
  </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
