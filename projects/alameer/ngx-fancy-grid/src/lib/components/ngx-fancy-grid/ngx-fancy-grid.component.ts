import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngx-fancy-grid',
  templateUrl: './ngx-fancy-grid.component.html',
  styleUrls: ['./ngx-fancy-grid.component.css']
})
export class NgxFancyGridComponent implements OnInit {
  @Input() designClass = "";

  constructor() { }

  ngOnInit(): void {
  }

}
