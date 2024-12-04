import { Location } from '../models/ride.model';
import { BASE_FARE, PER_KM_RATE, PER_MINUTE_RATE } from './constants';

export function calculateDistance(point1: Location, point2: Location): number {
    const R = 6371; // Earth's radius in km
    const dLat = toRad(point2.latitude - point1.latitude);
    const dLon = toRad(point2.longitude - point1.longitude);
    const lat1 = toRad(point1.latitude);
    const lat2 = toRad(point2.latitude);

    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function toRad(value: number): number {
    return value * Math.PI / 180;
}

export function calculateFare(distance: number, duration: number): number {
    return BASE_FARE + (distance * PER_KM_RATE) + (duration * PER_MINUTE_RATE);
}

export function formatCurrency(amount: number): string {
    return `₹${amount.toFixed(2)}`;
}