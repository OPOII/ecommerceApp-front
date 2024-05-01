import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { RegisterUser } from '../interfaces/register.interface';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { LoginRequest } from '../interfaces/login.request';
import { User } from '../interfaces/user.interface';
import { AuthStatus } from '../interfaces/auth-status.enum';
import { LoginResponse } from '../interfaces/login-response';
import { CheckTokenResponse } from '../interfaces/check-token.response';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currenUser=signal<User|null>(null);
  private _authStatus=signal<AuthStatus>(AuthStatus.checking);
  private readonly baseUrl:string=environment.localURL;
  private http=inject(HttpClient);

  public currentUser=computed(()=>this._currenUser());
  public authStatus=computed(()=>this._authStatus());
  constructor() {
    // this.checkAuthStatus().subscribe();
  }


  register(user:RegisterUser){
    const url=`${this.baseUrl}/auth/register`;
    const body=user;
    let response=this.http.post(url,body).subscribe();
  }

  private setAuthentication(user:User,token:string):boolean{
    this._currenUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    localStorage.setItem('token',token);
    console.log(token);
    console.log(this.currentUser()?.firstName);
    console.log(this.currentUser()?.email);
    console.log(this.currentUser()?.middleName);
    console.log(this.currentUser()?.role);
    return true;
  }

  login(user:LoginRequest):Observable<boolean>{
    const url=`${this.baseUrl}/auth/login`;
    const body=user;
    return this.http.post<LoginResponse>(url,body)
    .pipe(
      map(({user,token})=>this.setAuthentication(user,token)),
      catchError(err=>throwError(()=>err.error.message))
    )
  }
  checkAuthStatus():Observable<boolean>{
    const url=`${this.baseUrl}/auth/check-token`;
    const token=localStorage.getItem('token');
    if(!token){
      this.logOut();
      return of(false)
    };

    const headers=new HttpHeaders()
    .set('Authorization',`Bearer ${token}`);
    return this.http.get<CheckTokenResponse>(url,{headers})
    .pipe(
      map(({user,token})=>this.setAuthentication(user,token)),
      catchError(()=>{
        this._authStatus.set(AuthStatus.notAuthenticated);
        return of(false);
      })
    );

  }
  logOut(){
    localStorage.removeItem('token');
    this._currenUser.set(null);
    this._authStatus.set(AuthStatus.notAuthenticated);
  }
}
