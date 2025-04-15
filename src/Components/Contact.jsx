import React from "react";
import dotenv from 'dotenv'
import { toast } from "react-toastify";
import { motion } from "framer-motion";
const Contact = () => {
  const [result, setResult] = React.useState("");
  // dotenv.config()

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    const accessKey = import.meta.env.VITE_WEB_FORM_ACCESSKEY;

    console.log(accessKey,"access key");

    formData.append("access_key", accessKey );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult('');

    }
  };
  return (
    <motion.div
    initial={{opacity:0,x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready for the Next Step? We’re Here to Build Your Future.
      </p>
      <form className="max-w-2xl mx-auto text-gray-600 pt-8" onSubmit={onSubmit}>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              type="text"
              placeholder="Enter Your Name"
              required
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              name="Name"
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              name="Email"
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea name="Message" placeholder="Message" required className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"></textarea>
        </div>
        <button className="bg-blue-500 text-white py-2 px-12 mb-10 rounded hover:scale-105 transition-all duration-500">
          {result?result:'Send Message'}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
