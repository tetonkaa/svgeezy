import { Component, OnInit } from '@angular/core';
import { FreeSVG } from '../freeSVG';
import { svgService } from '../svg.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  svgs: FreeSVG[] = [];

  constructor(private svgservice: svgService) { }

  ngOnInit(): void {
    this.getSvgs();
  }

  getSvgs(): void {
    this.svgservice.getSvgs()
      .subscribe(svgs => this.svgs = svgs.slice(1, 5));
  }
}
