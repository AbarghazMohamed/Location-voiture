'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import BookingForm from '@/components/BookingForm';
import { FaCar, FaGasPump, FaCogs, FaUsers } from 'react-icons/fa';
import { use } from 'react';

// This would typically come from an API or database
const cars = [
    {
      id: 1,
      name: 'Mercedes-Benz S-Class',
      category: 'Luxury',
      price: 200,
      image: '/cars/Classe-E.jpg',
      description: 'Experience ultimate luxury with the Mercedes-Benz S-Class. This flagship sedan combines exceptional comfort with cutting-edge technology.',
      features: ['Leather seats', 'Automatic', 'GPS', 'Climate control'],
      specifications: {
        engine: '3.0L V6',
        power: '429 hp',
        acceleration: '4.9s (0-60 mph)',
        transmission: '9-speed automatic'
      }
    },
    // Add more cars here...
  ];

export default function CarDetails({ params }: { params: { id: string } }) {
  const resolvedParams = use(params);
  const car = cars.find(c => c.id === parseInt(resolvedParams.id));

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Car Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover"
              />
            </div>

            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {car.name}
            </h1>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {car.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <FaCar className="text-blue-600 text-2xl mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {car.specifications.engine}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Engine</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <FaGasPump className="text-blue-600 text-2xl mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {car.specifications.power}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Power</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <FaCogs className="text-blue-600 text-2xl mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {car.specifications.transmission}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Transmission</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <FaUsers className="text-blue-600 text-2xl mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  5 Seats
                </h3>
                <p className="text-gray-600 dark:text-gray-300">Capacity</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Features
              </h2>
              <ul className="grid grid-cols-2 gap-4">
                {car.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <BookingForm
              carId={car.id}
              carName={car.name}
              pricePerDay={car.price}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}