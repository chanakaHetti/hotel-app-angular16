import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: Reservation[] = [];
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  // Get all reservations
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + '/reservations');
  }

  // Get single reservation
  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(this.apiUrl + '/reservation/' + id);
  }

  // Create the reservation
  addReservation(reservation: Reservation): Observable<void> {
    return this.http.post<void>(this.apiUrl + '/reservation', reservation);
  }

  // Delete the reservation
  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/reservation/' + id);
  }

  // Update the reservation
  updateReservation(
    id: string,
    updateReservation: Reservation
  ): Observable<void> {
    return this.http.put<void>(
      this.apiUrl + '/reservation/' + id,
      updateReservation
    );
  }
}
