import React from "react";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { FaPaperPlane } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const ConsultationForm = () => {
  const handleFormSubmit = (data) => {
    // Prepare email template parameters
    const templateParams = {
      from_name: `${data.firstName} ${data.secondName}`,
      from_email: data.email,
      phone: data.phone,
      company: data.company,
      job_title: data.jobTitle,
      message: data.message,
      to_email: "ns17740654@gmail.com", // The recipient email
    };

    // Send email using EmailJS
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Your message has been sent successfully!");
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="flex flex-col lg:flex-row font-sans bg-white mb-20 mt-10 lg:mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start ">
        <img
          src="/image (4).png"
          alt="Consult"
          className="w-full h-64 sm:h-80 lg:h-full lg:w-[900px] object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none"
        />
        {/* Overlay Card - Hidden on smaller screens */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-6 w-[90%] sm:w-[70%] lg:w-auto hidden lg:block">
          <ContactCard />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[600px] bg-white rounded-lg shadow-lg overflow-hidden mt-8 lg:mt-0">
        {/* Header */}
        <div className="bg-[#0D3E3E] text-white p-4 sm:p-5 flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-medium">
            <span className="text-green-300 font-bold">L</span>ets Connect !
          </h2>
          <FaPaperPlane className="text-xl sm:text-2xl" />
        </div>

        {/* Reusable Form */}
        <div className="p-4 sm:p-6">
          <ContactForm onSubmit={handleFormSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
