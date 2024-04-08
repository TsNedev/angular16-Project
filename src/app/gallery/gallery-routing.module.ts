import {  RouterModule, Routes } from "@angular/router";
import { GalleryComponent } from "./gallery.component";
import { NgModule } from "@angular/core";
import {AddCarComponent } from "./add-car/add-car.component";
import { MainComponent } from "../main/main.component";
import { CarDetailsComponent } from "./car-details/car-details.component";
import { EditComponent } from "./edit/edit.component";


const routes:Routes = [{path:'gallery',component: GalleryComponent},
{path:'cars',component:AddCarComponent},
 {
    path: 'gallery',
    children: [
      { path: '', pathMatch: 'full', component: MainComponent },
      { path: ':carId', component: CarDetailsComponent},
      {path: ':carId/edit', component: EditComponent},
     
    ],
  }, 
]
@NgModule({
    imports:[RouterModule.forChild(routes),],
    exports:[RouterModule]
})

export class GalleryRoutingModule{}