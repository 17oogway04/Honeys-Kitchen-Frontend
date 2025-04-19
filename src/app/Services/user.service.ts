import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL: string = "http://localhost:5268/api/user"
  tokenKey: string = "honeysKitchenToken"

  public isLoggedInSubj = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  uploadProfilePicture(file: File): Observable<any>{
    const formData = new FormData();
    formData.append('file', file);
    let reqHeaders = 
    {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.post(`${this.baseURL}/upload-profile-picture`, formData, {headers: reqHeaders});
  }  
  getLorenByUsername(email: string): Observable<User>{

    return this.http.get<User>(`${this.baseURL}/by-username/${email}`)
  }
  logout(){
    this.isLoggedInSubj.next(false);
    localStorage.removeItem('honeysKitchenToken')
    if(localStorage.getItem('honeysKitchenToken') === null){
      console.log('Successfully logged out')
    }
  }
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
      .pipe(tap((response: any) => {
        localStorage.setItem("honeysKitchenToken", response);
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
