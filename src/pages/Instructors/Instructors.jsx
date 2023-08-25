import React from "react";
import useAxiosSecure from "../../customeHocks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { HashLoader } from "react-spinners";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Instructors = () => {
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
  return (
    <div className="container mx-auto">
      <div className="text-center py-10">
        <h1 className="text-white text-6xl font-Oswald">OUR INSTRUCTORS</h1>
        <div className="w-12 h-1 bg-red-500 mx-auto mt-2"></div>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {instructors.map((instructor) => (
          <div
            key={instructor._id}
            className={`card  bg-base-100 shadow-2xl shadow-blue-500/20`}
          >
            <figure>
              <img src={instructor?.photoURL} alt="instructor displayName"  />
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
      </div>
    </div>
  );
};

export default Instructors;
