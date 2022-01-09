import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import * as fancyGridComponets from './components';



@NgModule({
  declarations: [
    fancyGridComponets.NgxFancyGridComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    fancyGridComponets.NgxFancyGridComponent
  ]
})

export class NgxFancyGridModule { }
