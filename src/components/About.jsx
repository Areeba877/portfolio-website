import { useState } from "react";
import profile from "../assets/about.png";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
<section
  id="about"
  className="bg-[#D5FDF9] min-h-screen flex items-center py-20"
>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* Left Side */}
          <div>

             <h2 className="text-5xl font-bold text-gray-900">
            About <span className="text-[#0B7D77]">Me</span>
          </h2>

            <h3 className="text-4xl font-semibold mt-3">
  <span className="text-black">I'm a </span>
  <span className="text-[#0B7D77]">MERN Stack Developer</span>
</h3>
           

  <p className="text-gray-1000 leading-5 mt-5 w-full">
I'm a Software Engineering student passionate about building
              modern, responsive and user-friendly web applications using
              React.js, JavaScript and Tailwind CSS.
            </p>

            {showMore && (
              <div className="mt-4 text-gray-1000 leading-5 max-w-lg">
                <p>
                  I enjoy learning new technologies and building real-world
                  projects using the MERN Stack. My goal is to become a
                  professional Full Stack Developer and improve my
                  programming and problem-solving skills.
                </p>

                <ul className="mt-4 space-y-2 list-disc ml-4">
                  <li>React.js</li>
                  <li>JavaScript</li>
                  <li>Tailwind CSS</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                   <li>Python</li>
                </ul>
              </div>
            )}

            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-8 bg-[#0B7D77] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#086861] duration-300"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>

          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-start lg:ml-44">

  <div
    className="
     relative
      w-[330px]
      h-[330px]
      rounded-full
      overflow-hidden
      transition-all
      duration-500
      shadow-[0_0_19px_rgba(11,125,119,0.70)]
      hover:shadow-[0_0_40px_rgba(11,125,119,1.9)]
      drop-shadow-[0_0_19px_rgba(11,125,119,1.2)]
      hover:drop-shadow-[0_0_45px_rgba(11,125,119,2)]
    "
  >
    <div className="absolute inset-1 rounded-full bg-[#0B7D77] opacity-10"></div>

    <img
      src={profile}
      alt="Areeba Khalid"
      className="relative z-10 w-full h-full object-cover rounded-full"
    />

  </div>

</div> 

</div> 

</div> 

</section>
  );
}
  


export default About;