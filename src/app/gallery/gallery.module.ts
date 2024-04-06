import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCarComponent } from './add-car/add-car.component';
import { RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { FormsModule } from '@angular/forms';
import { CarDetailsComponent } from './car-details/car-details.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    AddCarComponent,
    GalleryComponent,
    CarDetailsComponent,
    EditComponent
  ],
  imports: [
    CommonModule,GalleryRoutingModule,RouterModule,FormsModule
  ],
  exports:[AddCarComponent,GalleryComponent,CommonModule]
})
export class GalleryModule { }
