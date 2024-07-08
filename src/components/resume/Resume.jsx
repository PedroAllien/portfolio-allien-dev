import React, { useState } from "react";
import { RiLink } from "react-icons/ri";
import { Link } from "react-router-dom";

const Resume = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const internships = [
    {
      title: "Engenheiro de Software",
      company: "PromoExp",
      link: "",
      date: "Junho 2022 - Atualmente",
      description: `Atuei como desenvolvedor front-end utilizando React/Next.js e Flutter. Com React e Next.js, desenvolvi aplicações web rápidas e interativas, proporcionando uma experiência de usuário otimizada e fluida. Utilizando Flutter, criei aplicativos móveis nativos para iOS e Android, garantindo uma experiência consistente em diferentes plataformas. Além disso, integrei APIs para comunicação eficiente com o backend, assegurando operações rápidas e seguras para monitoramento de estoque e análise de preços em tempo real.`,
    },
    {
      title: "Desenvolvedor Front-End",
      company: "Syncode Sistemas e Tecnologia",
      link: "https://syncode.com.br/",
      date: "Agosto 2021 - Atualmente",
      description: `Trabalhei como desenvolvedor front-end com foco no uso de Angular e Flutter. Utilizo Angular para criar aplicações web dinâmicas e escaláveis, garantindo interfaces de usuário responsivas e eficientes. Em Flutter, desenvolvo aplicativos móveis nativos para iOS e Android, proporcionando uma experiência consistente em múltiplas plataformas. Além disso, integro APIs RESTful para comunicação com o backend, assegurando operações rápidas e seguras, alinhadas às regulamentações de saúde e segurança de dados.`,
    },
    {
      title: "Desenvolvedor Full Stack",
      company: "Leno FX",
      link: "https://www.lenofx.com/",
      date: "Fevereiro 2021 - Agosto 2021",
      description: `Atuei como desenvolvedor front-end e back-end utilizando Angular, Node.js e GraphQL. Com Angular, desenvolvi aplicações web dinâmicas e responsivas, oferecendo uma interface de usuário intuitiva e eficiente para a exibição e compra de produtos digitais. Utilizando Node.js e GraphQL, criei APIs robustas e flexíveis, permitindo uma comunicação eficiente entre o frontend e o backend, além de facilitar o gerenciamento e a consulta de dados em tempo real, assegurando uma experiência de compra rápida e segura para os usuários.`,
    },
  ];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resumo
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Aqui estão minhas experiências e qualificações.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-black">
              Experiência
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-purple-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-purple-500"></div>
              </div>
              {/* design */}
              <div className="card-wrapper w-[100%] sm:w-full mt-5 flex flex-col items-center mx-auto">
                <div className="relative w-full flex items-center justify-center overflow-hidden">
                  <div className="carousel-container w-full sm:w-full overflow-hidden">
                    <div
                      className="carousel-inner flex transition-transform duration-500"
                      style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                      }}
                    >
                      {internships.map((internship, index) => (
                        <div
                          className="carousel-item w-full flex-shrink-0"
                          key={index}
                        >
                          <div className="flex flex-col gap-1 sm:gap-1 border-2 hover:border-purple-400 hover:shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg bg-white">
                            <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                              {internship.title}
                            </h1>
                            <Link
                              to={internship.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="text-[1rem] font-semibold text-gray-500 sm:text-base flex items-center gap-1">
                                <RiLink /> {internship.company}
                              </span>
                            </Link>
                            <span className="text-[.9rem] font-semibold text-purple-500 sm:text-base">
                              {internship.date}
                            </span>
                            <p className="text-[.9rem] text-justify break-words text-gray-500">
                              {internship.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Dots */}
                <div className="dots mt-4 flex justify-center gap-2">
                  {internships.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`cursor-pointer w-2 h-2 rounded-full ${currentSlide === index ? "bg-purple-500" : "bg-gray-300"
                        }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-black">
              Educação
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-purple-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-purple-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 hover:border-purple-400 hover:shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg bg-white">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Universidade Evangélica de Goiás, Engenharia de Software
                </h1>
                <Link to={"https://www.nita.ac.in/"}>
                  <span className=" text-[1rem] font-semibold text-gray-500 sm:text-base flex items-center gap-1">
                    <RiLink /> Goiás, Anápolis
                  </span>
                </Link>
                <span className=" text-[.9rem] font-semibold text-purple-500 sm:text-base">
                  2018 - 2022
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Como estudante de graduação, adquiri um sólido entendimento das tecnologias de desenvolvimento web, incluindo HTML, CSS, TailwindCSS, JavaScript, TypeScript e React.js. Além disso, desenvolvi proficiência em tecnologias de backend, como Node.js, Express.js e MySQL. Também possuo habilidades em Java e JavaScript, além de experiência na resolução de problemas utilizando estruturas de dados e algoritmos. Essas competências me permitem criar aplicações web completas e eficientes, desde a interface do usuário até a integração com o servidor e banco de dados.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;