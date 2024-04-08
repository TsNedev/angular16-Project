import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "../main/main.component";
import { AboutComponent } from "./about/about.component";
import { ModelsComponent } from "./models.component";





const routes:Routes = [{path:'models',component: ModelsComponent},

 {
    path: 'models',
    children: [
      { path: '', pathMatch: 'full', component: MainComponent },
      { path: ':modelModel', component: AboutComponent},
    ],
  }, 
]
@NgModule({
    imports:[RouterModule.forChild(routes),],
    exports:[RouterModule]
})

export class ModelsRoutingModule{}