import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { RegisterUser } from '../interfaces/register.interface';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl:string=environment.localURL;
  private http=inject(HttpClient);
  constructor() { }


  register(user:RegisterUser){
    console.log(user);
    const url=`${this.baseUrl}/user/register`;
    const body=user;
    let response=this.http.post(url,body).subscribe();
    console.log(response);
  }
}
