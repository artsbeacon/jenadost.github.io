import { Injectable } from '@angular/core';
import { Page } from './page'
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient,
      private messageService: MessageService) { }

  private serviceUrl = 'assets/data/pages.json';  // URL to web api

  /** GET data from the server */
  getPages (): Observable<Page[]> {
    return this.http.get<Page[]>(this.serviceUrl);
  }

  getPage(slug: string) {
    return this.getPages().pipe(
      map(pages => pages.find(page => page.slug === slug))
    );
  }

}
