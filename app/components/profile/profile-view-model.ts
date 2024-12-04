import { Observable } from '@nativescript/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

export class ProfileViewModel extends Observable {
    private authService: AuthService;
    private _user: User;

    constructor() {
        super();
        this.authService = AuthService.getInstance();
        this._user = this.authService.getCurrentUser() || {} as User;
    }

    get user(): User {
        return this._user;
    }

    set user(value: User) {
        if (this._user !== value) {
            this._user = value;
            this.notifyPropertyChange('user', value);
        }
    }

    async onSave() {
        try {
            // Implement save profile logic
            console.log('Profile saved');
        } catch (error) {
            console.error('Failed to save profile:', error);
        }
    }

    async onLogout() {
        try {
            await this.authService.logout();
            // Navigate to login page
        } catch (error) {
            console.error('Failed to logout:', error);
        }
    }
}