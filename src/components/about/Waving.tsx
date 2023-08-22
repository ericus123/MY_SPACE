import { motion } from "framer-motion";

const HandEmoji = ({ className }: { className: string }) => {
  return (
    <motion.span
      className={className}
      role="img"
      aria-label="Hand Emoji"
      whileHover={{ rotate: 45, scale: 1.2 }}
      style={{
        display: "inline-block",
        fontSize: "1.5rem", // Adjust the font size as needed
        cursor: "pointer", // Add a cursor style to indicate interactivity
      }}
    >
      👋🏾
    </motion.span>
  );
};

export default HandEmoji;
