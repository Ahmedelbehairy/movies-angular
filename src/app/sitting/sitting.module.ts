import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SittingRoutingModule } from './sitting-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { RolesComponent } from './roles/roles.component';


@NgModule({
  declarations: [
    ProfileComponent,
    PasswordComponent,
    RolesComponent
  ],
  imports: [
    CommonModule,
    SittingRoutingModule
  ]
})
export class SittingModule { }
