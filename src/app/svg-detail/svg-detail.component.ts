import { Component, Input } from '@angular/core';
import { FreeSVG } from '../freeSVG';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { svgService } from '../svg.service';

@Component({
  selector: 'app-svg-detail',
  templateUrl: './svg-detail.component.html',
  styleUrls: ['./svg-detail.component.scss']
})


export class SvgDetailComponent {
  @Input() svg?: FreeSVG;

  constructor(
    private route: ActivatedRoute,
    private svgService: svgService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getSvg();
  }
  
  getSvg(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.svgService.getSvg(id)
      .subscribe(svg => this.svg = svg);
  }
  goBack(): void {
    this.location.back();
  }

}
