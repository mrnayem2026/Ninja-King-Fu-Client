import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import { AutoPlay } from "@egjs/flicking-plugins";
import { Perspective } from "@egjs/flicking-plugins";
import useAxiosSecure from "../../customeHocks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { HashLoader } from "react-spinners";
import { BsFacebook,BsTwitter,BsInstagram} from 'react-icons/bs';
import banner1 from "../../assets/img/instractorBanner.jpg";

const PopularInstructors = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    data: instructors = [],
    refetch,
    isLoading,
  } = useQuery(["instructors"], async () => {
    const res = await axiosSecure.get(`/all_instructor`);
    return res.data;
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <HashLoader color="#A6ADBA" />
      </div>
    );
  }

  const containerStyle1 = {
    position: "relative",
    backgroundImage: `linear-gradient(to bottom right, rgba(237, 240, 247, 0.5), rgba(0, 0, 0, 0.9)), url(${banner1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
  };

  const plugins = [
    new AutoPlay({
      duration: 2000,
      direction: "NEXT",
      stopOnHover: true,
      animationDuration: 1000,
    }),
    new Perspective({ rotate: -5, scale: 2, perspective: 600 }),
  ];

  return (
    <div style={containerStyle1}>
      <div className="container mx-auto py-32">
        {/* top start */}
        <div className="text-center  ">
          <h1 className="font-Oswald text-xl  font-medium text-black">OUR</h1>
          <p className="font-Oswald text-6xl font-medium text-red-600">
            Popular Instructors
          </p>
        </div>
        {/* top End */}


        <div className="pt-20">
          <Flicking circular={true} plugins={plugins}>
            {instructors.slice(0, 6).map((instructor) => (
              <div
                key={instructor._id}
                className={`card  bg-base-100 shadow-2xl shadow-blue-500/20`}
              >
                <figure>
                  <img
                    src={instructor?.photoURL}
                    alt="instructor displayName"
                  />
                </figure>
                <div className="text-center py-12">
                  <p className="font-Oswald font-medium text-4xl text-white transition-colors duration-200 hover:text-[#e43d49]">
                  {instructor?.displayName}
                  </p>
                  <p className="font-Poppins font-normal text-[12px] text-[#e43d49] ">
                  {instructor?.email}
                  </p>

                  {/* Socila Link  */}
                  <div className="flex justify-center items-center gap-3 pt-3">
                    <BsFacebook className="w-6 h-6 hover:text-sky-700 transition duration-75"></BsFacebook>
                    <BsTwitter className="w-6 h-6 hover:text-sky-500 transition duration-75"></BsTwitter>
                    <BsInstagram className="w-6 h-6 hover:text-[#e43d49] transition duration-75"></BsInstagram>
                  </div>
                </div>
              </div>
            ))}
          </Flicking>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
