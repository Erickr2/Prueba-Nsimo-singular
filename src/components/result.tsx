import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  result: number | null;
  error: string | null;
};

export const Resultado: React.FC<Props> = ({ result, error }) => {
  const hasMessage = result !== null || error;

  return (
    <AnimatePresence>
      {hasMessage && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
          className={`fixed bottom-6 right-6 p-4 rounded-xl shadow-lg text-white z-50 ${
            error ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {error ? <p className="font-medium">❌ Error: {error}</p> : <p className="font-medium">✅ Resultado: {result}</p>}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
