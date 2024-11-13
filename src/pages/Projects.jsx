import { projects } from "../constants/index";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA.jsx";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My <span className="blue-gradient_text font-semibold">Projects</span>
      </h1>
      <div>
        <p>
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so
          if you come acros something that pique your interest, feel free to
          explore the codebase and contribute your ideas for further
          enhancements. Your collaboration is highly valued!
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="flex flex-row">
              <div className="block-container w-24 h-24">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt="Project Icon"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>

              <h4 className="text-2xl ml-8 mt-7 font-poppins font-semibold">
                {project.name}
              </h4>
            </div>

            <div className="mt-2 flex flex-col">
              <ul className="flex flex-wrap">
                {project.techs.map((tech, index) => (
                  <li
                    className="mt-2 gap-2 block-container w-20 h-20"
                    key={`project-tech-${index}`}
                  >
                    <img
                      src={tech}
                      alt="tech"
                      className="w-1/2 h-1/2 object-contain border-2 rounded-md"
                    />
                  </li>
                ))}
              </ul>

              <p className=" text-slate-500 h-32">{project.description}</p>
              <div className="mt-2 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener no referrer"
                  className="font-semibold text-blue-600 "
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
