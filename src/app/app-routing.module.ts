import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent , pathMatch: 'full'},
  { 
    path: 'door',
    loadChildren: () => import('./pages/door/door.module').then(m => m.DoorModule) 
  },
  { 
    path: 'cats',
    loadChildren: () => import('./pages/cats/cats.module').then(m => m.CatsModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
