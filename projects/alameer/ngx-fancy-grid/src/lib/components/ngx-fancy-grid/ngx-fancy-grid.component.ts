import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { constants } from '../../modules/constants/constants';
import { NGXheaders } from '../../NGXheaders';

@Component({
  selector: 'ngx-fancy-grid',
  templateUrl: './ngx-fancy-grid.component.html',
  styleUrls: ['./ngx-fancy-grid.component.css']
})
export class NgxFancyGridComponent implements OnChanges {
  @Input('design') designClass: string = "";
  @Input('headers') tableHeaders: NGXheaders[] = [];
  @Input('data') data: any[] = [];
  gridStyle = "";
  gridHeaders: NGXheaders[] = [];
  gridData: any[] = [];

  constructor() { }

  ngOnChanges(): void {
    this.gridStyle = constants.GRID_STYLE[this.designClass];
    this.gridHeaders = this.tableHeaders;
    this.gridData = this.data;
  }
}
