import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Project';
  constructor(private router:Router){

  }
    HomeComponent(){
      this.router.navigateByUrl('/home')
    }
    aboutcomponent(){
      this.router.navigateByUrl('/about')
    }
    usercomponent(){
      this.router.navigateByUrl('/user')
    }
  }

