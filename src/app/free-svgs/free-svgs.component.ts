import { Component } from '@angular/core';
import {FreeSVG} from '../freeSVG';
import { SVGS } from '../mock-svgs';

@Component({
  selector: 'app-free-svgs',
  templateUrl: './free-svgs.component.html',
  styleUrls: ['./free-svgs.component.scss']
})
export class FreeSVGSComponent {

  svgs = SVGS;
}
