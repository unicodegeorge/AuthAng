import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../user';

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.scss']
})
export class ControlpanelComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.httpClient.get<User>('/login/api/auth/').subscribe(s => {
    }, c => {
      this.router.navigateByUrl('/login');
    });
  }

  logOut(): void {
    this.httpClient.post('/login/api/auth/logout', '').subscribe(s => {
      this.router.navigateByUrl('/login');
    });
  }

}
