import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AutService } from 'src/app/services/aut.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data: any;
  id!: string;
  
  
    constructor(public firestore:AngularFirestore,
      private activeRoute: ActivatedRoute,
      public firbaseAut:AngularFireAuth,
    public autService:AutService,){
       
    }
    
  
   
  ngOnInit(): void {
  
   
    //getting single post details page  
    this.activeRoute.params.subscribe((data) => {
      const id = data['modelModel'];
      this.id = id;
      console.log(id);
      
       const model = this.firestore.collection('models').doc(id).ref
          getDoc(model).then((modelInfo)=>{
            this.data = modelInfo.data();
            console.log(  this.data.data );
            
      
            
          })
       });
        
  }
}
