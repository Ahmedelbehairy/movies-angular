import { Component } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  error:string='';

  registerForm:FormGroup = new FormGroup ({
    first_name: new FormControl(null ,[Validators.minLength(4), Validators.maxLength(15), Validators.required]),
    last_name: new FormControl(null, [Validators.minLength(4), Validators.maxLength(15), Validators.required]),
    age: new FormControl(null, [Validators.min(20), Validators.max(80), Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required , Validators.pattern(`^[A-Z]{1}([a-z]|[0-9]){4,15}$`)]),
  })
  constructor(private _AuthService: AuthService, private _Router: Router) { }



  submitRegisterForm(registerForm:FormGroup)
  {
    if (registerForm.valid){
      this._AuthService.register(registerForm.value).subscribe((response)=>{
        if(response.message == 'success'){
          this._Router.navigate(['login'])
        }else {
          this.error = response.errors.email.message
        }
      })
    }
  }

}
