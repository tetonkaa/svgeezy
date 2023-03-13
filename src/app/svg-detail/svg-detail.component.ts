import { Component, Input } from '@angular/core';
import { FreeSVG } from '../freeSVG';

@Component({
  selector: 'app-svg-detail',
  templateUrl: './svg-detail.component.html',
  styleUrls: ['./svg-detail.component.scss']
})


export class SvgDetailComponent {
  @Input() svg?: FreeSVG;
  
}
