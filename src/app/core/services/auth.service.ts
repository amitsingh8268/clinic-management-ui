import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
   private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, credentials)
      .pipe(map(response => {
        if (response.user && response.accessToken) {
          localStorage.setItem('currentUser', JSON.stringify(response.user));
          localStorage.setItem('token', response.accessToken);
           localStorage.setItem('refreshToken', response.refreshToken);
          this.currentUserSubject.next(response.user);
        }
        return response;
      }));
  }

  logout(): void {
      // 🔹 Clear client state immediately
      localStorage.removeItem('currentUser');
      localStorage.removeItem('token');
      this.currentUserSubject.next(null);
      var refreshToken = localStorage.getItem('refreshToken');

      // 🔹 Call API (fire-and-forget, no need to wait)
      this.http.post(`${this.baseUrl}/auth/logout`, { tokenHash: refreshToken }).subscribe({
        next: () => localStorage.removeItem('refreshToken'),
        error: (err) => console.error("Logout API failed", err)
      });
  }

  get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return !!this.currentUserValue;
  }
}