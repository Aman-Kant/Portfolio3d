import { useEffect } from 'react';
import { motion } from 'framer-motion';

const MobileFallback = () => {
  // Check if the device is mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  // If not mobile, don't render anything
  if (!isMobile) return null;

  return (
    <div className="fixed inset-0 bg-primary z-50 flex flex-col justify-center items-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Mobile View Not Supported</h2>
        <p className="text-secondary text-lg mb-6">
          This portfolio contains heavy 3D content that works best on desktop or laptop computers.
          Please switch to a larger screen for the full experience.
        </p>
        <div className="bg-tertiary p-4 rounded-lg">
          <p className="text-white">
            <span className="font-bold">Note:</span> Mobile support is coming soon!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileFallback;
