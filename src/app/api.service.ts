import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore/public_api';
import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public firestore : AngularFirestore) { }

 getAllCarOffers(){}

 getSingleCar(){}

 createCarOffer(car: any){
  return  this.firestore.collection('car').doc(car._id).set(car);
 }

 editCarOffer(){}

 deleteCar(){} 


}

