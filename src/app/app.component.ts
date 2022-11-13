import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  
  car: string = "";
  miles: string = "";
  miataMPG: number = 25;
  jeepMPG: number = 18.5;

  onSubmit() {
    console.log(this.miles);
    console.log(this.car)
  }

  calculateCost(miles: number, mpg: number) {

  }

}
