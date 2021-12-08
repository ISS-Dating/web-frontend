import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public currentUser: User;
  isEdit = false;


  constructor(
    private authService: AuthService
  ) {
    this.currentUser = authService.currentUserValue;
  }

  ngOnInit(): void {
  }


  setEditState(): void {
    this.authService.isEdit = true;
    this.isEdit = this.authService.isEdit;
  }
}
