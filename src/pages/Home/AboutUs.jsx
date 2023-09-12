import aboutUsImg from '../../assets/img/about.png'
import signature from '../../assets/icons/signature.png'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const AboutData = {
    description: "We teach martial arts because we love it — not because we want to make money on you. Unlike other martial arts schools, we do not require you to sign long-term contracts. You just pay one low monthly fee for your martial arts and self-defense classes at the beginning of each month. Many martial arts. We impart martial arts education driven by our passion, not by financial gain. Unlike many other martial arts schools, we don't insist on lengthy contracts. You'll only need to pay a reasonable monthly fee for your martial arts and self-defense classes at the beginning of each month. While various martial arts schools exist, our focus remains on sharing our love for the art"
};

const AboutUs = () => {

    const [fold,setFold] = useState(true)
    const {description} = AboutData;
    return (
        <div className=" min-h-screen bg-base-200 py-32">
            <div className="flex flex-col lg:flex-row">
                {/* <img src={aboutUsImg} className="max-w-sm rounded-lg "/> */}
                <motion.img
                    src={aboutUsImg}
                    className="max-w-5xl h-auto rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 3 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}
                />
                <div data-aos="fade-up-left" className='pt-32'>
                    <h1 className='text-4xl lg:text-7xl font-Oswald font-semibold text-white'>ABOUT <span className='text-[#e43d49]'>FIGHT</span> SCHOOL</h1>
                    <p className='font-Oswald font-extralight text-2xl'>Explore Ninja Kung Fu with us</p>
                    <div>
                    <p className="py-6 w-3/4 font-Poppins text-base font-normal text-white">Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.</p>
                  {
                    fold?  <p className="w-3/4 font-Poppins text-base font-light text-[#a4a9b9] ">
                        {description.substring(0,360)}....
                         <span onClick={()=> setFold(!fold)} className='font-Oswald text-lg text-[#e43d4e] hover:text-[#ec777f] cursor-pointer'>READ MORE <ArrowRightIcon className='w-5 h-5 inline'></ArrowRightIcon></span>
                    </p> : 
                    <p className="w-3/4 font-Poppins text-base font-light text-[#a4a9b9] ">
                        {description}.
                     <span onClick={()=> setFold(!fold)} className='font-Oswald text-lg text-[#e43d4e] hover:text-[#ec777f] cursor-pointer'>READ LESS <ArrowRightIcon className='w-5 h-5 inline'></ArrowRightIcon></span>
                    </p>
                  }
                    </div>

                    <div className='pt-16 flex gap-56'>
                        <div>
                            <h1 className='font-Oswald text-4xl font-normal text-white'>Aiden Richards</h1>
                            <p className='font-Oswald text-sm font-normal text-[#e43d4e] '>DIRECTOR / INSTRUCTOR</p>
                        </div>
                        <img src={signature} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;