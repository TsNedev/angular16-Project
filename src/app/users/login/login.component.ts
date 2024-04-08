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
  error = false
  invalid = false
  errorMassage:any

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
  try {
   await this.AutService.login(email,password)
  } catch (e) {
  const error =JSON.stringify(e);
  const convert = JSON.parse(error)
  this.errorMassage = convert.code
  if("auth/invalid-credential"==this.errorMassage){
    this.error = true
   }else{
    this.error = false
   }
   if("auth/invalid-email"==this.errorMassage){
    this.invalid = true
   } else{
    this.invalid = false
   }
  
   return 
}
this.router.navigate(['/home'])
}
}