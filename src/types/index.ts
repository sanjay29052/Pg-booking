export type GenderPreference = 'Male' | 'Female' | 'Any';

export type RoomType = 'Single' | 'Double Sharing' | 'Triple Sharing';

export type UserType = 'Student' | 'Working Professional';

export interface RoomOption {
  type: RoomType;
  rent: number;
  deposit: number;
  available: boolean;
}

export interface Review {
  id: string;
  userName: string;
  userType: UserType;
  rating: number;
  date: string;
  comment: string;
}

export interface PGListing {
  id: string;
  name: string;
  location: string;
  area: string;
  city: 'Chennai' | 'Bangalore' | 'Coimbatore' | 'Madurai' | 'Hyderabad';
  rent: number; // starting monthly rent in INR
  originalRent?: number;
  gender: GenderPreference;
  roomType: RoomType[];
  roomOptions?: RoomOption[];
  rating: number;
  reviews: number;
  reviewsList?: Review[];
  image: string;
  gallery: string[];
  facilities: string[];
  description: string;
  rules: string[];
  nearbyPlaces: {
    name: string;
    distance: string;
    type: 'transit' | 'education' | 'tech' | 'health' | 'shopping';
  }[];
  owner: {
    name: string;
    phone: string;
    email: string;
    responseRate: string;
  };
  featured?: boolean;
  verified?: boolean;
}

export interface FilterState {
  searchTerm: string;
  city: string;
  minRent: number;
  maxRent: number;
  gender: GenderPreference;
  roomTypes: RoomType[];
  facilities: string[];
  sortBy: 'rent-asc' | 'rent-desc' | 'rating-desc' | 'popular';
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  userType: UserType;
}

export interface BookingSubmission {
  id: string;
  pgId: string;
  pgName: string;
  fullName: string;
  email: string;
  phone: string;
  visitDate: string;
  visitTime: string;
  roomType: RoomType;
  notes?: string;
  timestamp: string;
}
