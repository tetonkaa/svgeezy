import { Component } from '@angular/core';
import {FreeSVG} from '../freeSVG';

@Component({
  selector: 'app-free-svgs',
  templateUrl: './free-svgs.component.html',
  styleUrls: ['./free-svgs.component.scss']
})
export class FreeSVGSComponent {
  freeSVG: FreeSVG = {
    id: 1,
    name: 'Windstorm'
  };
}
