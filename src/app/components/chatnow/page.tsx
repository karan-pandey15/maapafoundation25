"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const ChatNow = () => {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-6 right-6 flex flex-col items-end gap-2"
      >
        {/* Message Bubble and Close Button */}
        {visible && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setVisible(false)}
              className="absolute -top-2 -right-2 bg-gray-200 rounded-full shadow p-1 hover:bg-gray-300 z-10"
            >
              <X size={14} className="text-gray-600" />
            </button>

            {/* WhatsApp-like Message Bubble */}
            <div
              className="bg-green-100 text-gray-800 px-4 py-2 rounded-lg text-sm shadow-md max-w-xs relative"
              style={{
                borderRadius: "10px 10px 10px 0",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              {/* Message Text */}
             Hello&apos;
              {/* Message Tail */}
              <div
                className="absolute -bottom-1 right-2 w-0 h-0"
                style={{
                  borderTop: "6px solid transparent",
                  borderBottom: "6px solid transparent",
                  borderRight: "6px solid #D1FAE5",
                }}
              />
            </div>
          </motion.div>
        )}

        {/* WhatsApp Icon */}
        <motion.a
          href="https://wa.me/+919569125048"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center"
        >
          <MessageCircle size={28} strokeWidth={2.5} />
        </motion.a>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatNow;