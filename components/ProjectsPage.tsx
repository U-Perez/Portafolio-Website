import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Project from "./Project";

const ProjectsPage = () => {
  return (
    <section id="projects">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="my-10 text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div>
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
