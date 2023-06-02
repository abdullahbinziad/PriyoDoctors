import React from 'react';
import Hero from '../hero/Hero';
import ServicesSection from '../ourServices/ServicesSection';
import ContactInfoSection from '../ContactInfoSection/ContactInfoSection';
import Testimonials from '../testimonials/Testimonials';
import ExpertDoctor from '../expertDoctor/ExpertDoctor';
import Contact from '../../../components/contact/Contact';

const Home = () => {
    return (
        <div>
          <Hero></Hero>
         <div className='w-3/4 mx-auto'>
         <ServicesSection></ServicesSection>
         <ContactInfoSection></ContactInfoSection>
         <Testimonials></Testimonials>
         <ExpertDoctor></ExpertDoctor>
         <Contact></Contact>
         </div>
        </div>
    );
};

export default Home;