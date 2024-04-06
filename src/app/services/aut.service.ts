import { Injectable, OnInit } from '@angular/core';
import { GoogleAuthProvider, user } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getDoc } from '@angular/fire/firestore';
import { Subscriber, async } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutService implements OnInit{

//constants
isLoggedIn = false;
id!: any;
userData:any; 

  constructor(public FirebaseAut:AngularFireAuth,
    public firestore : AngularFirestore
  ) {
   
   }

   ngOnInit(): void {
     
    
   }
  
    
  async userId(){
    if(this.FirebaseAut.user !== null ){
      await  this.FirebaseAut.user.subscribe((data)=>{
         const datas = (data?.uid);
         this.id = datas 
         return datas
        });
     } 
    }


   async login(email:string,password:string){

    await this.FirebaseAut.signInWithEmailAndPassword(email,password)
    .then(res=>{
      localStorage.setItem('user',JSON.stringify(res.user))
      localStorage.setItem('userId',JSON.stringify(res.user?.uid))
      this.isLoggedIn = true;
      this.id = res.user?.uid;
    })
   }

   
   async register(email:string,password:string){

    await this.FirebaseAut.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true;
      this.id = res.user?.uid;
      localStorage.setItem('user',JSON.stringify(res.user))
      localStorage.setItem('userId',JSON.stringify(res.user?.uid))
    })
   }
   logout(){
    this.FirebaseAut.signOut()
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
    this.isLoggedIn = false
   }

   getId(){
     const id = localStorage.getItem('user')?.match('uid')    
     
     console.log("test");
    }
    getUser(userIdent:string){
      const user = this.firestore.collection('users').doc(userIdent).ref
      getDoc(user)
      .then((user)=>{
      this.userData = user.data();
         }) 
        console.log(user);
        return user
        
       
        
         
    }

    updateProfile(username:string, email:string, tel:string){
      this.firestore.collection('users').doc(localStorage["userId"]).update({username, email, tel});
       
   }
  }
