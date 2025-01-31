import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'next-i18next';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { t } = useTranslation('common');

  const menuItems = [
    { src: "/pasta.jpg", title: t('menu.items.pasta.title'), desc: t('menu.items.pasta.desc'), delay: 0.2 },
    { src: "/salmon.jpg", title: t('menu.items.salmon.title'), desc: t('menu.items.salmon.desc'), delay: 0.4 },
    { src: "/oysters.jpg", title: t('menu.items.oysters.title'), desc: t('menu.items.oysters.desc'), delay: 0.6 },
    { src: "/steak.jpg", title: t('menu.items.steak.title'), desc: t('menu.items.steak.desc'), delay: 0.8 },
    { src: "/dessert.jpg", title: t('menu.items.dessert.title'), desc: t('menu.items.dessert.desc'), delay: 1.0 },
    { src: "/cocktail.jpg", title: t('menu.items.cocktail.title'), desc: t('menu.items.cocktail.desc'), delay: 1.2 },
  ];

  const openModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  const openFullMenuModal = () => {
    setIsOpen(true);
  };

  return (
    <section id="menu" className="relative py-28 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/menu.jpg')" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Description */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
            {t('menu.title')}
          </h2>
          <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
            {t('menu.description')}
          </p>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative w-full h-80 bg-black/60 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl group hover:scale-105 transition-transform duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay, duration: 0.8 }}
              onClick={() => openModal(item)}
            >
              <Image
                src={item.src}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-300 mt-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Full Menu Button */}
        <div className="mt-12 flex justify-center relative z-10">
          <motion.button
            onClick={openFullMenuModal}
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 pointer-events-auto"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.8 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('menu.full_menu')}
          </motion.button>
        </div>

        {/* Full Menu Modal */}
        <AnimatePresence>
          {isOpen && !selectedItem && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-[#121212] max-w-4xl w-full rounded-lg overflow-hidden relative p-6"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  {t('menu.title')}
                </h2>

                <div className="mt-6 space-y-4">
                  {menuItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-16 h-16 relative">
                        <Image 
                          src={item.src} 
                          alt={item.title} 
                          layout="fill" 
                          objectFit="cover" 
                          className="rounded-lg"
                          sizes="100px"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Close Button */}
                <div className="flex justify-center mt-6">
                  <motion.button
                    onClick={closeModal}
                    className="px-6 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('menu.close')}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Single Item Modal */}
        <AnimatePresence>
          {isOpen && selectedItem && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-[#121212] max-w-4xl w-full rounded-lg overflow-hidden relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors z-10"
                  onClick={closeModal}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Modal Content */}
                <div className="relative h-[400px] md:h-[500px]">
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedItem.title}</h3>
                  <p className="text-gray-300">{selectedItem.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Menu;
