import icon1 from '../../assets/icons/service-img1.png'
import icon2 from '../../assets/icons/service-img2.png'
import icon3 from '../../assets/icons/service-img3.png'
import icon4 from '../../assets/icons/service-img4.png'

const OurServices = () => {
    return (
        <div className='min-h-screen bg-[#EDF0F7]'>
            <div className='container mx-auto text-black '>
                {/* top start */}
                <div className='text-center  py-36'>
                    <h1 className="font-Oswald text-xl  font-medium text-black">OUR SERVICES</h1>
                    <p className="font-Oswald text-6xl font-medium text-red-600">WHAT WE OFFER</p>
                </div>
                {/* top End */}

                {/* Bottom start */}
                <div className='flex justify-center items-center'>
                    {/* 1st card  */}
                    <div className='rhombus2 w-64 h-32'>
                       <div className='p-5 my-16 mx-6 bg-white text-center'>
                       <img src={icon1} className='mx-auto' alt="" />
                        <h1 className='font-Oswald text-2xl font-medium py-2'>All Skill Level</h1>
                        <p className='font-Poppins text-[13px] font-normal'>Maece convallis maximus  maun tristiq. Quisque in  lectus suscipt eros.</p>
                       </div>
                    </div>
                    {/* 1st card  */}
                    <div className='rhombus2 w-64 h-32'>
                       <div className='p-5 my-16 mx-6 bg-white text-center'>
                       <img src={icon2} className='mx-auto' alt="" />
                        <h1 className='font-Oswald text-2xl font-medium py-2'>Fully Qualified</h1>
                        <p className='font-Poppins text-[13px] font-normal'>Maece convallis maximus  maun tristiq. Quisque in  lectus suscipt eros.</p>
                       </div>
                    </div>
                    {/* 1st card  */}
                    <div className='rhombus2 w-64 h-32'>
                       <div className='p-5 my-16 mx-6 bg-white text-center'>
                       <img src={icon3} className='mx-auto' alt="" />
                        <h1 className='font-Oswald text-2xl font-medium py-2'>Get Fit & Healthy</h1>
                        <p className='font-Poppins text-[13px] font-normal'>Maece convallis maximus  maun tristiq. Quisque in  lectus suscipt eros.</p>
                       </div>
                    </div>
                    {/* 1st card  */}
                    <div className='rhombus2 w-64 h-32'>
                       <div className='p-5 my-16 mx-6 bg-white text-center'>
                       <img src={icon4} className='mx-auto' alt="" />
                        <h1 className='font-Oswald text-2xl font-medium py-2'>Traditional Karate</h1>
                        <p className='font-Poppins text-[13px] font-normal'>Maece convallis maximus  maun tristiq. Quisque in  lectus suscipt eros.</p>
                       </div>
                    </div>
                    
                </div>
                {/* Bottom End */}
            </div>
        </div>
    );
};

export default OurServices;