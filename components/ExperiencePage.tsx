import React from "react";

const ExperiencePage = () => {
  return (
    <section id="experience" className="scroll-mt-20">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex justify-center ">
          <ol className="relative md:h-full md:w-0.5 border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-4 md:w-72">
              <div className="absolute w-3  h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                April 2023 - August 2023
              </time>
              <h3 className="text-lg font-semibold text-gray-600">
                Application Web RH
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Plataforma web para gestión y control de empleados
              </p>
            </li>
            <li className="mb-10 md:-ml-72 ms-4 md:w-72">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                July 2019 - January 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-600">
                Asistente de Sistemas
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Implementación de sistema de monitoreo Nagios en Linux, soporte
                técnico
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
