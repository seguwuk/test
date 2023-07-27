import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoorComponent } from './door.component';
import { Porta1Component } from './porta1/porta1.component';
import { Porta2Component } from './porta2/porta2.component';
import { Porta3Component } from './porta3/porta3.component';

const routes: Routes = [
  {
    path: '',
    component: DoorComponent,
    children: [
      { path: 'porta1', component: Porta1Component, outlet: 'outletDoors' },
      { path: 'porta2', component: Porta2Component, outlet: 'outletDoors' },
      { path: 'porta3', component: Porta3Component, outlet: 'outletDoors' },
      { path: '', redirectTo: 'porta1', pathMatch: 'full' },
      { path: '**', redirectTo: 'porta1', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoorRoutingModule { }