import { Injectable } from '@angular/core';
import {FreeSVG} from './freeSVG';
import { SVGS } from './mock-svgs';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class svgService {
  getsvgs(): Observable<FreeSVG[]>  {
    const svgs = of(SVGS);
    this.messageService.add('svgService: fetched svgs');
    return svgs;
  }
  constructor(private messageService: MessageService) { }
}
