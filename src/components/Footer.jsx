import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#D5FDF9] py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Social Icons */}
        <div className="flex gap-5 mb-5">

          <a
            href="https://linkedin.com/in/your-link"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full border-2 border-[#0B7D77] flex items-center justify-center text-[#0B7D77] hover:bg-[#0B7D77] hover:text-white transition duration-300"
          >
            <FaLinkedinIn size={22} />
          </a>

          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full border-2 border-[#0B7D77] flex items-center justify-center text-[#0B7D77] hover:bg-[#0B7D77] hover:text-white transition duration-300"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://facebook.com/your-facebook"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full border-2 border-[#0B7D77] flex items-center justify-center text-[#0B7D77] hover:bg-[#0B7D77] hover:text-white transition duration-300"
          >
            <FaFacebookF size={20} />
          </a>

          <a
            href="https://instagram.com/your-instagram"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 rounded-full border-2 border-[#0B7D77] flex items-center justify-center text-[#0B7D77] hover:bg-[#0B7D77] hover:text-white transition duration-300"
          >
            <FaInstagram size={20} />
          </a>

        </div>

        {/* Copyright */}
        <p className="text-gray-800 text-lg text-center">
          © {new Date().getFullYear()} <strong>Areeba Khalid</strong>. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;