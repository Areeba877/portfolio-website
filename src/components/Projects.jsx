import { useState } from "react";
const projects = [
  {
    title: "Payroll Management System",
    description:
      "A Payroll Management System developed to manage employee records, salaries, attendance, and payroll calculations efficiently.",
       details:
          "This project is a Payroll Management System developed to manage employee records, attendance, salary calculations, and payroll reports efficiently. It allows administrators to organize employee information, calculate monthly salaries, manage leave records, and generate payroll details through a simple, user-friendly interface. The project was developed using HTML, CSS, and JavaScript." ,
   tech: ["HTML", "CSS","JavaScript"],
  },
  {
    title: "Online Shopping System",
    description:
      "A responsive e-commerce website with product listings, shopping cart, and a modern user-friendly interface.",
      details:
"This project is a responsive e-commerce website that allows users to browse products, view product details, add items to the shopping cart, and enjoy a user-friendly shopping experience. It was developed using HTML, CSS, and JavaScript with a responsive design for all devices.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Responsive Business Website",
    description:
      "A modern responsive business website with clean UI, responsive layout, and smooth user experience.",
      details:
"This is a modern and fully responsive business website designed to showcase company services, about information, and contact details. The website features a clean user interface, smooth navigation, and mobile-friendly layout built using React.js and Tailwind CSS.",
    tech: ["React.js", "Tailwind CSS", "Javascript"],
  },
   {
    title: "Car Analytics System",
    description:
    "A web-based Car Analytics System developed using HTML, CSS, JavaScript, Python and SQL. It helps analyze car data, manage records, and generate useful insights through an interactive dashboard.",
      details:
"This is a modern and fully responsive website that helps analyze car data, manage records, and generate useful insights through an interactive dashboard.",
    tech: ["HTML", "CSS", "Javascript", "Python", "SQL"],
  },
  
];

function Projects() {
    const [openCard, setOpenCard] = useState(null);
  return (
    <section
      id="projects"
      className="bg-white py-0"
    >
      <div className="max-w-7xl mx-auto px-3 lg:px-5">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            My <span className="text-[#0B7D77]">Projects</span>
          </h2>


        </div>

        {/* Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
  <div
  key={index}
  className={`bg-[#D5FDF9] rounded-3xl p-8 border-2 border-transparent
  hover:border-[#0B7D77] hover:-translate-y-2 hover:shadow-xl
  transition-all duration-300
  ${index === 3 ? "lg:col-start-2" : ""}`}
>
    <h3 className="text-3xl font-bold text-gray-900 mb-5">
      {project.title}
    </h3>

    <p className="text-gray-1000 leading-5 mb-5">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-3">
      {project.tech.map((item, i) => (
        <span
          key={i}
          className="bg-white px-4 py-2 rounded-full text-sm font-medium text-[#0B7D77]"
        >
          {item}
        </span>
      ))}
    </div>

    {openCard === index && (
      <p className="mt-5 text-gray-1000 leading-5">
        {project.details}
      </p>
    )}

    <button
      onClick={() =>
        setOpenCard(openCard === index ? null : index)
      }
      className="mt-6 bg-[#0B7D77] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#086861] transition duration-300"
    >
      {openCard === index ? "Show Less" : "Read More"}
    </button>

  </div>
))}

        </div>
      </div>
    </section>
  );
}

export default Projects;