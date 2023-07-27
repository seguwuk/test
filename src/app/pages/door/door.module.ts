import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

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
    RouterModule,
    FontAwesomeModule // Importe o módulo do font awesome aqui
  ],
})
export class DoorModule {
  constructor(library: FaIconLibrary) {
    // Adicione os ícones que você deseja usar ao FaIconLibrary
    library.addIconPacks(fas);
  }
}
