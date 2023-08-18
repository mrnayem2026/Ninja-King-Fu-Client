import icon1 from "../../assets/icons/service-img1.png";
import icon2 from "../../assets/icons/service-img2.png";
import icon3 from "../../assets/icons/service-img3.png";
import icon4 from "../../assets/icons/service-img4.png";
import icon5 from "../../assets/icons/ourServiceBg.png";

const OurServices = () => {
  return (
   <div className="">
     <div className="min-h-screen bg-[#EDF0F7] relative ">
      <img
        src={icon5}
        alt=""
        className="absolute top-[-14.75rem] left-[-12rem]"
      />
      <div className="container mx-auto text-black ">
        {/* top start */}
        <div className="text-center  py-36">
          <h1 className="font-Oswald text-xl  font-medium text-black">
            OUR SERVICES
          </h1>
          <p className="font-Oswald text-6xl font-medium text-red-600">
            WHAT WE OFFER
          </p>
        </div>
        {/* top End */}

        {/* Bottom start */}
        <div className="flex justify-center items-center">
          {/* 1st card  */}

          <div className="rhombus2   w-64 h-32">
            <div className="p-5 my-16 mx-6 bg-white text-center">
              <img
                src={icon1}
                className="mx-auto transition-transform duration-300 transform translate-y-0 hover:-translate-y-14 hover:bg-red-500 hover:p-7"
                alt=""
              />
              <h1 className="font-Oswald text-2xl font-medium py-2">
                All Skill Level
              </h1>
              <p className="font-Poppins text-[13px] font-normal">
                Maece convallis maximus maun tristiq. Quisque in lectus suscipt
                eros.
              </p>
            </div>
          </div>

          {/* 1st card  */}
          <div className="rhombus2   w-64 h-32">
            <div className="p-5 my-16 mx-6 bg-white text-center">
              <img src={icon2}  className="mx-auto transition-transform duration-300 transform translate-y-0 hover:-translate-y-14 hover:bg-red-500 hover:p-7" alt="" />
              <h1 className="font-Oswald text-2xl font-medium py-2">
                Fully Qualified
              </h1>
              <p className="font-Poppins text-[13px] font-normal">
                Maece convallis maximus maun tristiq. Quisque in lectus suscipt
                eros.
              </p>
            </div>
          </div>
          {/* 1st card  */}
          <div className="rhombus2   w-64 h-32">
            <div className="p-5 my-16 mx-6 bg-white text-center">
              <img src={icon3}  className="mx-auto transition-transform duration-300 transform translate-y-0 hover:-translate-y-14 hover:bg-red-500 hover:p-7" alt="" />
              <h1 className="font-Oswald text-2xl font-medium py-2">
                Get Fit & Healthy
              </h1>
              <p className="font-Poppins text-[13px] font-normal">
                Maece convallis maximus maun tristiq. Quisque in lectus suscipt
                eros.
              </p>
            </div>
          </div>
          {/* 1st card  */}
          <div className="rhombus2   w-64 h-32">
            <div className="p-5 my-16 mx-6 bg-white text-center">
              <img src={icon4}  className="mx-auto transition-transform duration-300 transform translate-y-0 hover:-translate-y-14 hover:bg-red-500 hover:p-7" alt="" />
              <h1 className="font-Oswald text-2xl font-medium py-2">
                Traditional Karate
              </h1>
              <p className="font-Poppins text-[13px] font-normal">
                Maece convallis maximus maun tristiq. Quisque in lectus suscipt
                eros.
              </p>
            </div>
          </div>
        </div>
        {/* Bottom End */}
      </div>

      <img
        src={icon5}
        alt=""
        className="absolute bottom-[-14.75rem] right-[1rem]"
      />
    </div>
   </div>
  );
};

export default OurServices;
