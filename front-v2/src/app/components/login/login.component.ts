import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private loginService: AuthService) {
    if (this.loginService.currentUserValue) {
      this.router.navigate(['qdate/search']);
    }

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f(): any {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    console.log('Start');
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.f.username.value, this.f.password.value);
    this.loginService.login(this.f.username.value, this.f.password.value).pipe().subscribe(
      () => {
        this.router.navigate(['qdate/search']);
      },
      (error: string) => {
        console.log(error);
        this.error = error;
        this.loading = false;
      });

  }

}
