import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/profile.png";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Hero() {
  return (
    <section 
      id="home"
      className="bg-white min-h-screen flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] items-center gap-4 lg:gap-0">
{/* Left Side - Image Container */}
<div className="flex justify-center lg:justify-start lg:ml-12">
  <div
    className="
      relative
      w-[330px]
      h-[330px]
      rounded-full
      overflow-hidden
      animate-float
      transition-all
      duration-500
      shadow-[0_0_19px_rgba(11,125,119,0.70)]
      hover:shadow-[0_0_40px_rgba(11,125,119,1.9)]
      drop-shadow-[0_0_19px_rgba(11,125,119,1.2)]
      hover:drop-shadow-[0_0_45px_rgba(11,125,119,2)]
    "
  >
    <div className="absolute inset-0 rounded-full bg-[#0B7D77] opacity-20"></div>

    <img
      src={profile}
      alt="Areeba Khalid"
      className="relative z-10 w-full h-full object-cover rounded-full"
    />
  </div>
</div>
      

        <div className="lg:-ml-8">
          <p className="lg:text-3xl text-gray-1000 text-xl font-bold">
            Hello, Myself
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-1000 mt-1">
            Areeba Khalid
          </h1>
<h2 className="text-4xl font-bold mt-2">
  <span className="text-black">And I'm a </span>

  <span className="text-[#0B7D77]">
    <Typewriter
      words={[
        "Software Engineering Student",
        "MERN Stack Developer",
        "Frontend Developer",
      ]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={80}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
</h2>

          <p className="text-gray-1000 leading-5 mt-5 max-w-2xl">
            Passionate Software Engineering student with experience in
            developing modern, responsive and user-friendly web applications
            using React.js, JavaScript and Tailwind CSS. I enjoy building
            clean interfaces and solving real-world problems through
            technology.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border-2 border-[#0B7D77] flex items-center justify-center text-[#0B7D77] transition-all duration-300 hover:bg-[#0B7D77] hover:text-white hover:-translate-y-2 hover:shadow-lg hover:shadow-[#0B7D77]/40"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border-2 border-[#0B7D77] flex items-center justify-center text-[#0B7D77] transition-all duration-300 hover:bg-[#0B7D77] hover:text-white hover:-translate-y-2 hover:shadow-lg hover:shadow-[#0B7D77]/40"
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="mailto:areebakhalid877@email.com"
              className="w-12 h-12 rounded-full border-2 border-[#0B7D77] flex items-center justify-center text-[#0B7D77] transition-all duration-300 hover:bg-[#0B7D77] hover:text-white hover:-translate-y-2 hover:shadow-lg hover:shadow-[#0B7D77]/40"
            >
              <MdEmail size={22} />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border-2 border-[#0B7D77] flex items-center justify-center text-[#0B7D77] transition-all duration-300 hover:bg-[#0B7D77] hover:text-white hover:-translate-y-2 hover:shadow-lg hover:shadow-[#0B7D77]/40"
            >
              <FaFacebookF size={18} />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-6">
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-3 bg-[#0B7D77] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#086861] transition duration-300"
            >
              <FaDownload />
              Download CV
            </a>

            <a
              href="#contact"
              className="border-2 border-[#0B7D77] text-[#0B7D77] px-8 py-3 rounded-full font-semibold hover:bg-[#0B7D77] hover:text-white transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;