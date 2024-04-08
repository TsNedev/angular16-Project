import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AutService } from 'src/app/services/aut.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

emailExsists = false
invalidEmail =false
error! :string
    
  constructor( public AutService:AutService, 
    public routing : AppRoutingModule,
    private firestore : AngularFirestore,
    private router: Router,
    public FirebaseAut:AngularFireAuth){}
  
    ngOnInit(): void {
    }

    
async onRegister(form:NgForm) {
  if (form.invalid) {
    return;
  }
   const{email,password,username,telepone,image} = form.value;
   
   
   /* const user : User{
  
   } */
   try {
  await this.AutService.register(email,password);
  
  
} catch (e) {
  const error =JSON.stringify(e);
  const convert = JSON.parse(error)
   this.error = convert.code
   
   if("auth/email-already-in-use"==this.error){
    this.emailExsists = true
   }
   if("auth/invalid-email"==this.error){
    this.invalidEmail = true
   }
 }
  const data : User = {
    cars: [],
    botCars: [],
    _id: localStorage["userId"],
    tel: telepone,
    email: email,
    created_at: '',
    updatedAt: '',
    username: username,
    image: image
  }
 
   this.firestore.collection('users').doc(localStorage["userId"]).set(data);
 
   
   this.router.navigate(['/home'])
}
}


 
 