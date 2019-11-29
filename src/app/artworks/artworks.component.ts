import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Portfolio } from '../portfolio';
import { Artwork } from '../artwork';
import { ArtworkService } from '../artwork.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent implements OnInit {

  portfolio$: Observable<Portfolio>;
  portfolioList: Portfolio[];
  artworkList: Artwork[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ArtworkService
  ) { }

  ngOnInit() {
    //this.getArtworks()
    this.service.getArtworks().subscribe(artworks => this.artworkList = artworks)

    this.service.getPortfolios().subscribe(portfolios => this.portfolioList = portfolios)

    this.portfolio$ = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) => this.service.getPortfolioBySlug(params.get('slug'))
      )
    );
  }

  getPortfolios(): void {
    this.service.getPortfolios()
      .subscribe(portfolios => this.portfolioList = portfolios)
  }

  getArtworks(): void {
    this.service.getArtworks()
      .subscribe(artworks => this.artworkList = artworks)
  }


}
