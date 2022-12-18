import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  isScrolled = false;
  isSidenav = false;

  open(){
    this.isSidenav = true;
  }
  close(){
    this.isSidenav = false;
  }

  @HostListener ('window:scroll',['$event'])
  scroll(){
    if(window.pageYOffset>100){
      this.isScrolled=true;
      
    }
    else{
      this.isScrolled=false;
    }
    console.log(this.isScrolled);
    
  }
}
