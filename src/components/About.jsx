import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

const About = () => {
  const { t } = useTranslation("common");

  const foodItems = [
    { src: "/pasta.jpeg", alt: t("about.pasta"), delay: 0.2 },
    { src: "/salmon.jpeg", alt: t("about.salmon"), delay: 0.4 },
    { src: "/oysters.jpeg", alt: t("about.oysters"), delay: 0.6 },
  ];

  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] overflow-hidden"
    >
      {/* Texture en arrière-plan */}
      <div className="absolute inset-0 " />

      {/* Effet de particules flottantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: 1,
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              opacity: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
                values: [0.4, 1, 0.4],
              },
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Galerie de plats */}
          <div className="grid grid-cols-2 gap-4 relative">
            {foodItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative h-64 rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0.2, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay, duration: 0.8 }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent bg-opacity-60" />
              </motion.div>
            ))}
            <motion.div
              className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-sm p-6 rounded-3xl shadow-lg"
              initial={{ opacity: 0.2, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <span className="text-2xl font-bold text-white">20+</span>
              <p className="text-orange-300">{t("about.signature_dishes")}</p>
            </motion.div>
          </div>

          {/* Contenu textuel */}
          <div className="space-y-8">
            <motion.h2
              className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              dangerouslySetInnerHTML={{ __html: t("about.title") }}
            />
            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              dangerouslySetInnerHTML={{ __html: t("about.description_1") }}
            />
            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              dangerouslySetInnerHTML={{ __html: t("about.description_2") }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
