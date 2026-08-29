import swiftImg from '../assets/cars/swift.png';
import balenoImg from '../assets/cars/baleno.png';
import wagonrImg from '../assets/cars/wagonr.png';
import scorpioImg from '../assets/cars/scorpio.png';
import innovaImg from '../assets/cars/innova.png';

export const cars = [
  {
    id: 1,
    name: 'Maruti WagonR (CNG / Petrol)',
    type: 'Hatchback',
    fuelType: 'CNG / Petrol',
    pricePerHour: 99,
    pricePerDay: 1500,
    seats: 5,
    transmission: 'Manual',
    serviceType: 'Self Drive & With Driver',
    image: wagonrImg,
    rating: 4.8,
    trips: '520+ trips'
  },
  {
    id: 2,
    name: 'Maruti Swift',
    type: 'Hatchback',
    fuelType: 'Petrol',
    pricePerHour: 109,
    pricePerDay: 1600,
    seats: 5,
    transmission: 'Manual',
    serviceType: 'Self Drive & With Driver',
    image: swiftImg,
    rating: 4.9,
    trips: '480+ trips'
  },
  {
    id: 3,
    name: 'Maruti Baleno',
    type: 'Hatchback',
    fuelType: 'Petrol',
    pricePerHour: 129,
    pricePerDay: 1800,
    seats: 5,
    transmission: 'Manual',
    serviceType: 'Self Drive & With Driver',
    image: balenoImg,
    rating: 4.85,
    trips: '410+ trips'
  },
  {
    id: 4,
    name: 'Mahindra Scorpio-N',
    type: 'SUV',
    fuelType: 'Diesel',
    pricePerHour: 229,
    pricePerDay: 3500,
    seats: 7,
    transmission: 'Automatic',
    serviceType: 'Self Drive & Chauffeur Driven',
    image: scorpioImg,
    rating: 4.95,
    trips: '610+ trips'
  },
  {
    id: 5,
    name: 'Toyota Innova Hycross',
    type: 'SUV',
    fuelType: 'Hybrid',
    pricePerHour: 279,
    pricePerDay: 4500,
    seats: 7,
    transmission: 'Automatic',
    serviceType: 'Self Drive & Chauffeur Driven',
    image: innovaImg,
    rating: 4.98,
    trips: '730+ trips'
  }
];

