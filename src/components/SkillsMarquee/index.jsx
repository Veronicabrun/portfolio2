import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiFigma,
  SiCanva,
  SiSass,
  SiNetlify,
  SiGit,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skills = [
  { id: 1, name: "HTML", icon: <SiHtml5 /> },
  { id: 2, name: "CSS", icon: <SiCss /> },
  { id: 3, name: "JavaScript", icon: <SiJavascript /> },
  { id: 4, name: "React", icon: <SiReact /> },
  { id: 5, name: "Tailwind", icon: <SiTailwindcss /> },
  { id: 6, name: "GitHub", icon: <SiGithub /> },
  { id: 7, name: "Git", icon: <SiGit /> },
  { id: 8, name: "Figma", icon: <SiFigma /> },
  { id: 9, name: "Canva", icon: <SiCanva /> },
  { id: 10, name: "Sass / SCSS", icon: <SiSass /> },
  { id: 11, name: "Netlify", icon: <SiNetlify /> },
  { id: 12, name: "VS Code", icon: <VscCode /> },
  { id: 13, name: "UI Design", icon: <SiFigma /> },
  { id: 14, name: "Responsive Design", icon: <SiCss /> },
];

function SkillsMarquee() {
  const repeatedSkills = [...skills, ...skills];

  return (
    <section className="overflow-hidden bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-extrabold text-black sm:text-5xl">
          My{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Technologies and tools I use to build responsive and user-friendly
          digital experiences.
        </p>

        <div className="relative mt-16 overflow-hidden rounded-3xl bg-white py-8 shadow-2xl">
          <div className="flex w-max animate-[scroll_25s_linear_infinite] gap-6 px-8">
            {repeatedSkills.map((skill, index) => (
              <div
                key={`${skill.id}-${index}`}
                className="flex min-w-max items-center gap-3 rounded-full border border-pink-100 bg-white px-6 py-3 text-lg font-bold text-gray-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-xl text-white">
                  {skill.icon}
                </span>

                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsMarquee;