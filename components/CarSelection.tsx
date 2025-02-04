'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const cars = [
  {
    id: 1,
    name: 'Mercedes-Benz S-Class',
    category: 'Luxury',
    price: 200,
    image: '/cars/Classe-E.jpg'
  },
  {
    id: 2,
    name: 'BMW 7 Series',
    category: 'Luxury',
    price: 180,
    image: '/cars/mercedes.jpeg'
  },
  {
    id: 3,
    name: 'Audi A8',
    category: 'Luxury',
    price: 190,
    image: '/cars/mercedes.jpeg'
  }
];

export default function CarSelection() {
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
            Choose Your Car
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Select from our premium collection
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {car.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {car.category}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    ${car.price}/day
                  </span>
                  <Link
                    href={`/cars/${car.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full 
                             transition-colors duration-300"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/cars"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 
                     rounded-full text-lg font-semibold transition-colors duration-300"
          >
            View All Cars
          </Link>
        </motion.div>
      </div>
    </section>
  );
}