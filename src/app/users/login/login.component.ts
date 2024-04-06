import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { AutService } from 'src/app/services/aut.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor( public AutService:AutService, 
    public routing : AppRoutingModule,
    
    private router: Router){}
  
    ngOnInit(): void {
      
    }
 async onLogin(form:NgForm) {
  if (form.invalid) {
    return;
  }
  const{email,password}=form.value;
   await this.AutService.login(email,password)
    this.router.navigate(['/home'])
} 
}
