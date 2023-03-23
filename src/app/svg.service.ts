import { Injectable } from '@angular/core';
import {FreeSVG} from './freeSVG';
import { SVGS } from './mock-svgs';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class svgService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    private svgsUrl = 'api/svgs';  // URL to web api

  getSvgs(): Observable<FreeSVG[]>  {
    return this.http.get<FreeSVG[]>(this.svgsUrl)
    .pipe(
      tap(_ => this.log('fetched svgs')),
      catchError(this.handleError<FreeSVG[]>('getSvgs', []))
    );
  }

  getSvg(id: number): Observable<FreeSVG> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const url = `${this.svgsUrl}/${id}`;
  return this.http.get<FreeSVG>(url).pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<FreeSVG>(`getSvg id=${id}`))
  );

    /** Log a HeroService message with the MessageService */


}
httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
/** POST: add a new hero to the server */
addHero(svg: FreeSVG): Observable<FreeSVG> {
  return this.http.post<FreeSVG>(this.svgsUrl, svg, this.httpOptions).pipe(
    tap((newSvg: FreeSVG) => this.log(`added svg w/ id=${newSvg.id}`)),
    catchError(this.handleError<FreeSVG>('addSvg'))
  );
}
updateSvg(svg: FreeSVG): Observable<any> {
  return this.http.put(this.svgsUrl, svg, this.httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${svg.id}`)),
    catchError(this.handleError<any>('updateSvg'))
  );
}
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  }}
 /** Log a HeroService message with the MessageService */
    private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
    }
  
    /** POST: add a new hero to the server */
addSvg(svg: FreeSVG): Observable<FreeSVG> {
  return this.http.post<FreeSVG>(this.svgsUrl, svg, this.httpOptions).pipe(
    tap((newSvg: FreeSVG) => this.log(`added svg w/ id=${newSvg.id}`)),
    catchError(this.handleError<FreeSVG>('addSvg'))
  );
}

/** DELETE: delete the hero from the server */
deleteSvg(id: number): Observable<FreeSVG> {
  const url = `${this.svgsUrl}/${id}`;

  return this.http.delete<FreeSVG>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted svg id=${id}`)),
    catchError(this.handleError<FreeSVG>('deleteSvg'))
  );
}

/* GET heroes whose name contains search term */
searchSvgs(term: string): Observable<FreeSVG[]> {
  if (!term.trim()) {
    // if not search term, return empty svg array.
    return of([]);
  }
  return this.http.get<FreeSVG[]>(`${this.svgsUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found svgs matching "${term}"`) :
       this.log(`no heroes matching "${term}"`)),
    catchError(this.handleError<FreeSVG[]>('searchSvgs', []))
  );
}

}
