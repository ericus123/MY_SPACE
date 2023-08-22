import { motion } from "framer-motion";
import { ReactNode } from "react";
const pageTransition = {
  initial: {
    opacity: 0,
    x: 100, // Start from the right
  },
  animate: {
    opacity: 1,
    x: 0, // Move to the left (center)
    transition: {
      duration: 0.5, // Transition duration
    },
  },
  exit: {
    opacity: 0,
    x: -100, // Move to the left (off-screen)
    transition: {
      duration: 0.5, // Transition duration
    },
  },
};

const AnimatedPage = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
