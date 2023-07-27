import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoorRoutingModule } from './door.routing.module';
import { RouterModule } from '@angular/router';
import { DoorComponent } from './door.component';
import { Porta1Component } from './porta1/porta1.component';
import { Porta2Component } from './porta2/porta2.component';
import { Porta3Component } from './porta3/porta3.component';

@NgModule({
  declarations: [
    DoorComponent,
    Porta1Component,
    Porta2Component,
    Porta3Component
  ],
  imports: [
    CommonModule,
    DoorRoutingModule,
    RouterModule
  ],
})
export class DoorModule {
  constructor() {

  }
}
