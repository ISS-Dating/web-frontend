import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = '/login';
  registerUrl = '/register';
  updateUrl = '/update';

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private httpOptionsPost: any;
  public isEdit = false;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

  }

  login(username: string, password: string): any {

    return this.http.post<any>(this.loginUrl, {username, password})
      .pipe(map(user => {
        // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        console.log(user);
        return user;
      })).subscribe((response: Response) => {
        console.log(response);
      });
  }

  register(username: string, password: string, email: string): any {
    return this.http.post<any>(environment.authUrl + this.registerUrl, {username, password, email}, {headers: this.httpOptionsPost})
      .pipe(map(user => {
        // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        console.log(user);
        return user;
      }));
  }

  update(updatedUser: User): any {
    console.log(updatedUser);
    const cookie = this.getCookie('token');
    const authCookie = 'token=' + cookie;
    // const header = new HttpHeaders({
    //   withCredentials: true,
    //   Cookie: authCookie
    // });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Cookie: authCookie
      }),

      withCredentials: true
  };

    console.log(cookie);
    return this.http.post<any>(this.updateUrl, {updatedUser}, httpOptions)
      .pipe(map(user => {
        // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        console.log(user);
        return user;
      }));
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }


  getCookie(name): any {
    let nameEQ = name + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  }
}
