export class ErrorHandler {
    static handleError(error: any, context: string): void {
        console.error(`Error in ${context}:`, error);
        
        // Log to analytics service
        this.logToAnalytics(error, context);
        
        // Show user-friendly message
        this.showUserMessage(error);
    }

    private static logToAnalytics(error: any, context: string): void {
        // Implement analytics logging
        console.log('Logging to analytics:', { error, context });
    }

    private static showUserMessage(error: any): void {
        let message = 'An unexpected error occurred. Please try again.';
        
        if (error.message) {
            message = error.message;
        }
        
        // Show alert or notification to user
        alert(message);
    }
}