import { Injectable } from '@angular/core';
import {FreeSVG} from './freeSVG';
import { SVGS } from './mock-svgs';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class svgService {
  constructor(private messageService: MessageService) { }
  getSvgs(): Observable<FreeSVG[]>  {
    const svgs = of(SVGS);
    this.messageService.add('svgService: fetched svgs');
    return svgs;
  }

  getSvg(id: number): Observable<FreeSVG> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const svg = SVGS.find(h => h.id === id)!;
    this.messageService.add(`svgService: fetched svg id=${id}`);
    return of(svg);

}

}
