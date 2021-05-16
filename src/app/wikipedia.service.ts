import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface PageEntry {
  pageid: number;
  title: string;
  wordcount: number;
  snippet: string;
};

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private httpClient: HttpClient) { }

  search(term: string): Observable<PageEntry[]> {
    return this.httpClient.get<PageEntry[]>(`https://en.wikipedia.org/w/api.php`, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: 1,
        srsearch: term,
        origin: '*'
      }
    }).pipe(
      pluck('query', 'search')
    );
  }
}
