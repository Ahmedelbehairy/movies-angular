import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ParticlesModule } from 'angular-particle';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(`^[A-Z]{1}([a-z]|[0-9]){4,15}$`)]),
  })
  submitLoginForm(loginForm: FormGroup) {
    console.log(loginForm)
  }
  
}
