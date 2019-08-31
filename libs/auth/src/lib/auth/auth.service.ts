import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Credentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  signin(credentials: Credentials) {
    return this.httpClient.post('', credentials);
  }
}
