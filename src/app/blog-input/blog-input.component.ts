import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

export interface blog{tittle:any,body:any}

@Component({
  selector: 'app-blog-input',
  templateUrl: './blog-input.component.html',
  styleUrls: ['./blog-input.component.css']
})
export class BlogInputComponent implements OnInit {

  constructor( private firestore : AngularFirestore){}
 
  ngOnInit(): void {
    
  }

  tittle: any;
  body: any;

  sendToFirebase(){

    //collecting the inputs
    const tittle: any = this.tittle;
    const body:any = this.body;
    
    console.log(tittle);
    console.log(body);
    
    
    //sending the input data to the server

    const blog: blog = {tittle,body}
    // in the '' is the name off the collection 
    this.firestore.collection('blogs').doc(this.tittle).set(blog);
  }
}
