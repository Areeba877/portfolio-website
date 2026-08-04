import {
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import "./Skills.css";

function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 size={55} className="text-[#0B7D77]" />
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare size={55} className="text-[#0B7D77]" />

    },
    {
      name: "React.js",
      icon: <FaReact size={55} className="text-[#0B7D77]" />

    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={55} className="text-[#0B7D77]" />

    },
    {
      name: "Git",
      icon: <FaGitAlt size={55} className="text-[#0B7D77]" />

    },
    {
      name: "GitHub",
      icon: <FaGithub size={55} className="text-[#0B7D77]" />

    },
    {
      name: "VS Code",
      icon: <VscVscode size={55} className="text-[#0B7D77]" />

    },
    {
      name: "Python",
      icon: <FaPython size={55} className="text-[#0B7D77]" />
    },
  ];

  return (
    <section
      id="skills"
      className="bg-white min-h-screen flex items-center py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">
            My <span className="text-[#0B7D77]">Skills</span>
          </h2>

          <p className="text-gray-1000 mt-5 max-w-2xl mx-auto text-lg">
            These are the technologies and tools I use to build modern,
            responsive and user-friendly web applications.
          </p>
        </div>

        {/* Skills Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {skills.map((skill, index) => (
    <div
      key={index}
      className="skill-card"
    >
      <div className="skill-content">

        <div className="flex justify-center mb-5">
          {skill.icon}
        </div>

        <h3 className="text-xl font-semibold text-[#0B7D77]">
          {skill.name}
        </h3>

      </div>
    </div>
  ))}

</div>
</div>
          
    </section>
  );
}

export default Skills;