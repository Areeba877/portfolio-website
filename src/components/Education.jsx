import "./Education.css";
function Education() {
  return (
    <section
      id="education"
      className="bg-[#D5FDF9] min-h-screen flex items-center py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

        {/* Heading */}
        <div className="text-center mb-10 -mt-8]">
          <h2 className="text-5xl font-bold text-gray-1000">
            My <span className="text-[#0B7D77]">Education</span>
          </h2>

        
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">

<div className="education-card">
  <div className="education-content">

  </div>
            <p className="text-[#0B7D77] font-bold text-lg mt-2">
              2023 – Present
            </p>

            <h3  className="text-3xl font-bold text-gray-900 mt-3
           ">
              Bachelor of Software Engineering
            </h3>

            <h4  className="text-[#0B7D77] font-bold text-lg mt-2
          ">
              University of Management and Technology
            </h4>

            <p className="text-gray-1000 leading-5 mt-3">
              Currently pursuing a Bachelor's degree in Software Engineering.
              Learning Web Development, Data Structures & Algorithms, operating Systems, Coputer Vision,
              Database Systems, Software Design, Object Oriented programming and Full Stack Development.
            </p>

            {/* Subjects */}
            <div className="flex flex-wrap gap-4 mt-8">

              <span className="bg-[#D5FDF9] text-[#0B7D77] px-5 py-2 rounded-full font-medium">
                Web Development
              </span>

              <span className="bg-[#D5FDF9] text-[#0B7D77] px-5 py-2 rounded-full font-medium">
                OOP
              </span>

              <span className="bg-[#D5FDF9] text-[#0B7D77] px-5 py-2 rounded-full font-medium">
                Database
              </span>

              <span className="bg-[#D5FDF9] text-[#0B7D77] px-5 py-2 rounded-full font-medium">
                DSA
              </span>

              <span className="bg-[#D5FDF9] text-[#0B7D77] px-5 py-2 rounded-full font-medium">
                MERN Stack
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;