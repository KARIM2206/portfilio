import { motion } from "motion/react";
const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.div
      className="absolute flex items-center justify-center w-12 h-12 p-2 bg-white rounded-full shadow-lg cursor-grab active:cursor-grabbing shadow-white/20 sm:w-16 sm:h-16 sm:p-3"
      style={style}
      whileHover={{ scale: 1.05 }}
      whileDrag={{ scale: 1.15, zIndex: 50 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.5}
      dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }}
    >
      <img src={image} className="object-contain w-full h-full pointer-events-none" alt="skill" />
    </motion.div>
  ) : (
    <motion.div
      className="absolute px-2 py-2 text-sm text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[8rem] sm:w-[12rem] sm:text-xl sm:px-1 sm:py-4 cursor-grab active:cursor-grabbing"
      style={style}
      whileHover={{ scale: 1.05 }}
      whileDrag={{ scale: 1.15, zIndex: 50 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.5}
      dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }}
    >
      {text}
    </motion.div>
  );
};

export default Card;
