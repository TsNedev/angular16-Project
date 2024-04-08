import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent  implements OnInit{
  constructor(public firestore:AngularFirestore,
  ){

}

ngOnInit(): void {
  // on init puling the data from the server
  this.modelsCollection()

}

models : Observable <any> | undefined;
// collection '' name of the collection 
models_collection: AngularFirestoreCollection <'models'> | undefined;


modelsCollection(){
//getting the collection
this.models_collection = this.firestore.collection('models');
// puling the documents off the collection
// for any value change the data will update  
this.models = this.models_collection.valueChanges()
}

}


