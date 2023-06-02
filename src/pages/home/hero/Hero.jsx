import React from 'react';
import heroImg from '../../../assets/heroimg.png'
const Hero = () => {
    return (
        <div className="hero  bg-doctor-primary text-neutral-100 ">
        <div className="hero-content w-3/4 pt-10 mx-auto flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Your Best Medical Help Center</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn bg-doctor-btn border-0 px-8">All Services</button>

          </div>
          <div className=" flex-shrink-0 w-full max-w-sm ">
            <div>
                <img className='w-full' src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;