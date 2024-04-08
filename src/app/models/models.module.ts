import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelsComponent } from './models.component';
import { AboutComponent } from './about/about.component';
import { ModelsRoutingModule } from './modules-routing.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
   ModelsComponent,
   AboutComponent
  ],
  imports: [
    CommonModule,RouterModule,ModelsRoutingModule
  ]
})
export class ModelsModule { }
