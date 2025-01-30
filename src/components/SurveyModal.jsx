import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaBuilding, FaIndustry, FaBullseye } from 'react-icons/fa';
import toast from "react-hot-toast";

const InputField = ({ icon: Icon, ...props }) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <Icon className="text-blue-400" size={16} />
    </div>
    <input
      {...props}
      className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm"
    />
  </div>
);

const SelectField = ({ icon: Icon, ...props }) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <Icon className="text-blue-400" size={16} />
    </div>
    <select
      {...props}
      className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm appearance-none"
    />
  </div>
);

const SurveyModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Added phone field
    company: '',
    industry: '',
    marketingGoals: '',
    services: []
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.querySelector('.services-icon')?.style.setProperty('z-index', '1');
    } else {
      document.body.style.overflow = 'unset';
      document.querySelector('.services-icon')?.style.setProperty('z-index', '10');
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.querySelector('.services-icon')?.style.setProperty('z-index', '10');
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Survey submitted successfully!");
        onClose();
      } else {
        toast.error(result.error || "Failed to send survey.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter(service => service !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const services = [
    'Social Media Marketing',
    'Content Creation',
    'Web Development',
    'SEO Optimization',
    'Brand Strategy'
  ];

  const industries = [
    'Technology',
    'E-commerce',
    'Healthcare',
    'Education',
    'Real Estate',
    'Finance',
    'Manufacturing',
    'Retail',
    'Services',
    'Other'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl"
            style={{
              zIndex: 999999,
              backdropFilter: 'blur(16px)',
            }}
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 30 }}
            className="fixed inset-0 flex items-center justify-center pointer-events-none"
            style={{ zIndex: 1000000 }}
          >
            <div className="relative w-full max-w-lg mx-4 pointer-events-auto">
              <div className="bg-gray-900 rounded-xl shadow-2xl border border-gray-800">
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-800">
                  <h2 className="text-xl font-bold text-white">Marketing Strategy Survey</h2>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-4 space-y-4">
                  {/* Contact Info Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <InputField
                      icon={FaUser}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                    <InputField
                      icon={FaEnvelope}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <InputField
                    icon={FaPhone}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                  />

                  {/* Company & Industry Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <InputField
                      icon={FaBuilding}
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      required
                    />
                    <SelectField
                      icon={FaIndustry}
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry.toLowerCase()}>
                          {industry}
                        </option>
                      ))}
                    </SelectField>
                  </div>

                  {/* Services */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Services Interested In</label>
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((service) => (
                        <label
                          key={service}
                          className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            name="services"
                            value={service}
                            checked={formData.services.includes(service)}
                            onChange={handleChange}
                            className="rounded border-gray-700 text-blue-500 focus:ring-blue-500 bg-gray-800"
                          />
                          <span>{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Marketing Goals */}
                  <div className="relative">
                    <div className="absolute top-2 left-3">
                      <FaBullseye className="text-blue-400" size={16} />
                    </div>
                    <textarea
                      name="marketingGoals"
                      value={formData.marketingGoals}
                      onChange={handleChange}
                      placeholder="Tell us about your marketing goals and current challenges..."
                      className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm h-20 resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                  >
                    Submit Survey
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SurveyModal;
