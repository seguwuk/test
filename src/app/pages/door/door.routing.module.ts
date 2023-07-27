// door.routing.module.ts
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
      { path: 'porta1', outlet: 'outletDoors', component: Porta1Component },
      { path: 'porta2', outlet: 'outletDoors', component: Porta2Component },
      { path: 'porta3', outlet: 'outletDoors', component: Porta3Component },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoorRoutingModule { }
