// Car inventory data + filter taxonomies

// Demo imagery: stable Unsplash photo IDs (CC0). Swap with real inventory shots later.
const U = (id, w = 900) => `https://images.unsplash.com/photo-${id}?w=${w}&auto=format&fit=crop&q=80`;

const CARS = [
  { id: 1,  name: "Aqua Hybrid S",      brand: "Toyota", category: "Hatchback", year: 2022, km: 28500, price: 2150000, engine: "1.5L Hybrid", trans: "CVT", fuel: "Hybrid",   location: "Dhaka",     tag: "Featured",    image: U("1542282088-72c9c27ed0cd") },
  { id: 2,  name: "X-Trail 4WD",        brand: "Nissan", category: "SUV",       year: 2021, km: 41200, price: 4850000, engine: "2.0L",         trans: "AT",  fuel: "Petrol",   location: "Chittagong",tag: "Certified",   image: U("1606664515524-ed2f786a0bd6") },
  { id: 3,  name: "Axela Touring",      brand: "Mazda",  category: "Sedan",     year: 2020, km: 52000, price: 2680000, engine: "1.5L Skyactiv", trans: "AT",  fuel: "Petrol",   location: "Dhaka",     tag: "Best Deal",   image: U("1503376780353-7e6692767b70") },
  { id: 4,  name: "Alphard Executive",  brand: "Toyota", category: "Van",       year: 2022, km: 38700, price: 11200000, engine: "2.5L",        trans: "AT",  fuel: "Petrol",   location: "Dhaka",     tag: "Premium",     image: U("1631295868223-63265b40d9e4") },
  { id: 5,  name: "Vezel Z Hybrid",     brand: "Honda",  category: "SUV",       year: 2023, km: 18900, price: 4250000, engine: "1.5L i-MMD",   trans: "CVT", fuel: "Hybrid",   location: "Chittagong",tag: "New Arrival", image: U("1494976388531-d1058494cdd8") },
  { id: 6,  name: "Premio G Superior",  brand: "Toyota", category: "Sedan",     year: 2021, km: 49500, price: 2950000, engine: "1.5L",         trans: "AT",  fuel: "Petrol",   location: "Dhaka",     tag: "Certified",   image: U("1552519507-da3b142c6e3d") },
  { id: 7,  name: "CX-5 XD Diesel",     brand: "Mazda",  category: "SUV",       year: 2022, km: 32100, price: 5650000, engine: "2.2L Diesel",  trans: "AT",  fuel: "Diesel",   location: "Sylhet",    tag: "Featured",    image: U("1583121274602-3e2820c69888") },
  { id: 8,  name: "Note e-POWER",       brand: "Nissan", category: "Hatchback", year: 2023, km: 14200, price: 2780000, engine: "1.2L e-POWER", trans: "CVT", fuel: "Hybrid",   location: "Dhaka",     tag: "New Arrival", image: U("1542362567-b07e54358753") },
  { id: 9,  name: "Land Cruiser Prado", brand: "Toyota", category: "SUV",       year: 2020, km: 62300, price: 9850000, engine: "2.7L",         trans: "AT",  fuel: "Petrol",   location: "Chittagong",tag: "Premium",     image: U("1533473359331-0135ef1b58bf") },
  { id: 10, name: "Swift RS",           brand: "Suzuki", category: "Hatchback", year: 2022, km: 22700, price: 1850000, engine: "1.2L",         trans: "AT",  fuel: "Petrol",   location: "Dhaka",     tag: "Best Deal",   image: U("1605559424843-9e4c228bf1c2") },
  { id: 11, name: "Allion A20",         brand: "Toyota", category: "Sedan",     year: 2020, km: 56400, price: 2620000, engine: "2.0L",         trans: "AT",  fuel: "Petrol",   location: "Sylhet",    tag: "Certified",   image: U("1568844293986-8d0400bd4745") },
  { id: 12, name: "Freed Hybrid",       brand: "Honda",  category: "Van",       year: 2021, km: 39800, price: 3120000, engine: "1.5L Hybrid",  trans: "CVT", fuel: "Hybrid",   location: "Chittagong",tag: "Featured",    image: U("1617469767053-3f0b5fa19c66") },
];

const FEATURED_IMAGE = U("1571127236794-81c0bbfe1ce3", 1200);

const CATEGORIES = [
  { id: "Sedan",     icon: "car",   count: 3 },
  { id: "SUV",       icon: "suv",   count: 4 },
  { id: "Hatchback", icon: "hatch", count: 3 },
  { id: "Van",       icon: "van",   count: 2 },
  { id: "Hybrid/EV", icon: "ev",    count: 4 },
];
const BRANDS = ["Toyota", "Honda", "Nissan", "Mazda", "Suzuki", "Lexus"];
const LOCATIONS = ["Dhaka", "Chittagong", "Sylhet"];
const FUELS = ["Petrol", "Hybrid", "Diesel"];
const TRANSMISSIONS = ["AT", "CVT", "MT"];

Object.assign(window, { CARS, CATEGORIES, BRANDS, LOCATIONS, FUELS, TRANSMISSIONS, FEATURED_IMAGE });
