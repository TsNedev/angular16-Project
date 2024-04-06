import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './core/error/error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ { path: '', pathMatch: 'full', redirectTo: '/home' },
{ path: 'home', component: HomeComponent },
{
  path: 'auth',
  loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
  
},{
  path: 'auth',
  loadChildren: () => import('./gallery/gallery.module').then((m) => m.GalleryModule)
},

{path:'**', redirectTo:'/404'},
{path:'404', component: ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  redirectTo: any;
}
