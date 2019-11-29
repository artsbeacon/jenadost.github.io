import { Component, OnInit } from '@angular/core';
import { Artwork } from '../artwork';
import { Portfolio } from '../portfolio';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { ArtworkService }  from '../artwork.service';

@Component({
  selector: 'app-artwork-detail',
  templateUrl: './artwork-detail.component.html',
  styleUrls: ['./artwork-detail.component.css']
})
export class ArtworkDetailComponent implements OnInit {

  portfolioList: Portfolio[];
  activePortfolioSlug: String;

  artwork$: Observable<Artwork>;
  artworkList: Artwork[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ArtworkService
  ) { }

  ngOnInit() {
    // TODO: make the artworks use a slug instead of id for the url

    // NOTE: template must use async
    this.artwork$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getArtworkById(+params.get('id')))
    );

    // TODO: change artworks data to link by portfolio id not slug
    this.artwork$.subscribe(curArtwork => {
      this.activePortfolioSlug = curArtwork.portfolio
      // load all artworks for this portfolio for use by the prev/next links
      this.service.getArtworksByPortfolioSlug(curArtwork.portfolio).subscribe(portfolioArtworks => this.artworkList = portfolioArtworks)
    })

    // TODO: move the portfolio list nav to a left nav component
    this.service.getPortfolios().subscribe(allPortfolios => this.portfolioList = allPortfolios)

    // handle modal content
    var modal = document.querySelector('.modal');
    // close modal if clicked outside content area
    document.querySelector('.modal-inner').addEventListener('click', function() {
      modal.classList.toggle('modal-open');
    });
    // prevent modal inner from closing parent when clicked
    document.querySelector('.modal-content').addEventListener('click', function(e) {
    	e.stopPropagation();
    });
  }

  showModal(): void {
    var modal = document.querySelector('.modal');
    modal.classList.toggle('modal-open');
  }
  closeModal(): void {
    var modal = document.querySelector('.modal');
    modal.classList.toggle('modal-open');
  }

  // TODO: update the url OR make the links use the portfolio's id
  showPrev(id: number): void {
    // NOTE: use of to set the object as an observable
    let newIndex = this.artworkList.findIndex(el => el.id === id) - 1
    if (newIndex < 0){
      newIndex = this.artworkList.length - 1
    }
    this.artwork$ = of(this.artworkList[newIndex])
  }
  showNext(id: number): void {
    // NOTE: use of to set the object as an observable
    let newIndex = this.artworkList.findIndex(el => el.id === id) + 1
    if (newIndex > this.artworkList.length - 1){
      newIndex = 0
    }
    this.artwork$ = of(this.artworkList[newIndex])
  }


}
