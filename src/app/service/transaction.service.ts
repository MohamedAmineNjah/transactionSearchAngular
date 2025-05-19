import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Base URL for your API
const API_URL = 'http://localhost:8080/api/transactions/';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransactionsById(id: string): Observable<any> {
    return this.http.get(`${API_URL}${id}`);
  }
}