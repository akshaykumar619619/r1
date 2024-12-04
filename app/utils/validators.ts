export class Validators {
    static isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static isValidPhone(phone: string): boolean {
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        return phoneRegex.test(phone);
    }

    static isValidPassword(password: string): boolean {
        return password.length >= 8;
    }

    static validateLocation(latitude: number, longitude: number): boolean {
        return (
            latitude >= -90 && 
            latitude <= 90 && 
            longitude >= -180 && 
            longitude <= 180
        );
    }
}