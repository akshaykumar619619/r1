import { Observable } from '@nativescript/core';
import { LocationService } from '../../services/location.service';
import { Location } from '../../models/ride.model';

export class SearchViewModel extends Observable {
    private locationService: LocationService;
    private _searchQuery: string = '';
    private _searchResults: any[] = [];

    constructor() {
        super();
        this.locationService = LocationService.getInstance();
    }

    get searchQuery(): string {
        return this._searchQuery;
    }

    set searchQuery(value: string) {
        if (this._searchQuery !== value) {
            this._searchQuery = value;
            this.notifyPropertyChange('searchQuery', value);
        }
    }

    get searchResults(): any[] {
        return this._searchResults;
    }

    set searchResults(value: any[]) {
        if (this._searchResults !== value) {
            this._searchResults = value;
            this.notifyPropertyChange('searchResults', value);
        }
    }

    async onSearch() {
        if (!this.searchQuery.trim()) return;
        
        try {
            // Implement location search logic
            this.searchResults = [];
        } catch (error) {
            console.error('Search failed:', error);
        }
    }

    onLocationSelected(args: any) {
        const selectedLocation = this.searchResults[args.index];
        // Implement location selection logic
    }
}