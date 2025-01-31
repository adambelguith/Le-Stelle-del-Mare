import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer id='contact' className="relative bg-[#0a0a0a] text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-8 md:space-y-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Restaurant Name & Logo */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="relative w-48 h-48">
              <img src="/logos.png" alt="Le Stelle del Mare Logo" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 text-transparent bg-clip-text">
              Le Stelle del Mare
            </h2>
            <p className="text-gray-400 max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-yellow-400">{t('footer.contact')}</h3>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-yellow-500" />
              <span className="text-gray-300">{t('footer.phone')}</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-yellow-500" />
              <span className="text-gray-300">{t('footer.address')}</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-yellow-400">{t('footer.follow')}</h3>
            <div className="flex space-x-6">
              <motion.a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition"
                whileHover={{ scale: 1.2 }}
              >
                <FaFacebook size={30} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition"
                whileHover={{ scale: 1.2 }}
              >
                <FaInstagram size={30} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center text-gray-500 text-sm mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
         &copy; {new Date().getFullYear()} {t('footer.copyright')}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
