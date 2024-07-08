import React from "react";
import {
  AiFillGithub,
  AiFillGitlab,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume.pdf";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


const Hero = () => {
  const handleEmailButtonClick = () => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      // If it's a mobile device, open the default mail client
      window.location.href = "mailto:pedrofmc2901@gmail.com";
    } else {
      // If it's not a mobile device, open Gmail in the default browsere
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=pedrofmc2901@gmail.com",
        "_blank"
      );
    }
  };

  return (
    <div id="home" className={` bg-gradient-to-r from-purple-300 to-blue-400 `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
              Olá, sou Pedro Felipe
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Web Developer",
                2000,
                "Mobile Developer",
                2000,
                "Software Engineer",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-purple-500 text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              Sou graduado em Engenharia de Software e atualmente estou cursando uma pós-graduação em Arquitetura de Software.
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              onClick={handleEmailButtonClick}
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-purple-500 cursor-pointer"
            >
              <span> Contrate-me</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-purple-500"
              download
            >
              <div className="flex items-center gap-1">
                Resumo <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/PedroAllien">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://gitlab.com/PedroAllien">
                  {" "}
                  <AiFillGitlab className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/pedromoraescarrijo/">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pedro.fmc/">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
              data-aos="fade-up"
              className=" h-[50%]  w-full object-cover md:h-[55%] md:m-auto sm:m-0"
              src='https://i.ibb.co/6ZHcsjF/pd.png'
              // src={mine}
              alt="mine"
            />
          </div>
        </div>
      </div>

      {/* mail button */}
      <div className="fixed bottom-10 right-10 sm:right-5 sm:bottom-5 bg-purple-500 w-16 h-16 sm:w-12 sm:h-12 flex items-center justify-center rounded-full z-20 animate-bounce">
        <button
          data-aos="fade-up"
          data-aos-duration="1200"
          onClick={handleEmailButtonClick}
          className="box font-medium text-white  flex items-start justify-center gap-1"
        >
          <MdEmail className=" rotate-[15deg] text-white text-3xl sm:text-2xl hover:scale-110 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
