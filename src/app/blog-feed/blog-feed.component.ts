import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-feed',
  templateUrl: './blog-feed.component.html',
  styleUrls: ['./blog-feed.component.css']
})
export class BlogFeedComponent implements OnInit {




 
  constructor(public firestore:AngularFirestore){

  }

  ngOnInit(): void {
    // on init puling the data from the server
    this.feedContent()
  }

  blogPost : Observable <any> | undefined;
  // collection '' name of the collection 
  blogPost_collection: AngularFirestoreCollection <'blogs'> | undefined;


feedContent(){
  //getting the collection
this.blogPost_collection = this.firestore.collection('blogs');
// puling the documents off the collection
// for any value change the data will update  
this.blogPost = this.blogPost_collection.valueChanges()
}
//delete
 tittle_dell:any;
deletePost(){
  const title = this.tittle_dell;

this.firestore.collection('blogs').doc(title).delete();
} 
//edit
edit(){
  const title = this.tittle_dell;
  this.firestore.collection('blogs').doc(title).update(title);
}
}
