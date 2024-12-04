import { GridLayout } from '@nativescript/core';
import { MapView, Marker, Position } from '@nativescript/google-maps';

export class MapViewComponent extends GridLayout {
    private mapView: MapView;

    constructor() {
        super();
        this.initializeMap();
    }

    private initializeMap() {
        this.mapView = new MapView();
        this.mapView.zoom = 15;
        this.addChild(this.mapView);
    }

    public updateLocation(position: Position) {
        if (this.mapView) {
            this.mapView.latitude = position.latitude;
            this.mapView.longitude = position.longitude;
        }
    }

    public addMarker(position: Position, title: string) {
        const marker = new Marker();
        marker.position = position;
        marker.title = title;
        this.mapView.addMarker(marker);
    }
}