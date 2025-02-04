'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((error) => console.log("Playback failed:", error));
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Experience Luxury in Motion
        </motion.h2>

        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <video
            ref={videoRef}
            className="w-full h-auto"
            poster="/video-thumbnail.jpg"
            muted
            playsInline
            loop
          >
            <source src="/cars/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.button
              onClick={togglePlay}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 flex items-center justify-center
                       bg-white/20 backdrop-blur-sm rounded-full text-white 
                       hover:bg-white/30 transition-colors duration-300"
            >
              {isPlaying ? (
                <FaPause className="w-6 h-6" />
              ) : (
                <FaPlay className="w-6 h-6 ml-1" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}