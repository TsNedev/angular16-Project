import { Component,OnInit, Renderer2 } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Car } from 'src/app/types/car';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from 'src/app/home/home.component';
import { Router } from '@angular/router';
import { AutService } from 'src/app/services/aut.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent  implements OnInit{
  userId!:any;


constructor(  private firestore : AngularFirestore,
  public autService:AutService,
  public routing : AppRoutingModule,
  public FirebaseAut:AngularFireAuth,
  private router: Router){}

 ngOnInit(): void {
 const id = this.autService.userId().then(
   this.userId = this.autService.id
   
   
 )
 
 
 
}


  addCar(form:NgForm) {
    if (form.invalid) {
      return;
    }
//getting data and making post request 
    const { about,color,register,speed,weight,imageUrl,model,price,brand} = form.value;
    const car :Car = {
      about, color, register, speed, weight, imageUrl, model, price,
      brand,
      _id: this.firestore.createId(),
      userId: localStorage["userId"]
    }
    
    this.firestore.collection('car').doc(car._id).set(car);
    this.router.navigate(['/gallery']);
    
    
  }
}
