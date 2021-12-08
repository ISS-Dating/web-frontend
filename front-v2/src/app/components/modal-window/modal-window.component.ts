import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ProfileComponent} from '../profile/profile.component';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {
  @ViewChild('modal') public modal: ElementRef;

  constructor(private authService: AuthService,
              public profileComponent: ProfileComponent) {
  }

  ngOnInit(): void {

  }


  closeModal(): void {
    this.profileComponent.isEdit = false;
    // this.modal.nativeElement.style.display = 'none';
  }

}
