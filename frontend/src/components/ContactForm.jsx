import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const initialState = {
  firstName: "",
  secondName: "",
  email: "",
  phone: "",
  company: "",
  jobTitle: "",
  message: "",
};

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.secondName.trim()) newErrors.secondName = "Second name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email address";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone must be 10 digits";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (onSubmit) onSubmit(formData);
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-white">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full">
          <input
            type="text"
            placeholder="First name"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-green-500"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Second name"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-green-500"
            value={formData.secondName}
            onChange={(e) => setFormData({ ...formData, secondName: e.target.value })}
          />
          {errors.secondName && <p className="text-red-500 text-sm mt-1">{errors.secondName}</p>}
        </div>
      </div>

      <input
        type="email"
        placeholder="Email"
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-green-500"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

      <input
        type="tel"
        placeholder="Phone"
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-green-500"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full">
          <input
            type="text"
            placeholder="Company"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-green-500"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
          {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="Job Title"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-green-500"
            value={formData.jobTitle}
            onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
          />
          {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>}
        </div>
      </div>

      <textarea
        rows="4"
        placeholder="To better assist you, please describe how we can help..."
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-green-500"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}

      <button
        type="submit"
        className="bg-[#C8F8A9] text-black py-3 px-6 rounded-md hover:bg-green-900 hover:text-white transition-colors"
      >
        Submit ➜
      </button>
    </form>
  );
};

export default ContactForm;
