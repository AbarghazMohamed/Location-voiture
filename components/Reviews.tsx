'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'John Smith',
    rating: 5,
    comment: 'Excellent service! The car was in perfect condition and the booking process was seamless.',
    image: '/avatars/avatar1.jpg'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Very professional and reliable. Will definitely use their services again!',
    image: '/avatars/avatar2.jpg'
  },
  {
    id: 3,
    name: 'Michael Brown',
    rating: 4,
    comment: 'Great selection of cars and competitive prices. Highly recommended!',
    image: '/avatars/avatar3.jpg'
  }
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Customer Reviews
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            See what our customers have to say about their experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img
                  src={reviews[activeIndex].image}
                  alt={reviews[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {reviews[activeIndex].name}
                </h3>
                <div className="flex text-yellow-400">
                  {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">
              "{reviews[activeIndex].comment}"
            </p>
          </motion.div>

          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex
                    ? 'bg-blue-600'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}