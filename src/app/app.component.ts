import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  list = {
          1: {name:"Home", active: true},
          2: {name:"Projects", active: false},
          3: {name:"About Me", active: false},
          4: {name:"Contact", active: false}
        };

  
  currentIndex = 0;
  
  @HostListener('window:scroll', ['$event'])
  ping(input: any) {
    // console.log(input.target.scrollingElement.scrollTop)
    this.changeColor(input.target.scrollingElement.scrollTop)
    return true;
  }

  changeColor(input: number) {
    if (input > 0 && input < 150) {
      this.list[1].active = true;
      this.list[2].active = false;
      this.list[3].active = false;
      this.list[4].active = false;
    } else if (input > 151 && input < 300) {
      this.list[1].active = false;
      this.list[2].active = true;
      this.list[3].active = false;
      this.list[4].active = false;
    } else if (input > 301 && input < 450) {
      this.list[1].active = false;
      this.list[2].active = false;
      this.list[3].active = true;
      this.list[4].active = false;
    } else if (input > 451) {
      this.list[1].active = false;
      this.list[2].active = false;
      this.list[3].active = false;
      this.list[4].active = true;
    }
  }

}
