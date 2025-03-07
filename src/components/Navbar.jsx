"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation('common');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleArrowClick = () => {
    document.getElementById("a-propos")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); 
  };

  return (
    <header className="relative w-full h-screen text-white overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.jpg')" }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </motion.div>

      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 transition-all duration-500 ${
          isScrolled ? "bg-black/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center  cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-20 h-20">
              <Image
                src="/logos.png" // Ensure the logo is stored in /public/logo.png
                alt="Le Stelle del Mare Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <span className="text-3xl font-extrabold bg-gradient-to-r from-yellow-500 via-orange-400 to-red-500 text-transparent bg-clip-text">
              Le Stelle del Mare
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {[
              { id: 'about', text: t('navbar.about') },
              { id: 'menu', text: t('navbar.menu') },
              { id: 'contact', text: t('navbar.contact') }
            ].map((item, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="text-lg font-medium text-white hover:text-yellow-400 transition-all relative group"
                whileHover={{ y: -4 }}
              >
                {item.text}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-500"></span>
              </motion.button>
            ))}
            <LanguageSwitcher onLanguageChange={() => {}} />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-white md:hidden">
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-lg z-40 pt-20"
            onClick={() => setIsOpen(false)}
          >
            <div className="container mx-auto px-6">
              <div className="space-y-4">
                {[
                  { id: 'about', text: t('navbar.about') },
                  { id: 'menu', text: t('navbar.menu') },
                  { id: 'contact', text: t('navbar.contact') }
                ].map((item, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsOpen(false);
                    }}
                    className="block w-full text-white text-2xl font-semibold py-3 hover:text-yellow-400 transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.text}
                  </motion.button>
                ))}
              </div>

              <div className="mt-8 border-t border-white/20 pt-6" onClick={(e) => e.stopPropagation()}>
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <LanguageSwitcher onLanguageChange={() => setIsOpen(false)} />
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <motion.h1
          className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t('navbar.slogan')}
        </motion.h1>

        <motion.p
          className="text-2xl text-gray-300 mb-6 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {t('navbar.hero_description')}
        </motion.p>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-10 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, 15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          onClick={handleArrowClick}
        >
          <svg className="w-14 h-14 text-yellow-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
