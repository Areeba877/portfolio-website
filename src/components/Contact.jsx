import { useState } from "react";
import axios from "axios";
function Contact() {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [subject, setSubject] = useState("");
const [message, setMessage] = useState("");
const [responseMessage, setResponseMessage] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("/api/contact",
      {
        name,
        email,
        phone,
        subject,
        message,
      }
    );

    setResponseMessage(res.data.message);

    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");

  } catch (err) {
    setResponseMessage("Something went wrong..");
  }
};
  return (
    <section
      id="contact"
      className="bg-white min-h-screen py-24 flex items-center"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">

        {/* Heading */}
        <h2 className="text-6xl font-bold text-center text-[#0B7D77] mb-12">
          Contact Me
        </h2>

<form onSubmit={handleSubmit} className="space-y-6">
          {/* First Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
  onChange={(e) => setName(e.target.value)}
              className="w-full border-2 border-[#0B7D77] rounded-lg px-5 py-4 outline-none focus:border-[#086861]"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
  onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-[#0B7D77] rounded-lg px-5 py-4 outline-none focus:border-[#086861]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
  onChange={(e) => setPhone(e.target.value)}
              className="w-full border-2 border-[#0B7D77] rounded-lg px-5 py-4 outline-none focus:border-[#086861]"
            />

            <input
              type="text"
              placeholder="Email Subject"
              value={subject}
  onChange={(e) => setSubject(e.target.value)}
              className="w-full border-2 border-[#0B7D77] rounded-lg px-5 py-4 outline-none focus:border-[#086861]"
            />
          </div>

          <textarea
            rows="8"
            placeholder="Your Message"
             value={message}
  onChange={(e) => setMessage(e.target.value)}
            className="w-full border-2 border-[#0B7D77] rounded-lg px-5 py-4 outline-none resize-none focus:border-[#086861]"
          ></textarea>

   {responseMessage && (
  <p className="text-center text-[#0B7D77] font-semibold">
    {responseMessage}
  </p>
)}

          {/* Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#0B7D77] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#086861] transition duration-300"
            >
              Send Message
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}

export default Contact;