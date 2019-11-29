import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Portfolio } from '../portfolio';
import { Artwork } from '../artwork';
import { ArtworkService } from '../artwork.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolioList: Portfolio[];
  activePortfolioSlug: String;

  portfolio$: Observable<Portfolio>;
  artworkList: Artwork[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ArtworkService
  ) { }

  ngOnInit() {
    // TODO: only make 1 call for the portfolio data
    // TODO: move the portfolio list nav to a left nav component
    // TODO: change artworks data to link by portfolio id not slug

    // get the list of all portfolios for the left nav
    this.service.getPortfolios().subscribe(allPortfolios => this.portfolioList = allPortfolios)

    // get the current or featured portfolio
    this.portfolio$ = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) => {
          var slug = params.get('slug')
          if (slug) {
            return this.service.getPortfolioBySlug(slug)
          }
          return this.service.getFeaturedPortfolio()
        }
      )
    );

    this.portfolio$.subscribe(curPortfolio => {
      this.activePortfolioSlug = curPortfolio.slug
      this.service.getArtworksByPortfolioSlug(curPortfolio.slug).subscribe(portfolioArtworks => this.artworkList = portfolioArtworks)
    })

  }

}
