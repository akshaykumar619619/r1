import { Observable } from '@nativescript/core';
import { AuthService } from '../../services/auth.service';
import { ErrorHandler } from '../../utils/error-handler';
import { Validators } from '../../utils/validators';

export class LoginViewModel extends Observable {
    private authService: AuthService;
    private _email: string = '';
    private _password: string = '';

    constructor() {
        super();
        this.authService = AuthService.getInstance();
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        if (this._email !== value) {
            this._email = value;
            this.notifyPropertyChange('email', value);
        }
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        if (this._password !== value) {
            this._password = value;
            this.notifyPropertyChange('password', value);
        }
    }

    async onLogin() {
        try {
            if (!this.validateInput()) return;

            await this.authService.login(this.email, this.password);
            // Navigate to home page
        } catch (error) {
            ErrorHandler.handleError(error, 'Login');
        }
    }

    onRegister() {
        // Navigate to register page
    }

    private validateInput(): boolean {
        if (!Validators.isValidEmail(this.email)) {
            ErrorHandler.handleError(new Error('Invalid email'), 'Login');
            return false;
        }

        if (!Validators.isValidPassword(this.password)) {
            ErrorHandler.handleError(new Error('Password must be at least 8 characters'), 'Login');
            return false;
        }

        return true;
    }
}