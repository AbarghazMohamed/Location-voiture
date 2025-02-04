'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = ['All', 'Luxury', 'Sports', 'SUV', 'Electric'];

const cars = [
  {
    id: 1,
    name: 'Mercedes-Benz S-Class',
    category: 'Luxury',
    price: 200,
    image: '/cars/Classe-E.jpg',
    features: ['Leather seats', 'Automatic', 'GPS', 'Climate control']
  },
  {
    id: 2,
    name: 'BMW 7 Series',
    category: 'Luxury',
    price: 180,
    image: '/cars/Classe-E.jpg',
    features: ['Panoramic roof', 'Automatic', 'GPS', 'Climate control']
  },
  {
    id: 3,
    name: 'Audi A8',
    category: 'Luxury',
    price: 190,
    image: '/cars/Classe-E.jpg',
    features: ['Leather seats', 'Automatic', 'GPS', 'Climate control']
  },
  {
    id: 4,
    name: 'Tesla Model S',
    category: 'Electric',
    price: 220,
    image: '/cars/Classe-E.jpg',
    features: ['Autopilot', 'Electric', 'GPS', 'Climate control']
  }
];

export default function CarsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(300);

  const filteredCars = cars.filter(car => 
    (selectedCategory === 'All' || car.category === selectedCategory) &&
    car.price <= priceRange
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Our Car Collection
        </motion.h1>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Category
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Max Price per Day: ${priceRange}
              </h3>
              <input
                type="range"
                min="50"
                max="300"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {car.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    ${car.price}/day
                  </span>
                  <Link
                    href={`/cars/${car.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors duration-300"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}