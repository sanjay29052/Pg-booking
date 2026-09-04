import { PGListing } from '../types';

export const POPULAR_CITIES = [
  {
    name: 'Chennai',
    state: 'Tamil Nadu',
    tagline: 'Tech corridors & coastal charm',
    count: '350+ PGs',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80',
    popularHubs: ['OMR', 'Guindy', 'Velachery', 'Anna Nagar']
  },
  {
    name: 'Bangalore',
    state: 'Karnataka',
    tagline: 'Silicon Valley of India',
    count: '600+ PGs',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80',
    popularHubs: ['Koramangala', 'HSR Layout', 'Whitefield', 'Electronic City']
  },
  {
    name: 'Coimbatore',
    state: 'Tamil Nadu',
    tagline: 'Education hub & textile capital',
    count: '180+ PGs',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    popularHubs: ['Peelamedu', 'Gandhipuram', 'RS Puram', 'Saravanampatti']
  },
  {
    name: 'Madurai',
    state: 'Tamil Nadu',
    tagline: 'Cultural hub & student center',
    count: '120+ PGs',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80',
    popularHubs: ['KK Nagar', 'Anna Nagar', 'Tallakulam', 'Mattuthavani']
  },
  {
    name: 'Hyderabad',
    state: 'Telangana',
    tagline: 'Cyberabad & cultural fusion',
    count: '420+ PGs',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df8?auto=format&fit=crop&w=600&q=80',
    popularHubs: ['Hitec City', 'Gachibowli', 'Madhapur', 'Kondapur']
  }
];

export const ALL_FACILITIES = [
  'Wi-Fi',
  'Food',
  'AC',
  'Parking',
  'Laundry',
  'CCTV',
  'Power Backup',
  'RO Water',
  'Housekeeping',
  'Geyser',
  'Security Guard',
  'Gym'
];

export const SAMPLE_PGS: PGListing[] = [
  {
    id: 'pg-1',
    name: 'Stanza Living - Victoria House',
    location: 'Near Tidel Park, OMR',
    area: 'Tharamani, OMR',
    city: 'Chennai',
    rent: 9500,
    originalRent: 11000,
    gender: 'Female',
    roomType: ['Single', 'Double Sharing', 'Triple Sharing'],
    roomOptions: [
      { type: 'Single', rent: 14500, deposit: 20000, available: true },
      { type: 'Double Sharing', rent: 9500, deposit: 15000, available: true },
      { type: 'Triple Sharing', rent: 7500, deposit: 10000, available: true }
    ],
    rating: 4.8,
    reviews: 86,
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['Wi-Fi', 'Food', 'AC', 'Parking', 'Laundry', 'CCTV', 'Power Backup', 'Housekeeping', 'RO Water'],
    description: 'A premium women-only co-living space designed for IT professionals and college students along the OMR tech corridor. Features 3-time hygienic home-cooked meals, biometric security, high-speed fiber internet, and daily housekeeping.',
    rules: [
      'Gate closes at 10:30 PM (extension possible via portal permission)',
      'Male visitors strictly limited to lobby area',
      'No smoking or alcohol on premises',
      'Keep quiet hours between 11:00 PM and 6:00 AM'
    ],
    nearbyPlaces: [
      { name: 'Tidel Park & Ascendas IT Tech Park', distance: '600 m', type: 'tech' },
      { name: 'Thiruvanmiyur MRTS Railway Station', distance: '1.2 km', type: 'transit' },
      { name: 'NIFT Chennai Campus', distance: '850 m', type: 'education' },
      { name: 'Apollo Speciality Hospital OMR', distance: '2.1 km', type: 'health' },
      { name: 'Phoenix Marketcity Mall', distance: '3.8 km', type: 'shopping' }
    ],
    owner: {
      name: 'Priya Sundaram (Property Manager)',
      phone: '+91 98401 23456',
      email: 'victoria.chennai@pgfinder.in',
      responseRate: 'Under 15 mins'
    },
    featured: true,
    verified: true,
    reviewsList: [
      {
        id: 'rev-1',
        userName: 'Deepika R.',
        userType: 'Working Professional',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Very clean and safe. The food quality is genuinely good compared to regular PGs in OMR.'
      },
      {
        id: 'rev-2',
        userName: 'Aishwarya M.',
        userType: 'Student',
        rating: 4.5,
        date: '1 month ago',
        comment: 'High speed wifi makes attending virtual classes seamless. Friendly warden and staff.'
      }
    ]
  },
  {
    id: 'pg-2',
    name: 'Zolo Silicon Elite Boys PG',
    location: '4th Block, Koramangala',
    area: 'Koramangala',
    city: 'Bangalore',
    rent: 11000,
    originalRent: 12500,
    gender: 'Male',
    roomType: ['Single', 'Double Sharing'],
    roomOptions: [
      { type: 'Single', rent: 17000, deposit: 25000, available: true },
      { type: 'Double Sharing', rent: 11000, deposit: 18000, available: true }
    ],
    rating: 4.7,
    reviews: 114,
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['Wi-Fi', 'Food', 'AC', 'Parking', 'Laundry', 'CCTV', 'Power Backup', 'Gym', 'RO Water'],
    description: 'Located in the startup nerve center of Koramangala. Ideal for engineers, founders, and students. Equipped with dedicated work stations, ergonomic chairs, gaming lounge, rooftop dining, and 200 Mbps leased line internet.',
    rules: [
      'Digital keycard entry 24/7',
      'Visitor check-in mandatory at reception',
      'Designated smoking area on terrace only',
      'Weekly room inspection for sanitation'
    ],
    nearbyPlaces: [
      { name: 'Sony World Junction / 80ft Road', distance: '400 m', type: 'shopping' },
      { name: 'Oasis Centre & Forum Mall', distance: '1.1 km', type: 'shopping' },
      { name: 'Christ University Main Campus', distance: '2.5 km', type: 'education' },
      { name: 'Dairy Circle Metro Station', distance: '2.8 km', type: 'transit' },
      { name: 'St. John’s Medical College Hospital', distance: '1.5 km', type: 'health' }
    ],
    owner: {
      name: 'Rohan Hegde',
      phone: '+91 98860 78901',
      email: 'silicon.koramangala@pgfinder.in',
      responseRate: 'Under 10 mins'
    },
    featured: true,
    verified: true,
    reviewsList: [
      {
        id: 'rev-3',
        userName: 'Vikram Nair',
        userType: 'Working Professional',
        rating: 5,
        date: '3 weeks ago',
        comment: 'Best location in Bangalore. Walkable to cafes, startups, and restaurants. Fast internet.'
      }
    ]
  },
  {
    id: 'pg-3',
    name: 'Green Oasis Luxury Co-Living (Unisex)',
    location: 'Gachibowli Financial District',
    area: 'Gachibowli',
    city: 'Hyderabad',
    rent: 12500,
    originalRent: 14000,
    gender: 'Any',
    roomType: ['Single', 'Double Sharing'],
    roomOptions: [
      { type: 'Single', rent: 18500, deposit: 25000, available: true },
      { type: 'Double Sharing', rent: 12500, deposit: 18000, available: true }
    ],
    rating: 4.9,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['Wi-Fi', 'Food', 'AC', 'Parking', 'Laundry', 'CCTV', 'Power Backup', 'Gym', 'RO Water', 'Housekeeping'],
    description: 'Spacious modern co-living suites adjacent to Microsoft, Amazon, and Google campuses. Offers gourmet North & South Indian buffet meals, fitness studio, co-working hub, and quiet reading library.',
    rules: [
      'Individual biometric entrance with separate floors for boys and girls',
      'Guests allowed in common lounge until 9:00 PM',
      'Strict zero-tolerance policy on drugs/substance abuse',
      'Conserve electricity during non-peak daytime hours'
    ],
    nearbyPlaces: [
      { name: 'Microsoft & Wipro Circle', distance: '800 m', type: 'tech' },
      { name: 'University of Hyderabad (HCU)', distance: '2.9 km', type: 'education' },
      { name: 'IKEA Hyderabad & Inorbit Mall', distance: '4.2 km', type: 'shopping' },
      { name: 'Continental Hospitals', distance: '1.3 km', type: 'health' },
      { name: 'Raidurg Metro Station', distance: '3.6 km', type: 'transit' }
    ],
    owner: {
      name: 'Anand Varma',
      phone: '+91 97011 44556',
      email: 'greenoasis.hyd@pgfinder.in',
      responseRate: 'Under 20 mins'
    },
    featured: true,
    verified: true,
    reviewsList: [
      {
        id: 'rev-4',
        userName: 'Sneha Patel',
        userType: 'Working Professional',
        rating: 5,
        date: '5 days ago',
        comment: 'Top-notch facilities! Loved the gym and weekend community events. Truly hassle-free.'
      }
    ]
  },
  {
    id: 'pg-4',
    name: 'Sree Krishna Executive Men’s PG',
    location: 'Peelamedu, Near PSG Tech',
    area: 'Peelamedu',
    city: 'Coimbatore',
    rent: 6500,
    originalRent: 7500,
    gender: 'Male',
    roomType: ['Single', 'Double Sharing', 'Triple Sharing'],
    roomOptions: [
      { type: 'Single', rent: 9000, deposit: 10000, available: true },
      { type: 'Double Sharing', rent: 6500, deposit: 8000, available: true },
      { type: 'Triple Sharing', rent: 5200, deposit: 6000, available: true }
    ],
    rating: 4.6,
    reviews: 62,
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['Wi-Fi', 'Food', 'Parking', 'CCTV', 'Power Backup', 'RO Water', 'Laundry'],
    description: 'Affordable, clean, and homely accommodation right next to PSG College of Technology and TIDEL Park Coimbatore. Traditional South Indian meals prepared with care.',
    rules: [
      'Curfew time 10:00 PM for students',
      'No loud music after 10:00 PM',
      'Visitors not permitted inside private bedrooms',
      'Monthly rent payable before 5th of every month'
    ],
    nearbyPlaces: [
      { name: 'PSG College of Technology', distance: '350 m', type: 'education' },
      { name: 'TIDEL Park Coimbatore', distance: '1.4 km', type: 'tech' },
      { name: 'Coimbatore International Airport', distance: '3.5 km', type: 'transit' },
      { name: 'Fun Republic Mall', distance: '1.1 km', type: 'shopping' }
    ],
    owner: {
      name: 'K. Senthil Kumar',
      phone: '+91 94432 11223',
      email: 'senthil.cbe@pgfinder.in',
      responseRate: 'Under 30 mins'
    },
    featured: false,
    verified: true,
    reviewsList: [
      {
        id: 'rev-5',
        userName: 'Manoj Kumar',
        userType: 'Student',
        rating: 4.5,
        date: '2 months ago',
        comment: 'Very close to PSG Tech. Saves daily commute time. Sambar and tea are authentic!'
      }
    ]
  },
  {
    id: 'pg-5',
    name: 'Meenakshi Royal Women’s Hostel & PG',
    location: 'KK Nagar, Near Mattuthavani',
    area: 'KK Nagar',
    city: 'Madurai',
    rent: 5800,
    originalRent: 6800,
    gender: 'Female',
    roomType: ['Double Sharing', 'Triple Sharing'],
    roomOptions: [
      { type: 'Double Sharing', rent: 6800, deposit: 8000, available: true },
      { type: 'Triple Sharing', rent: 5800, deposit: 6000, available: true }
    ],
    rating: 4.5,
    reviews: 47,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['Wi-Fi', 'Food', 'CCTV', 'RO Water', 'Power Backup', 'Housekeeping', 'Parking'],
    description: 'Safe, gated accommodation for female students and government/private professionals in Madurai. Dedicated warden, healthy vegetarian & non-vegetarian food options, and study hall.',
    rules: [
      'Curfew strictly 9:00 PM without prior parent authorization',
      'Identity card check at entrance',
      'Zero alcohol / tobacco policy',
      'Parental stay allowed only in guest room with prior notice'
    ],
    nearbyPlaces: [
      { name: 'Mattuthavani Integrated Bus Terminus', distance: '1.5 km', type: 'transit' },
      { name: 'Apollo Speciality Hospitals Madurai', distance: '900 m', type: 'health' },
      { name: 'Lady Doak College', distance: '3.8 km', type: 'education' },
      { name: 'Madurai Meenakshi Temple', distance: '5.2 km', type: 'shopping' }
    ],
    owner: {
      name: 'Mrs. Lakshmi Narayanan (Warden)',
      phone: '+91 94441 55667',
      email: 'meenakshi.hostel@pgfinder.in',
      responseRate: 'Under 1 hour'
    },
    featured: false,
    verified: true,
    reviewsList: [
      {
        id: 'rev-6',
        userName: 'Divya Bharathi',
        userType: 'Student',
        rating: 5,
        date: '1 month ago',
        comment: 'Extremely safe and parents had peace of mind throughout my college final year.'
      }
    ]
  },
  {
    id: 'pg-6',
    name: 'Hive Urban Living - HSR Layout',
    location: 'Sector 3, HSR Layout',
    area: 'HSR Layout',
    city: 'Bangalore',
    rent: 13500,
    originalRent: 15000,
    gender: 'Any',
    roomType: ['Single', 'Double Sharing'],
    roomOptions: [
      { type: 'Single', rent: 19500, deposit: 25000, available: true },
      { type: 'Double Sharing', rent: 13500, deposit: 18000, available: true }
    ],
    rating: 4.9,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['Wi-Fi', 'Food', 'AC', 'Parking', 'Laundry', 'CCTV', 'Power Backup', 'Gym', 'RO Water', 'Housekeeping'],
    description: 'Designer co-living residence in HSR Layout. Boasts private balconies, Netflix lounge, community kitchen, gym, barista counter, and weekly acoustic open mics.',
    rules: [
      'No curfew - 24x7 smart lock access',
      'Pet friendly on designated 1st floor rooms',
      'Clean up communal kitchen after cooking',
      'Maintain courtesy in shared work areas'
    ],
    nearbyPlaces: [
      { name: 'HSR BDA Complex', distance: '700 m', type: 'shopping' },
      { name: 'NIFT Bangalore Campus', distance: '1.2 km', type: 'education' },
      { name: 'Silk Board Junction / Yellow Line Metro', distance: '1.8 km', type: 'transit' },
      { name: 'Koramangala 100ft Road', distance: '2.5 km', type: 'shopping' }
    ],
    owner: {
      name: 'Tarun Mathur',
      phone: '+91 99002 99881',
      email: 'hsr.hive@pgfinder.in',
      responseRate: 'Instant (Under 5 mins)'
    },
    featured: true,
    verified: true,
    reviewsList: [
      {
        id: 'rev-7',
        userName: 'Rahul Verma',
        userType: 'Working Professional',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Unbelievable vibe! Meets the highest standards of modern co-living in Bangalore.'
      }
    ]
  },
  {
    id: 'pg-7',
    name: 'Sri Sai Ram Ladies PG',
    location: 'Near Velachery MRTS, Dhandeeswaram',
    area: 'Velachery',
    city: 'Chennai',
    rent: 7500,
    originalRent: 8500,
    gender: 'Female',
    roomType: ['Double Sharing', 'Triple Sharing'],
    roomOptions: [
      { type: 'Double Sharing', rent: 8500, deposit: 10000, available: true },
      { type: 'Triple Sharing', rent: 7500, deposit: 8000, available: true }
    ],
    rating: 4.4,
    reviews: 58,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['Wi-Fi', 'Food', 'AC', 'CCTV', 'Power Backup', 'Laundry', 'RO Water'],
    description: 'Cozy, clean women’s PG located right behind Phoenix Marketcity and Velachery MRTS. Serving North and South Indian home-style food 3 times daily with weekend special meals.',
    rules: [
      'Entry deadline 10:00 PM',
      'Visitors allowed in designated ground floor parlor',
      'Maintain cleanliness in common washrooms',
      'Notice period of 30 days before vacating'
    ],
    nearbyPlaces: [
      { name: 'Phoenix Marketcity & Grand Mall', distance: '450 m', type: 'shopping' },
      { name: 'Velachery MRTS Station', distance: '700 m', type: 'transit' },
      { name: 'Guru Nanak College', distance: '1.4 km', type: 'education' },
      { name: 'Prashanth Super Speciality Hospital', distance: '1.0 km', type: 'health' }
    ],
    owner: {
      name: 'K. Revathi',
      phone: '+91 98410 66778',
      email: 'sairam.velachery@pgfinder.in',
      responseRate: 'Under 25 mins'
    },
    featured: false,
    verified: true,
    reviewsList: [
      {
        id: 'rev-8',
        userName: 'Preeti Sharma',
        userType: 'Working Professional',
        rating: 4.5,
        date: '1 month ago',
        comment: 'Phoenix mall is literally a 5 minute walk. Food is tasty and hygienic.'
      }
    ]
  },
  {
    id: 'pg-8',
    name: 'Cyber Towers Executive Co-Living',
    location: 'Madhapur / Hitec City Metro',
    area: 'Madhapur',
    city: 'Hyderabad',
    rent: 10500,
    originalRent: 12000,
    gender: 'Male',
    roomType: ['Single', 'Double Sharing', 'Triple Sharing'],
    roomOptions: [
      { type: 'Single', rent: 16000, deposit: 20000, available: true },
      { type: 'Double Sharing', rent: 10500, deposit: 14000, available: true },
      { type: 'Triple Sharing', rent: 8500, deposit: 10000, available: true }
    ],
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['Wi-Fi', 'Food', 'AC', 'Parking', 'Laundry', 'CCTV', 'Power Backup', 'RO Water'],
    description: 'Walking distance from Cyber Towers, Durgam Cheruvu cable bridge, and Madhapur Metro. Ideal for software professionals with 24/7 power backup and high-speed Wi-Fi.',
    rules: [
      '24/7 security with fingerprint reader access',
      'No loud music past 11 PM on weekdays',
      'Smoking strictly banned in rooms and hallways'
    ],
    nearbyPlaces: [
      { name: 'Cyber Towers Hyderabad', distance: '500 m', type: 'tech' },
      { name: 'Madhapur Metro Station', distance: '400 m', type: 'transit' },
      { name: 'Inorbit Mall Hitec City', distance: '1.6 km', type: 'shopping' },
      { name: 'Medicover Hospitals', distance: '900 m', type: 'health' }
    ],
    owner: {
      name: 'Suresh Reddy',
      phone: '+91 98490 33445',
      email: 'cybertowers.pg@pgfinder.in',
      responseRate: 'Under 15 mins'
    },
    featured: false,
    verified: true,
    reviewsList: [
      {
        id: 'rev-9',
        userName: 'Sai Teja',
        userType: 'Working Professional',
        rating: 4.8,
        date: '3 weeks ago',
        comment: 'Best commute ever! I walk to Cyber Towers in 6 minutes. Great laundry and food.'
      }
    ]
  },
  {
    id: 'pg-9',
    name: 'Annamalai Student Haven PG',
    location: 'Anna Nagar West Extension',
    area: 'Anna Nagar',
    city: 'Madurai',
    rent: 5200,
    originalRent: 6000,
    gender: 'Male',
    roomType: ['Double Sharing', 'Triple Sharing'],
    roomOptions: [
      { type: 'Double Sharing', rent: 6200, deposit: 7000, available: true },
      { type: 'Triple Sharing', rent: 5200, deposit: 5000, available: true }
    ],
    rating: 4.3,
    reviews: 35,
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['Wi-Fi', 'Food', 'Parking', 'RO Water', 'CCTV', 'Housekeeping'],
    description: 'Peaceful and budget-friendly PG for engineering, medical, and arts students studying in Madurai colleges. Homely atmosphere, study tables, and round-the-clock water supply.',
    rules: [
      'Students must return by 9:30 PM',
      'Quiet study hours between 8 PM and 10 PM',
      'No outsiders allowed inside rooms'
    ],
    nearbyPlaces: [
      { name: 'Madurai Medical College', distance: '2.1 km', type: 'education' },
      { name: 'Madurai Junction Railway Station', distance: '4.5 km', type: 'transit' },
      { name: 'Vaigai River Walkway', distance: '1.2 km', type: 'shopping' }
    ],
    owner: {
      name: 'M. Shanmugam',
      phone: '+91 98421 99001',
      email: 'annamalai.madurai@pgfinder.in',
      responseRate: 'Under 40 mins'
    },
    featured: false,
    verified: false,
    reviewsList: [
      {
        id: 'rev-10',
        userName: 'Karthik Raja',
        userType: 'Student',
        rating: 4.5,
        date: '2 months ago',
        comment: 'Affordable and food is like home. Very quiet place to prepare for exams.'
      }
    ]
  },
  {
    id: 'pg-10',
    name: 'SmartStay Tech Hub Co-Living',
    location: 'Saravanampatti, Near CHIL SEZ IT Park',
    area: 'Saravanampatti',
    city: 'Coimbatore',
    rent: 7800,
    originalRent: 9000,
    gender: 'Any',
    roomType: ['Single', 'Double Sharing'],
    roomOptions: [
      { type: 'Single', rent: 12000, deposit: 15000, available: true },
      { type: 'Double Sharing', rent: 7800, deposit: 10000, available: true }
    ],
    rating: 4.7,
    reviews: 73,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['Wi-Fi', 'Food', 'AC', 'Parking', 'Laundry', 'CCTV', 'Power Backup', 'RO Water', 'Gym'],
    description: 'Contemporary tech-focused co-living directly servicing Cognizant, Bosch, and KGISL campuses in Saravanampatti. High-speed leased internet, daily housekeeping, and recreation zone.',
    rules: [
      'Separate residential wings for men and women',
      'Biometric access 24/7',
      'Designated visitor lounge at reception'
    ],
    nearbyPlaces: [
      { name: 'CHIL SEZ IT Park (Cognizant, Bosch)', distance: '800 m', type: 'tech' },
      { name: 'Kumaraguru College of Tech (KCT)', distance: '1.9 km', type: 'education' },
      { name: 'Saravanampatti Bus Terminus', distance: '900 m', type: 'transit' }
    ],
    owner: {
      name: 'Gowtham Raj',
      phone: '+91 97890 12345',
      email: 'smartstay.cbe@pgfinder.in',
      responseRate: 'Under 10 mins'
    },
    featured: true,
    verified: true,
    reviewsList: [
      {
        id: 'rev-11',
        userName: 'Swathi Mohan',
        userType: 'Working Professional',
        rating: 5,
        date: '1 week ago',
        comment: 'Super convenient for Cognizant employees. Clean rooms and friendly caretaking team.'
      }
    ]
  },
  {
    id: 'pg-11',
    name: 'Whitefield Palms Luxury PG for Men',
    location: 'ITPL Main Road, Whitefield',
    area: 'Whitefield',
    city: 'Bangalore',
    rent: 11500,
    originalRent: 13000,
    gender: 'Male',
    roomType: ['Single', 'Double Sharing', 'Triple Sharing'],
    roomOptions: [
      { type: 'Single', rent: 17500, deposit: 22000, available: true },
      { type: 'Double Sharing', rent: 11500, deposit: 15000, available: true },
      { type: 'Triple Sharing', rent: 8900, deposit: 12000, available: true }
    ],
    rating: 4.8,
    reviews: 105,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['Wi-Fi', 'Food', 'AC', 'Parking', 'Laundry', 'CCTV', 'Power Backup', 'Gym', 'RO Water', 'Housekeeping'],
    description: 'Premier executive residence near ITPL and KTPO in Whitefield. Features air-conditioned suites, imported spring mattresses, gourmet multi-cuisine buffet, and private 4-wheeler parking.',
    rules: [
      '24/7 security & smart card access',
      'No smoking in bedrooms or corridors',
      'Register visitors in the society log'
    ],
    nearbyPlaces: [
      { name: 'ITPL Bangalore (International Tech Park)', distance: '700 m', type: 'tech' },
      { name: 'Pattandur Agrahara Metro Station', distance: '500 m', type: 'transit' },
      { name: 'Inorbit Mall Whitefield', distance: '1.8 km', type: 'shopping' },
      { name: 'Manipal Hospital Whitefield', distance: '2.0 km', type: 'health' }
    ],
    owner: {
      name: 'Vinay Kumar Gowda',
      phone: '+91 99800 77112',
      email: 'palms.whitefield@pgfinder.in',
      responseRate: 'Under 15 mins'
    },
    featured: true,
    verified: true,
    reviewsList: [
      {
        id: 'rev-12',
        userName: 'Akash Banerjee',
        userType: 'Working Professional',
        rating: 5,
        date: '3 weeks ago',
        comment: 'Metro station is just opposite the road. Food and maintenance are top tier.'
      }
    ]
  },
  {
    id: 'pg-12',
    name: 'Kavitha Residency Ladies PG',
    location: 'Opposite Anna University, Guindy',
    area: 'Guindy',
    city: 'Chennai',
    rent: 8200,
    originalRent: 9500,
    gender: 'Female',
    roomType: ['Single', 'Double Sharing', 'Triple Sharing'],
    roomOptions: [
      { type: 'Single', rent: 13000, deposit: 18000, available: true },
      { type: 'Double Sharing', rent: 8200, deposit: 12000, available: true },
      { type: 'Triple Sharing', rent: 6800, deposit: 9000, available: true }
    ],
    rating: 4.6,
    reviews: 64,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['Wi-Fi', 'Food', 'AC', 'CCTV', 'Power Backup', 'Laundry', 'RO Water', 'Housekeeping'],
    description: 'Safe haven for young women studying at Anna University or working in Guindy Industrial Estate and Olympia Tech Park. Nutritious South Indian meals, strict safety guidelines, and 24/7 warden.',
    rules: [
      'Gate closes at 10:00 PM',
      'Prior permission required for late return or night outs',
      'Strictly no male visitors inside hostel building'
    ],
    nearbyPlaces: [
      { name: 'Anna University Main Campus (CEG)', distance: '400 m', type: 'education' },
      { name: 'Olympia Tech Park Guindy', distance: '1.3 km', type: 'tech' },
      { name: 'Guindy Metro & Suburban Station', distance: '900 m', type: 'transit' },
      { name: 'IIT Madras In-gate', distance: '1.8 km', type: 'education' }
    ],
    owner: {
      name: 'Dr. Radhika Srinivasan',
      phone: '+91 94440 98765',
      email: 'kavitha.guindy@pgfinder.in',
      responseRate: 'Under 20 mins'
    },
    featured: false,
    verified: true,
    reviewsList: [
      {
        id: 'rev-13',
        userName: 'Meera Krishnan',
        userType: 'Student',
        rating: 4.8,
        date: '1 month ago',
        comment: 'Walking distance to Anna University CEG. Very peaceful environment for studies.'
      }
    ]
  },
  {
    id: 'pg-13',
    name: 'Serene Co-Living & Suites',
    location: 'Kondapur Near Botanical Garden',
    area: 'Kondapur',
    city: 'Hyderabad',
    rent: 11800,
    originalRent: 13500,
    gender: 'Any',
    roomType: ['Single', 'Double Sharing'],
    roomOptions: [
      { type: 'Single', rent: 17000, deposit: 22000, available: true },
      { type: 'Double Sharing', rent: 11800, deposit: 16000, available: true }
    ],
    rating: 4.8,
    reviews: 91,
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['Wi-Fi', 'Food', 'AC', 'Parking', 'Laundry', 'CCTV', 'Power Backup', 'Gym', 'RO Water'],
    description: 'Lush green surroundings overlooking Kotla Vijayabhaskara Reddy Botanical Garden. Modern interior architecture with customized work pods, high-speed fiber, and healthy breakfast & dinner buffet.',
    rules: [
      'Digital keycard entry 24/7',
      'No smoking in common areas',
      'Quiet hours 11:00 PM to 6:00 AM'
    ],
    nearbyPlaces: [
      { name: 'Hyderabad Botanical Garden', distance: '300 m', type: 'shopping' },
      { name: 'Gachibowli Stadium', distance: '1.7 km', type: 'transit' },
      { name: 'Google Hyderabad Campus', distance: '2.5 km', type: 'tech' },
      { name: 'KIMS Hospital Kondapur', distance: '1.2 km', type: 'health' }
    ],
    owner: {
      name: 'Raghavendra Rao',
      phone: '+91 97000 88990',
      email: 'serene.kondapur@pgfinder.in',
      responseRate: 'Under 15 mins'
    },
    featured: false,
    verified: true,
    reviewsList: [
      {
        id: 'rev-14',
        userName: 'Aditya Sen',
        userType: 'Working Professional',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Fresh air and very quiet compared to main Madhapur traffic. Outstanding maintenance.'
      }
    ]
  },
  {
    id: 'pg-14',
    name: 'Heritage Scholars PG for Women',
    location: 'RS Puram West',
    area: 'RS Puram',
    city: 'Coimbatore',
    rent: 7000,
    originalRent: 8000,
    gender: 'Female',
    roomType: ['Single', 'Double Sharing', 'Triple Sharing'],
    roomOptions: [
      { type: 'Single', rent: 11000, deposit: 14000, available: true },
      { type: 'Double Sharing', rent: 7000, deposit: 10000, available: true },
      { type: 'Triple Sharing', rent: 5800, deposit: 8000, available: true }
    ],
    rating: 4.7,
    reviews: 53,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['Wi-Fi', 'Food', 'AC', 'Parking', 'Laundry', 'CCTV', 'Power Backup', 'RO Water', 'Housekeeping'],
    description: 'Situated in the premium residential heart of RS Puram. Walking distance to DB Road shopping district, bakeries, and transport. Fresh home cooking with traditional Kongu Nadu specialties.',
    rules: [
      'Entry curfew 9:45 PM',
      'Fingerprint identification gate',
      'Visitors strictly permitted in lounge'
    ],
    nearbyPlaces: [
      { name: 'DB Road Commercial District', distance: '300 m', type: 'shopping' },
      { name: 'Coimbatore Railway Junction', distance: '3.2 km', type: 'transit' },
      { name: 'Avinashilingam University', distance: '2.1 km', type: 'education' }
    ],
    owner: {
      name: 'V. Uma Devi',
      phone: '+91 94422 33441',
      email: 'heritage.rspuram@pgfinder.in',
      responseRate: 'Under 20 mins'
    },
    featured: false,
    verified: true,
    reviewsList: [
      {
        id: 'rev-15',
        userName: 'Nandhini S.',
        userType: 'Student',
        rating: 5,
        date: '3 weeks ago',
        comment: 'Safe, beautiful location in RS Puram. Kongu style food is unmatched!'
      }
    ]
  }
];
