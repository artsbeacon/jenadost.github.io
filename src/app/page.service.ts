import { Injectable } from '@angular/core';
import { Page } from './page'
import { PAGES } from './mock-pages'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }

  getPage(slug: string): Observable<Page> {
    // TODO: send the message _after_ fetching the hero
    //this.messageService.add(`ArtworkService: fetched artwork id=${id}`);
    return of(PAGES.find(page => page.slug === slug));
  }
}
