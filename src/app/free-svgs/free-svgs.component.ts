import { Component } from '@angular/core';

import {FreeSVG} from '../freeSVG';
import { SVGS } from '../mock-svgs';

import { svgService } from '../svg.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-free-svgs',
  templateUrl: './free-svgs.component.html',
  styleUrls: ['./free-svgs.component.scss']
})
export class FreeSVGSComponent {
  


  svgs : FreeSVG[] = [];
  
  
  constructor(private svgService: svgService, private messageService: MessageService) {};

  getSvgs(): void {
    this.svgService.getSvgs()
    .subscribe(svgs => this.svgs = svgs);
  }
  ngOnInit(): void {
    this.getSvgs();
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.svgService.addSvg({ name } as FreeSVG)
      .subscribe(svg => {
        this.svgs.push(svg);
      });
  }

  delete(svg: FreeSVG): void {
    this.svgs = this.svgs.filter(h => h !== svg);
    this.svgService.deleteSvg(svg.id).subscribe();
  }


}
