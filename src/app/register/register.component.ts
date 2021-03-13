import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username = '';
  password = '';
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.httpClient.get('login/api/auth/').subscribe(s => {
      this.router.navigateByUrl('/controlPanel');
    });
  }
  registerUser(): void {
    const newUser: User = {username: this.username, password: this.password};
    this.httpClient.post<User>('/login/api/user/register', newUser).subscribe( s => {
      this.httpClient.post<User>('login/api/auth/login', newUser, {withCredentials: true}).subscribe(sc => {
        this.router.navigateByUrl('/controlPanel');
      });
    }, e => {
      console.log(e);
    });
  }
}
