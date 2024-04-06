import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getDoc } from '@angular/fire/firestore';
import { Validators, FormBuilder } from '@angular/forms';
import { AutService } from 'src/app/services/aut.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showEditMode: boolean = false;
// getting user form 
  profileDetails: User = {
    cars: [],
    botCars: [],
    _id: '',
    tel: '',
    email: undefined,
    created_at: '',
    updatedAt: '',
    username: ''
  };
  
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required]],
    tel: [''],
  });

  constructor(private fb: FormBuilder, private autService: AutService,public firestore : AngularFirestore) {}
//getting data for the user
   ngOnInit(): void {

const user = this.firestore.collection('users').doc(localStorage["userId"]).ref
   getDoc(user)
   .then((res)=>{
    const data:any = res.data()
    const { username, tel, email,created_at,updatedAt,cars,botCars,_id} = data;
    
    
    this.profileDetails = {
      username,
      tel,
      email,
      created_at,
      updatedAt,
      cars,
      botCars,
      _id
    };

    this.form.setValue({
      username,
      tel,
      email,
    });
    }) 
  } 
//TODO
  onToggle(): void {
    this.showEditMode = !this.showEditMode;
  }

  saveProfileHandle(): void {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = this.form.value as User;
    const { username, email, tel } = this.profileDetails;

    this.autService.updateProfile(username, email, tel)
      this.onToggle();
    
  }

  onCancel(e: Event) {
    e.preventDefault();
    this.onToggle();
  }
}



