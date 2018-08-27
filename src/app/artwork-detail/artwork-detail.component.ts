import { Component, OnInit } from '@angular/core';
import { Artwork } from '../artwork';
import { Portfolio } from '../portfolio';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ArtworkService }  from '../artwork.service';

@Component({
  selector: 'app-artwork-detail',
  templateUrl: './artwork-detail.component.html',
  styleUrls: ['./artwork-detail.component.css']
})
export class ArtworkDetailComponent implements OnInit {

  portfolio: Portfolio = {
    id: 1,
    title: 'Love Portraits'
  }

  artwork: Artwork;

  constructor(
    private route: ActivatedRoute,
    private artworkService: ArtworkService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getArtwork();
    //
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

  getArtwork(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.artworkService.getArtwork(id)
      .subscribe(artwork => this.artwork = artwork);
  }

  goBack(): void {
    this.location.back();
  }

  showModal(): void {
    var modal = document.querySelector('.modal');
    modal.classList.toggle('modal-open');
  }
  closeModal(): void {
    var modal = document.querySelector('.modal');
    modal.classList.toggle('modal-open');
  }

  showPrev(): void {
    console.log('show prev')
    this.artworkService.getPrevArtwork(this.artwork.id)
      .subscribe(artwork => this.artwork = artwork);
  }
  showNext(): void {
    console.log('show next')
    this.artworkService.getNextArtwork(this.artwork.id)
      .subscribe(artwork => this.artwork = artwork);
  }


}
