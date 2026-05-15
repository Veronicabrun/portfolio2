import { useState } from "react";
import ProjectModal from "../ProjectModal";

const projects = [
  {
    id: 1,
    title: "Semester Project 2",
    shortDescription:
      "A responsive web project focused on layout, design and user experience.",
    fullDescription:
      "This project was built during my first year studies and focused heavily on responsive layouts, semantic HTML, accessibility and clean visual hierarchy. The goal was to create a professional and user-friendly interface.",
    image:
      "https://placehold.co/800x500/fbcfe8/111827?text=Semester+Project+2",
    github: "#",
    live: "#",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "JS Frameworks CA",
    shortDescription:
      "A React project using components, API data and dynamic routing.",
    fullDescription:
      "This project focused on React fundamentals such as reusable components, hooks, API fetching and routing. I worked on improving both user experience and responsive layouts across devices.",
    image:
      "https://placehold.co/800x500/e9d5ff/111827?text=JS+Frameworks+CA",
    github: "#",
    live: "#",
    tags: ["React", "API", "CSS"],
  },
  {
    id: 3,
    title: "Project Exam 2",
    shortDescription:
      "A larger frontend project focused on planning, design and deployment.",
    fullDescription:
      "This final project combined planning, UI design, responsive frontend development and deployment. The project focused on creating a polished and realistic production-ready experience.",
    image:
      "https://placehold.co/800x500/c7d2fe/111827?text=Project+Exam+2",
    github: "#",
    live: "#",
    tags: ["React", "Tailwind", "Netlify"],
  },
];

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white px-6 py-28"
    >
      <div className="absolute left-6 top-20 h-28 w-28 rounded-full bg-pink-100"></div>
      <div className="absolute bottom-24 right-6 h-32 w-32 rounded-full bg-purple-100"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-black sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            A selection of my course projects, documented with screenshots,
            GitHub repositories and live links.
          </p>
        </div>

        <div className="mt-24 grid gap-12 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative rounded-[2rem] bg-white p-5 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-[2rem] bg-purple-200 transition group-hover:bg-purple-300"></div>
              <div className="absolute -left-3 -top-3 -z-10 h-full w-full rounded-[2rem] bg-pink-200 transition group-hover:bg-pink-300"></div>

              <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-pink-100 to-purple-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="pt-6">
                <h3 className="text-2xl font-extrabold text-black">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {project.shortDescription}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-pink-100 bg-pink-50 px-3 py-1 text-xs font-semibold text-purple-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:scale-105"
                >
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <svg
        className="absolute -bottom-16 left-0 w-full text-pink-200"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 70 C260 15 430 115 720 65 C980 25 1160 95 1440 45"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default ProjectsSection;