import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL: string = "http://localhost:5268"
  tokenKey: string = "honeysKitchenToken"

  public isLoggedInSubj = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  register(newUser: User)
  {
    return this.http.post(`${this.baseURL}/register`, newUser);
  }

  login(email: string, password: string)
  {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('email', email);
    queryParams = queryParams.append('password', password);

    return this.http.get(`${this.baseURL}/login`, {params: queryParams, responseType: 'text'})
      .pipe(tap(() => {
        this.isLoggedInSubj.next(true);
      }))
  }

  getCurrentUser(): Observable<User>
  {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }

    return this.http.get<User>(`${this.baseURL}/current`, {headers: reqHeaders});
  }

  
}
