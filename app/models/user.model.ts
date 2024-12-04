export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  profileImage?: string;
  rating?: number;
  rides?: number;
}

export interface Driver extends User {
  vehicleDetails: VehicleDetails;
  isAvailable: boolean;
  currentLocation: Location;
}

export interface VehicleDetails {
  model: string;
  number: string;
  type: 'car' | 'bike';
  color: string;
}