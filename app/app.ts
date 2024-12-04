import { Application } from '@nativescript/core';
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-auth';
import '@nativescript/firebase-database';
import { enableLocationServices } from '@nativescript/geolocation';

// Initialize Firebase with demo config (replace with your own in production)
firebase().initializeApp({
    apiKey: "demo-key",
    authDomain: "demo-app.firebaseapp.com",
    projectId: "demo-app",
    storageBucket: "demo-app.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
}).then(() => {
    console.log('Firebase initialized successfully');
}).catch(error => {
    console.error('Firebase initialization error:', error);
});

// Enable location services
enableLocationServices().then(() => {
    console.log('Location services enabled');
}).catch(error => {
    console.error('Error enabling location services:', error);
});

Application.run({ moduleName: 'app-root' });