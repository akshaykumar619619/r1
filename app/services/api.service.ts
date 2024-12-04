import { Observable } from '@nativescript/core';

export class ApiService extends Observable {
    private static instance: ApiService;
    private baseUrl: string = 'https://api.example.com/v1';

    static getInstance(): ApiService {
        if (!ApiService.instance) {
            ApiService.instance = new ApiService();
        }
        return ApiService.instance;
    }

    async get(endpoint: string, params?: Record<string, any>): Promise<any> {
        try {
            const queryString = params ? `?${new URLSearchParams(params)}` : '';
            const response = await fetch(`${this.baseUrl}${endpoint}${queryString}`);
            return await response.json();
        } catch (error) {
            console.error('API GET request failed:', error);
            throw error;
        }
    }

    async post(endpoint: string, data: any): Promise<any> {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.error('API POST request failed:', error);
            throw error;
        }
    }
}