'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/cars/Classe-E.jpg"
              alt="Luxury car fleet"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              About Our Company
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-6"
            >
              With over a decade of experience in the car rental industry, we pride ourselves
              on providing exceptional service and a premium fleet of vehicles to our valued customers.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">500+</h3>
                <p className="text-gray-600 dark:text-gray-300">Happy Customers</p>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">100+</h3>
                <p className="text-gray-600 dark:text-gray-300">Premium Cars</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}