import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getDoc } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/types/car';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  implements OnInit{
  carP: any;
  
  constructor(  public firestore : AngularFirestore,
    private activeRoute: ActivatedRoute,
    private router: Router){}

    ngOnInit(): void {
 
      this.activeRoute.params.subscribe((data) => {
        const id = data['carId'];
         const car = this.firestore.collection('car').doc(id).ref
            getDoc(car).then((car)=>{
              this.carP = car.data()
              
            })
         });
          
    }

  addCar(form:NgForm) {
    if (form.invalid) {
      return;
    }
    
//getting data  
    const { about,color,register,speed,weight,imageUrl,model,price,brand,} = form.value;
    const car :Car = {
      about, color, register, speed, weight, imageUrl, model, price,
      brand,
      _id: this.carP._id,
      userId:localStorage["userId"]
      
    }
    //updating data to the record 
      this.firestore.collection('car').doc(this.carP._id).update({about,color,register,speed,weight,imageUrl,model,price,brand});
  
   
      this.router.navigate([`gallery/${this.carP._id}`]);
    }


 
}