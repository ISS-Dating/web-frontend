import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public currentUser: User;

  constructor(
    private authService: LoginService
  ) {
    this.currentUser = authService.currentUserValue;
  }

  ngOnInit(): void {
  }

}
