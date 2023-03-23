import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { FreeSVG } from '../freeSVG';
import { svgService } from '../svg.service';

@Component({
  selector: 'app-svg-search',
  templateUrl: './svg-search.component.html',
  styleUrls: [ './svg-search.component.css' ]
})
export class SvgSearchComponent implements OnInit {
  svgs$!: Observable<FreeSVG[]>;
  private searchTerms = new Subject<string>();

  constructor(private svgService: svgService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.svgs$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.svgService.searchSvgs(term)),
    );
  }
}
