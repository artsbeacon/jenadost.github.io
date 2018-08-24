import { Injectable } from '@angular/core';
import { Artwork } from './artwork'
import { ARTWORKS } from './mock-artworks'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  getArtworks(): Observable<Artwork[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(ARTWORKS);
  }

  constructor(private messageService: MessageService) { }
}
