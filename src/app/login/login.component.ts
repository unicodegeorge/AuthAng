import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  loginIncorrect = false;

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.httpClient.get('login/api/auth/').subscribe(s => {
      this.router.navigateByUrl('/controlPanel');
    });
  }

  logIn(): void {
    const user: User = {username: this.username, password: this.password};
    this.httpClient.post<User>('login/api/auth/login', user, {withCredentials: true, responseType: 'json'}).subscribe(s => {
      this.router.navigateByUrl('/controlPanel');
    }, e => {
      console.log(e);
      this.loginIncorrect = true;
    });
  }
}
