import { NgModule } from '@angular/core';

import * as fancyGridComponets from './components';



@NgModule({
  declarations: [
    fancyGridComponets.NgxFancyGridComponent
  ],
  imports: [
  ],
  exports: [
    fancyGridComponets.NgxFancyGridComponent
  ]
})

export class NgxFancyGridModule { }
