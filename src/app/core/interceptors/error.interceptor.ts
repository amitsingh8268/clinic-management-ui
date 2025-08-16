import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = 'An unknown error occurred';

        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMsg = `Client Error: ${error.error.message}`;
        } else {
          // Server-side error
          switch (error.status) {
            case 400:
              errorMsg = error.error?.message || 'Bad Request';
              break;
            case 401:
              errorMsg = 'Unauthorized - Please login again';
              break;
            case 403:
              errorMsg = 'Forbidden - You do not have access';
              break;
            case 404:
              errorMsg = 'Resource not found';
              break;
            case 500:
              errorMsg = 'Internal server error';
              break;
          }
        }

        // ✅ Show error via Angular Material snackbar
        this.snackBar.open(errorMsg, 'Close', {
          duration: 5000,
          panelClass: ['error-snackbar']
        });

        return throwError(() => new Error(errorMsg));
      })
    );
  }
}
