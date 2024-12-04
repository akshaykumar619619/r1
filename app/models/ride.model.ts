export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
}

export interface Ride {
  id: string;
  userId: string;
  driverId?: string;
  pickup: Location;
  destination: Location;
  status: 'pending' | 'accepted' | 'started' | 'completed' | 'cancelled';
  fare: number;
  distance: number;
  duration: number;
  createdAt: Date;
  completedAt?: Date;
}