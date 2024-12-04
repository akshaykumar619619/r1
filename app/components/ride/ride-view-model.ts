import { Observable } from '@nativescript/core';
import { RideService } from '../../services/ride.service';
import { LocationService } from '../../services/location.service';
import { Ride, Location } from '../../models/ride.model';
import { Driver } from '../../models/user.model';

export class RideViewModel extends Observable {
    private rideService: RideService;
    private locationService: LocationService;
    private _currentRide: Ride | null = null;
    private _driverInfo: Driver | null = null;
    private _statusMessage: string = 'Finding your ride...';

    constructor() {
        super();
        this.rideService = RideService.getInstance();
        this.locationService = LocationService.getInstance();
        this.startLocationUpdates();
    }

    get currentRide(): Ride | null {
        return this._currentRide;
    }

    get driverInfo(): Driver | null {
        return this._driverInfo;
    }

    get statusMessage(): string {
        return this._statusMessage;
    }

    private async startLocationUpdates() {
        try {
            await this.locationService.watchLocation((location: Location) => {
                // Update map with new location
                this.notifyPropertyChange('currentLocation', location);
            });
        } catch (error) {
            console.error('Failed to start location updates:', error);
        }
    }

    async onCancelRide() {
        if (!this._currentRide) return;

        try {
            await this.rideService.cancelRide(this._currentRide.id);
            // Navigate back to home
        } catch (error) {
            console.error('Failed to cancel ride:', error);
        }
    }
}