'use client';

import { motion } from 'framer-motion';
import { FaCar, FaClock, FaShieldAlt, FaHeadset } from 'react-icons/fa';

const services = [
  {
    icon: FaCar,
    title: 'Wide Car Selection',
    description: 'Choose from our extensive fleet of premium vehicles for any occasion.'
  },
  {
    icon: FaClock,
    title: '24/7 Availability',
    description: 'Book your car anytime, anywhere with our round-the-clock service.'
  },
  {
    icon: FaShieldAlt,
    title: 'Insurance Coverage',
    description: 'Drive with peace of mind with our comprehensive insurance coverage.'
  },
  {
    icon: FaHeadset,
    title: 'Customer Support',
    description: 'Our dedicated team is always ready to assist you with any queries.'
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Experience premium car rental services tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <service.icon className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}