import { Observable } from '@nativescript/core';
import { LocationService } from '../../services/location.service';
import { RideService } from '../../services/ride.service';
import { Location } from '../../models/ride.model';

export class HomeViewModel extends Observable {
  private locationService: LocationService;
  private rideService: RideService;
  private currentLocation: Location | null = null;
  private destination: Location | null = null;

  constructor() {
    super();
    this.locationService = LocationService.getInstance();
    this.rideService = RideService.getInstance();
    this.initializeLocation();
  }

  async initializeLocation() {
    try {
      this.currentLocation = await this.locationService.getCurrentLocation();
      // Update map
    } catch (error) {
      console.error('Failed to get location:', error);
    }
  }

  async onBookRide() {
    if (!this.currentLocation || !this.destination) {
      // Show error
      return;
    }

    try {
      const ride = await this.rideService.requestRide(
        this.currentLocation,
        this.destination
      );
      // Navigate to ride status page
    } catch (error) {
      console.error('Failed to book ride:', error);
    }
  }

  onDestinationTap() {
    // Navigate to search page
  }

  onProfile() {
    // Navigate to profile page
  }
}