import martail from "../../assets/img/martial-art-img.png";
import icon1 from "../../assets/icons/self-defence.png";
import icon2 from "../../assets/icons/self-defence-2.png";
import icon3 from "../../assets/icons/self-defence-3.png";

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
            <h1 className="font-Oswald text-xl  font-medium text-black">
              WHAT YOU IMPROVE ON MY <br />
              <span className="font-Oswald text-6xl font-medium text-red-600">
                WORKOUTS?
              </span>
            </h1>
            <p className="py-6 font-Poppinss text-lg text-[#9c9b9e]">
            Her rigorous workouts encompass a diverse range of exercises, ensuring a well-rounded fitness routine.
              <br />
              Joining the group classes has injected a new level of energy and motivation into my workouts.
              <br />
              Tracking progress and adjusting intensity are key components of effective workouts.
            </p>
          </div>
          {/* Top side End  */}

          {/* Bottom side start  */}
          <div>
            <div className="relative rhombus w-[654px] h-[149px] bg-[#F0F3F7] flex gap-12">
              <div className="absolute top-9 left-[-44px]  w-[76px] h-[76px] bg-black ">
                <img src={icon1} alt="Icon1" className="m-4" />
              </div>
              <div className="ml-28 py-6">
                <h1 className="font-Oswald text-4xl  font-medium text-black">Self Defence</h1>
                <p className="font-Poppinss text-base text-black pt-2">
                Learning self-defense empowers individuals to protect <br /> themselves and others in potentially dangerous situations.
                </p>
              </div>
            </div>
           
            <div className="relative rhombus w-[654px] h-[149px] bg-[#F0F3F7] flex gap-12 my-4">
              <div className="absolute top-9 left-[-44px]  w-[76px] h-[76px] bg-[#e43d49] ">
                <img src={icon2} alt="Icon1" className="m-4" />
              </div>
              <div className="ml-28 py-6">
                <h1 className="font-Oswald text-4xl  font-medium text-red-500">Rapidity</h1>
                <p className="font-Poppinss text-base text-black pt-2">
                The rapidity of technological advancements is <br /> reshaping industries and societies at an unprecedented pace.
                </p>
              </div>
            </div>

            <div className="relative rhombus w-[654px] h-[149px] bg-[#F0F3F7] flex gap-12">
              <div className="absolute top-9 left-[-44px]  w-[76px] h-[76px] bg-black ">
                <img src={icon3} alt="Icon1" className="m-3" />
              </div>
              <div className="ml-28 py-6">
                <h1 className="font-Oswald text-4xl  font-medium text-black">Tactics and Reaction</h1>
                <p className="font-Poppinss text-base text-black pt-2">
                Success in competitive sports often hinges on <br /> the strategic interplay between tactics and reaction times.
                </p>
              </div>
            </div>
          </div>
          {/* Bottom side End  */}
        </div>
        {/* Right side End  */}
      </div>
    </div>
  );
};

export default Workouts;
