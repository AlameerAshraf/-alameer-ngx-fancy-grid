import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { constants } from '../../modules/constants/constants';

@Component({
  selector: 'ngx-fancy-grid',
  templateUrl: './ngx-fancy-grid.component.html',
  styleUrls: ['./ngx-fancy-grid.component.css']
})
export class NgxFancyGridComponent implements OnChanges {
  @Input('design') designClass: string = "";
  gridStyle = "";

  constructor() { }

  ngOnChanges(): void {
    this.gridStyle = constants.GRID_STYLE[this.designClass]
  }
}
