"use client";
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Globe, ChevronDown } from 'react-feather';

const LanguageSwitcher = ({ onLanguageChange = () => {} }) => {
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const languages = [
    { code: 'it', label: 'Italiano', icon: '🇮🇹' },
    { code: 'en', label: 'English', icon: '🇬🇧' }
  ];

  const changeLanguage = (locale) => {
    router.push(router.pathname, router.asPath, { locale });
    setIsMobileOpen(false);
    onLanguageChange();
  };

  return (
    <div className="relative">
      {/* 🌐 Desktop Version */}
      <div className="hidden md:flex items-center space-x-2">
        <Globe className="text-white w-5 h-5" />
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          value={router.locale}
          className="bg-transparent text-white border border-white rounded px-3 py-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code} className="bg-gray-900 text-white">
              {lang.icon} {lang.label}
            </option>
          ))}
        </select>
      </div>

      {/* 📱 Mobile Version */}
      <div className="md:hidden relative">
        <div onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="flex items-center justify-center space-x-2 bg-black/50 backdrop-blur-lg border border-white/20 rounded-lg px-4 py-2 hover:bg-white/10 transition-all mx-auto"
          >
            <Globe className="text-white w-5 h-5" />
            <span className="text-white">
              {languages.find(lang => lang.code === router.locale)?.icon}
            </span>
            <ChevronDown className={`text-white w-4 h-4 transition-transform ${
              isMobileOpen ? 'rotate-180' : ''
            }`} />
          </button>

          {isMobileOpen && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-black/90 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden z-50 border border-white/10">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full px-4 py-3 text-center text-white hover:bg-white/10 transition-colors flex items-center justify-center space-x-3 ${
                    router.locale === lang.code ? 'bg-white/10' : ''
                  }`}
                >
                  <span className="text-lg">{lang.icon}</span>
                  <span className="font-medium">{lang.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher; 