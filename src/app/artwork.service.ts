import { Injectable } from '@angular/core';
import { Artwork } from './artwork'
import { ARTWORKS } from './mock-artworks'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  getArtworks(): Observable<Artwork[]> {
    return of(ARTWORKS);
  }

  constructor() { }
}
