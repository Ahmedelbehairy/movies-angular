import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { UndefinedComponent } from './undefined/undefined.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NetworkComponent } from './network/network.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BgComponent } from './bg/bg.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UndefinedComponent,
    HomeComponent,
    AboutComponent,
    NetworkComponent,
    RegisterComponent,
    LoginComponent,
    BgComponent,
    MoviesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  exports:[
    BgComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
