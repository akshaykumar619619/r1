import { Observable } from '@nativescript/core';
import { getCurrentLocation, enableLocationRequest } from '@nativescript/geolocation';
import { Location } from '../models/ride.model';

export class LocationService extends Observable {
  private static instance: LocationService;

  static getInstance(): LocationService {
    if (!LocationService.instance) {
      LocationService.instance = new LocationService();
    }
    return LocationService.instance;
  }

  async getCurrentLocation(): Promise<Location> {
    await enableLocationRequest();
    const location = await getCurrentLocation({
      desiredAccuracy: 3,
      maximumAge: 5000,
      timeout: 10000
    });
    
    return {
      latitude: location.latitude,
      longitude: location.longitude
    };
  }

  async watchLocation(callback: (location: Location) => void): Promise<number> {
    // Implement location watching
    return 0;
  }
}