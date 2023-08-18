import { ParallaxBanner } from "react-scroll-parallax";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/effect-cards";

import { SlCalender } from "react-icons/sl";
import { AiOutlineArrowDown } from "react-icons/ai";
// import required image
import bg from "../../assets/img/programeBG1.jpg";
import cardImg1 from "../../assets/img/programImg1.jpg";
import cardImg2 from "../../assets/img/programImg2.jpg";
import cardImg3 from "../../assets/img/programImg3.jpg";
import cardImg4 from "../../assets/img/programImg4.jpg";
import cardImg5 from "../../assets/img/programImg5.jpg";

const OurPrograms = () => {
  return (
    <div className=" ">
      <ParallaxBanner
        layers={[{ image: bg, speed: -20 }]}
        className="aspect-[2/1]  w-full h-full object-cover bg-black opacity-40"
      >
        <div className="py-20 ">
          {/* Top content */}
          <div className="absolute left-[750px]">
            <h1 className="text-white text-6xl font-Oswald">OUR PROGRAMS</h1>
            <div className="w-12 h-1 bg-red-500 mx-auto mt-2"></div>
          </div>

          <div className="">
          <Swiper
            slidesPerView={3}
            spaceBetween={-500}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[FreeMode, Pagination,Autoplay]}
            className="absolute top-[170px]"
          >
            {/* card 1 start  */}
            <SwiperSlide>
              <div className="w-[365px] f-[505px] bg-base-100 shadow-xl" >
                <div className="cursor-pointer bg-red-500">
                  <img src={cardImg1} alt="Shoes" />
                </div>
                <div className="relative card-body text-center">
                  <div className="absolute top-[-28px] left-[150px]  w-[60px] h-[60px]  bg-red-500 flex justify-center items-center rounded-full">
                    <SlCalender className="text-white"></SlCalender>
                  </div>

                  <div>
                    <div className="py-5">
                      <h1 className="font-Oswald text-2xl font-medium text-white">
                      Kick Boxing Group			
                      </h1>
                      <p className="font-Oswald text-base font-semibold pt-1 text-[#e43d49]">
                      11:00-12:00 am / Jared Henry
                      </p>
                    </div>
                    <p className="text-[#a4a9b9] text-base font-Poppins">
                    Short loin andouille bresaola, swine jowl beef ribs venison capicola jerky ham pig.
                    </p>
                    <AiOutlineArrowDown className="mx-auto mt-3  text-[#e43d49]  hover:translate-y-3 transition delay-100 ease-in cursor-pointer"></AiOutlineArrowDown>
                  </div>
                </div>
              </div>
            </SwiperSlide>
             {/* card 1 End  */}

            {/* card 2 start  */}
            <SwiperSlide>
              <div className="w-[365px] f-[505px] bg-base-100 shadow-xl" >
                <div className="cursor-pointer bg-red-500">
                  <img src={cardImg2} alt="Shoes" />
                </div>
                <div className="relative card-body text-center">
                  <div className="absolute top-[-28px] left-[150px]  w-[60px] h-[60px]  bg-red-500 flex justify-center items-center rounded-full">
                    <SlCalender className="text-white"></SlCalender>
                  </div>

                  <div>
                    <div className="py-5">
                      <h1 className="font-Oswald text-2xl font-medium text-white">
                        				Jiu Jitsu Group			
                      </h1>
                      <p className="font-Oswald text-base font-semibold pt-1 text-[#e43d49]">
                      7:00-8:00 am / Vincent Osborne
                      </p>
                    </div>
                    <p className="text-[#a4a9b9] text-base font-Poppins">
                    Salami turkey beef ribs hamburger. Pork loin capicola tri-tip pork chop strip.
                    </p>
                    <AiOutlineArrowDown className="mx-auto mt-3  text-[#e43d49]  hover:translate-y-3 transition delay-100 ease-in cursor-pointer"></AiOutlineArrowDown>
                  </div>
                </div>
              </div>
            </SwiperSlide>
             {/* card 2 End  */}

            {/* card 3 start  */}
            <SwiperSlide>
              <div className="w-[365px] f-[505px] bg-base-100 shadow-xl" >
                <div className="cursor-pointer bg-red-500">
                  <img src={cardImg3} alt="Shoes" />
                </div>
                <div className="relative card-body text-center">
                  <div className="absolute top-[-28px] left-[150px]  w-[60px] h-[60px]  bg-red-500 flex justify-center items-center rounded-full">
                    <SlCalender className="text-white"></SlCalender>
                  </div>

                  <div>
                    <div className="py-5">
                      <h1 className="font-Oswald text-2xl font-medium text-white">
                      Kids Karate Groups			
                      </h1>
                      <p className="font-Oswald text-base font-semibold pt-1 text-[#e43d49]">
                      10:00-11:00 am / Lizzie Meyer
                      </p>
                    </div>
                    <p className="text-[#a4a9b9] text-base font-Poppins">
                    Ribeye kevin shank bacon bris fatback. Sirloin frankfurter brisket, tri-tip pork chicken.
                    </p>
                    <AiOutlineArrowDown className="mx-auto mt-3  text-[#e43d49]  hover:translate-y-3 transition delay-100 ease-in cursor-pointer"></AiOutlineArrowDown>
                  </div>
                </div>
              </div>
            </SwiperSlide>
             {/* card 3 End  */}

            {/* card 4 start  */}
            <SwiperSlide>
              <div className="w-[365px] f-[505px] bg-base-100 shadow-xl" >
                <div className="cursor-pointer bg-red-500">
                  <img src={cardImg4} alt="Shoes" />
                </div>
                <div className="relative card-body text-center">
                  <div className="absolute top-[-28px] left-[150px]  w-[60px] h-[60px]  bg-red-500 flex justify-center items-center rounded-full">
                    <SlCalender className="text-white"></SlCalender>
                  </div>

                  <div>
                    <div className="py-5">
                      <h1 className="font-Oswald text-2xl font-medium text-white">
                      Traditional Martial Arts			
                      </h1>
                      <p className="font-Oswald text-base font-semibold pt-1 text-[#e43d49]">
                      6:00-7:00 pm / Cole Butler
                      </p>
                    </div>
                    <p className="text-[#a4a9b9] text-base font-Poppins">
                    Filet mignon bresaola doner, buffalo pork belly meatball meatl swine sirloin.
                    </p>
                    <AiOutlineArrowDown className="mx-auto mt-3  text-[#e43d49]  hover:translate-y-3 transition delay-100 ease-in cursor-pointer"></AiOutlineArrowDown>
                  </div>
                </div>
              </div>
            </SwiperSlide>
             {/* card 4 End  */}
            {/* card 5 start  */}
            <SwiperSlide>
              <div className="w-[365px] f-[505px] bg-base-100 shadow-xl" >
                <div className="cursor-pointer bg-red-500">
                  <img src={cardImg5} alt="Shoes" />
                </div>
                <div className="relative card-body text-center">
                  <div className="absolute top-[-28px] left-[150px]  w-[60px] h-[60px]  bg-red-500 flex justify-center items-center rounded-full">
                    <SlCalender className="text-white"></SlCalender>
                  </div>

                  <div>
                    <div className="py-5">
                      <h1 className="font-Oswald text-2xl font-medium text-white">
                        Kung-Fu Group
                      </h1>
                      <p className="font-Oswald text-base font-semibold pt-1 text-[#e43d49]">
                        9:00-10:00 pm / Ryan Munoz
                      </p>
                    </div>
                    <p className="text-[#a4a9b9] text-base font-Poppins">
                      Corned beef fatback beef kevin pork belly ribeye tongue
                      porchetta spare ribs sausage.
                    </p>
                    <AiOutlineArrowDown className="mx-auto mt-3  text-[#e43d49]  hover:translate-y-3 transition delay-100 ease-in cursor-pointer"></AiOutlineArrowDown>
                  </div>
                </div>
              </div>
            </SwiperSlide>
             {/* card 5 End  */}
          </Swiper>
          </div>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default OurPrograms;
