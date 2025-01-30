import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { src: "/pasta.png", title: "Pâtes aux Fruits de Mer", desc: "Délicieuses pâtes faites maison avec des fruits de mer frais.", delay: 0.2 },
  { src: "/salmon.png", title: "Saumon Grillé", desc: "Saumon grillé à la perfection avec une sauce au citron et herbes.", delay: 0.4 },
  { src: "/oysters.png", title: "Huîtres Fraîches", desc: "Sélection des meilleures huîtres servies avec citron et vinaigre d’échalote.", delay: 0.6 },
  { src: "/steak.jpg", title: "Filet de Bœuf Rossini", desc: "Tendre filet de bœuf sur un toast, garni de foie gras et truffe noire.", delay: 0.8 },
  { src: "/dessert.png", title: "Fondant au Chocolat", desc: "Dessert moelleux avec un cœur fondant au chocolat noir.", delay: 1.0 },
  { src: "/cocktail.png", title: "Cocktail Signature", desc: "Un mélange exotique de fruits frais et spiritueux raffinés.", delay: 1.2 },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="menu" className="relative py-28 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/menu.png')" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Description */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Notre Menu Raffiné
          </h2>
          <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
            Découvrez une sélection de plats préparés avec passion, mettant en valeur les saveurs authentiques et la finesse culinaire.
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
              className="relative w-full h-80 bg-black/60 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl group hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay, duration: 0.8 }}
            >
              <Image
                src={item.src}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-300 mt-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center relative z-10">
  <motion.button
    onClick={() => setIsOpen(true)}
    className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 pointer-events-auto"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 1.5, duration: 0.8 }}
    whileTap={{ scale: 0.95 }}
  >
    Voir la Carte Complète
  </motion.button>
</div>


        {/* Full-Screen Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-lg flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-[#121212] text-white p-8 rounded-lg max-w-3xl shadow-2xl relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl"
                  onClick={() => setIsOpen(false)}
                >
                  &times;
                </button>

                {/* Menu Content */}
                <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  Notre Carte Complète
                </h2>

                <div className="mt-6 space-y-4">
                  {menuItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-16 h-16 relative">
                        <Image src={item.src} alt={item.title} layout="fill" objectFit="cover" className="rounded-lg" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Close Button */}
                <div className="flex justify-center mt-6">
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Fermer
                  </motion.button>
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
