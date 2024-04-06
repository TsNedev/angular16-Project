import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{

  constructor(public firestore:AngularFirestore,
    ){

  }

  ngOnInit(): void {
    // on init puling the data from the server
    this.carsPosts()

  }

  carPost : Observable <any> | undefined;
  // collection '' name of the collection 
  carPost_collection: AngularFirestoreCollection <'car'> | undefined;


carsPosts(){
  //getting the collection
this.carPost_collection = this.firestore.collection('car');
// puling the documents off the collection
// for any value change the data will update  
this.carPost = this.carPost_collection.valueChanges()
}

}
