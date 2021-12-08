import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ProfileComponent} from '../profile/profile.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {
  @ViewChild('modal') public modal: ElementRef;
  updateForm: FormGroup;
  error = '';

  constructor(private authService: AuthService,
              public profileComponent: ProfileComponent,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      age: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  get f(): any {
    return this.updateForm.controls;
  }

  closeModal(): void {
    this.profileComponent.isEdit = false;

  }

  updateFormRequest(): void {

      const currentUserValue = this.authService.currentUserValue;
      currentUserValue.name = this.f.name.value;
      currentUserValue.surname = this.f.surname.value;
      currentUserValue.email = this.f.email.value;
      currentUserValue.country = this.f.country.value;
      currentUserValue.city = this.f.city.value;
      currentUserValue.age = this.f.age.value;
      currentUserValue.description = this.f.description.value;

      this.authService.update(currentUserValue).pipe().subscribe(
        () => {
          this.router.navigate(['qdate/search']);
        },
        (error: string) => {
          console.log(error);
          this.error = error;
        });
  }

}
