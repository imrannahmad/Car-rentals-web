import swiftImg from '../assets/cars/swift.png';
import balenoImg from '../assets/cars/baleno.png';
import wagonrImg from '../assets/cars/wagonr.png';
import scorpioImg from '../assets/cars/scorpio.png';
import innovaImg from '../assets/cars/innova.png';

export const cars = [
  {
    id: 1,
    name: 'Maruti Swift',
    type: 'Hatchback',
    fuelType: 'Petrol',
    pricePerHour: 99,
    pricePerDay: 1999,
    seats: 5,
    transmission: 'Manual',
    image: swiftImg,
    rating: 4.8,
    trips: '340+ trips'
  },
  {
    id: 2,
    name: 'Maruti Baleno',
    type: 'Hatchback',
    fuelType: 'Petrol',
    pricePerHour: 129,
    pricePerDay: 2499,
    seats: 5,
    transmission: 'Manual',
    image: balenoImg,
    rating: 4.9,
    trips: '480+ trips'
  },
  {
    id: 3,
    name: 'Maruti WagonR',
    type: 'Hatchback',
    fuelType: 'CNG',
    pricePerHour: 109,
    pricePerDay: 2199,
    seats: 5,
    transmission: 'Manual',
    image: wagonrImg,
    rating: 4.7,
    trips: '520+ trips'
  },
  {
    id: 4,
    name: 'Mahindra Scorpio-N',
    type: 'SUV',
    fuelType: 'Diesel',
    pricePerHour: 249,
    pricePerDay: 4999,
    seats: 7,
    transmission: 'Automatic',
    image: scorpioImg,
    rating: 4.95,
    trips: '610+ trips'
  },
  {
    id: 5,
    name: 'Toyota Innova Hycross',
    type: 'SUV',
    fuelType: 'Hybrid',
    pricePerHour: 299,
    pricePerDay: 5999,
    seats: 7,
    transmission: 'Automatic',
    image: innovaImg,
    rating: 4.98,
    trips: '730+ trips'
  }
];
