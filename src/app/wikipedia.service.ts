import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { pluck, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface PageEntry {
  pageid: number;
  title: string;
  wordcount: number;
  snippet: string;
};

interface WikipediaResponse {
  query: {
    search: PageEntry[],
  }
};

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private httpClient: HttpClient) { }

  search(term: string): Observable<PageEntry[]> {
    return this.httpClient.get<WikipediaResponse>(`https://en.wikipedia.org/w/api.php`, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: 1,
        srsearch: term,
        origin: '*'
      }
    }).pipe(
      tap(value => console.log('tapped', value)),
      pluck('query', 'search')
    );
  }
}
