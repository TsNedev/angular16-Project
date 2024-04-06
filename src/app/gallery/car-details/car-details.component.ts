import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { getDoc, } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AutService } from 'src/app/services/aut.service';
import { __values } from 'tslib';



@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
carP: any;
id!: string;
userId! : string; 

  constructor(public firestore:AngularFirestore,
    private activeRoute: ActivatedRoute,
    public firbaseAut:AngularFireAuth,
  public autService:AutService,){
     
  }
  

 
ngOnInit(): void {

 this.userId = localStorage["userId"]
  //getting single post details page  
  this.activeRoute.params.subscribe((data) => {
    const id = data['carId'];
    this.id = id;
     const car = this.firestore.collection('car').doc(id).ref
        getDoc(car).then((car)=>{
          this.carP = car.data();
        })
     });
       
  
}
deleteRecord(){
  this.id
  this.firestore.collection('car').doc(this.id).delete();
}
}
    
   


