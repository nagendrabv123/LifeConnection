import { ErrorHandler, Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobleErrorHandlerService implements ErrorHandler {

  constructor(private injector: Injector) {}

  handleError(error: any): void {
    // Log to console
    console.error('Global Error Caught:', error);

    // Optionally, show a toast, send error to server, etc.
    // Example: this.toastService.show('Something went wrong');

    // Rethrow the error if needed
    // throw error;
  }
}
