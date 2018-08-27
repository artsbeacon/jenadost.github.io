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
    //this.messageService.add('ArtworkService: fetched artworks');
    return of(ARTWORKS);
  }

  getArtwork(id: number): Observable<Artwork> {
    // TODO: send the message _after_ fetching the hero
    //this.messageService.add(`ArtworkService: fetched artwork id=${id}`);
    return of(ARTWORKS.find(artwork => artwork.id === id));
  }

  getNextArtwork(id: number): Observable<Artwork> {
    // TODO: send the message _after_ fetching the hero
    //this.messageService.add(`ArtworkService: fetched artwork id=${id}`);
    let idx = ARTWORKS.findIndex(artwork => artwork.id === id)
    idx ++
    if (idx > ARTWORKS.length - 1){
      idx = 0
    }
    return of(ARTWORKS[idx]);
  }

  getPrevArtwork(id: number): Observable<Artwork> {
    // TODO: send the message _after_ fetching the hero
    //this.messageService.add(`ArtworkService: fetched artwork id=${id}`);
    let idx = ARTWORKS.findIndex(artwork => artwork.id === id)
    idx --
    if (idx < 0){
      idx = ARTWORKS.length - 1
    }
    return of(ARTWORKS[idx]);
  }

  constructor(private messageService: MessageService) { }
}
