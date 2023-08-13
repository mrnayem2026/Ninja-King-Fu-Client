import martail from '../../assets/img/martial-art-img.png'
import icon1 from '../../assets/icons/self-defence.png'
import icon2 from '../../assets/icons/self-defence-2.png'
import icon3 from '../../assets/icons/self-defence-3.png'

const Workouts = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="flex flex-col pt-36 md:flex-row gap-28 container mx-auto">
        {/* left side start  */}
       <img src={martail} alt="" />
        {/* left side End  */}
        
        {/* Right side start  */}
        <div>
            {/* Top side start  */}
          <div>
          <h1 className='font-Oswald text-xl  font-medium text-black'>WHAT YOU IMPROVE ON MY <br />
              <span className='font-Oswald text-6xl font-medium text-red-600'>WORKOUTS?</span></h1>
              <p className='py-6 font-Poppinss text-lg text-[#9c9b9e]'>Quisque suscipit, ligula ut aliquam mattis felisin arcu commodo <br />
               congue dignissim tortor veliting vitae antecondimentum purus <br />
                vitae fermentum sapien.   </p>
          </div>
            {/* Top side End  */}

            {/* Bottom side start  */}
            <div>
                <div className='rhombus w-[654px] h-[149px] bg-sky-400'>
                    <div  className='rhombus w-[76px] h-[76px] bg-lime-700'>
                    <img src={icon1} alt="Icon1" className='' />
                    </div>
                    <div>
                        <h1>Self Defence</h1>
                        <p>Maecenas convallis maximus maun tristiq. <br /> Quisque in lectus suscipt eros.</p>
                    </div>
                </div>
                <div className='rhombus w-[654px] h-[149px] bg-red-400 my-3'></div>
                <div className='rhombus w-[654px] h-[149px] bg-green-400'></div>
            </div>
            {/* Bottom side End  */}
        </div>
        {/* Right side End  */}
      </div>
    </div>
  );
};

export default Workouts;
