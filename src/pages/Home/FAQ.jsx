import React, { useState } from "react";
import youtTube from "../../assets/img/youtubeVedio.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import "react-modal-video/css/modal-video.css";
import "react-modal-video/css/modal-video.min.css";

const FAQ = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex gap-14 bg-[#0A0D1B]">
      <div className="relative cursor-pointer " onClick={() => setOpen(true)}>
        <ModalVideo
          classNames="bg-red-500"
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        />
        <img src={youtTube} alt="Youtube" />
        <BsFillPlayCircleFill className="w-10  h-10 absolute top-[400px] left-[450px] text-[#e43d49]"></BsFillPlayCircleFill>
      </div>

      {/* Collaps start */}

      <div className="my-auto">
        {/* faq Heading start  */}

        <div>
          <p className="font-Oswald text-6xl font-medium text-white">
            SPARRING / FAQ
          </p>
          <div className="w-16 h-1 bg-red-500 my-4"></div>
        </div>

        {/* Collaps Number 1 start  */}
        <div
          tabIndex={0}
            className="collapse collapse-plus text-white rounded-none mb-3 bg-[#222739] transition  delay-150 hover:bg-[#E43D4E] hover:transition-all ease-in"
        >
          <div className="collapse-title text-xl font-medium font-Oswald">
            Do I have to be in shape to get started?
          </div>
          <div className="collapse-content">
            <p className="text-sm font-Poppins font-light">
              Not at all. You’ll find that our classes for beginners <br />
              are the perfect way to build up your overall fitness <br />
              level regardless of your physical condition. Good <br />
              luck!
            </p>
          </div>
        </div>
        {/* Collaps Number 1 End  */}

        {/* Collaps Number 2 start  */}
        <div
          tabIndex={0}
            className="collapse collapse-plus text-white rounded-none mb-3 bg-[#222739] transition  delay-150 hover:bg-[#E43D4E] hover:transition-all ease-in"
        >
          <div className="collapse-title text-xl font-medium">
            Can I come and watch a class?
          </div>
          <div className="collapse-content">
            <p className="text-sm font-Poppins font-light">
              Shoulder jerky biltong short ribs. Meatball beef <br />
              pancetta ball tip cow turkey corned beef strip steak <br />
              flank meatloaf cupim.Burgdoggen pork chop <br />
              t-bone andouille drumstick.
            </p>
          </div>
        </div>
        {/* Collaps Number 2 end  */}

        {/* Collaps Number 3 start  */}
        <div
          tabIndex={0}
            className="collapse collapse-plus text-white rounded-none mb-3 bg-[#222739] transition  delay-150 hover:bg-[#E43D4E] hover:transition-all ease-in"
        >
          <div className="collapse-title text-xl font-medium">
            Am I too old to start martial arts training?
          </div>
          <div className="collapse-content">
            <p className="text-sm font-Poppins font-light">
              Shoulder jerky biltong short ribs. Meatball beef <br />
              pancetta ball tip cow turkey corned beef strip steak <br />
              flank meatloaf cupim.Burgdoggen pork chop <br />
              t-bone andouille drumstick.
            </p>
          </div>
        </div>
        {/* Collaps Number 3 end  */}

        {/* Collaps Number 4 start  */}
        <div
          tabIndex={0}
            className="collapse collapse-plus text-white rounded-none mb-3 bg-[#222739] transition  delay-150 hover:bg-[#E43D4E] hover:transition-all ease-in"
        >
          <div className="collapse-title text-xl font-medium">
            Will I get hurt during the training?
          </div>
          <div className="collapse-content">
            <p className="text-sm font-Poppins font-light">
              Shoulder jerky biltong short ribs. Meatball beef <br />
              pancetta ball tip cow turkey corned beef strip steak <br />
              flank meatloaf cupim.Burgdoggen pork chop <br />
              t-bone andouille drumstick.
            </p>
          </div>
        </div>
      </div>
      {/* Collaps Number 4 end  */}

      {/* Collaps end */}
    </div>
  );
};

export default FAQ;
