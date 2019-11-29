import { Injectable } from '@angular/core';
import { Artwork } from './artwork'
import { Portfolio } from './portfolio'
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  constructor(private http: HttpClient,
      private messageService: MessageService) { }

      private artworkServiceUrl = 'assets/data/artworks.json';  // URL to web api
      private portfolioServiceUrl = 'assets/data/portfolios.json';  // URL to web api

  getPortfolios(): Observable<Portfolio[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('ArtworkService: fetched artworks');
    return this.http.get<Portfolio[]>(this.portfolioServiceUrl)
  }

  getPortfolioBySlug(slug: string) {
    return this.getPortfolios().pipe(
      map(portfolios => portfolios.find(portfolio => portfolio.slug === slug))
    );
  }

  // returns the first in the list
  getFeaturedPortfolio() {
    return this.getPortfolios().pipe(
      map(portfolios => portfolios[0])
    );
  }

  /** GET data from the server */
  getArtworks(): Observable<Artwork[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('ArtworkService: fetched artworks');
    return this.http.get<Artwork[]>(this.artworkServiceUrl)
  }

  getArtworksByPortfolioSlug(portfolioSlug: string) {
    return this.getArtworks().pipe(
      map(artwork => artwork.filter(artwork => artwork.portfolio === portfolioSlug))
    );
  }

  getArtworkById(id: number): Observable<Artwork> {
    // TODO: send the message _after_ fetching the hero
    //this.messageService.add(`ArtworkService: fetched artwork id=${id}`);
    return this.getArtworks().pipe(
      map(artwork => artwork.find(artwork => artwork.id === id))
    );
  }

}
