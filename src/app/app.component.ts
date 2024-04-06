import { Component, OnInit } from '@angular/core';
import { AutService } from './services/aut.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'toyota16';
constructor(public autService: AutService){}
  
ngOnInit(): void {
  if(localStorage.getItem('user')){
    this.autService.isLoggedIn = true
   }   
}

}
