import { Component, OnInit, Input } from '@angular/core';
import { Artwork } from '../artwork';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ArtworkService }  from '../artwork.service';

@Component({
  selector: 'app-artwork-detail',
  templateUrl: './artwork-detail.component.html',
  styleUrls: ['./artwork-detail.component.css']
})
export class ArtworkDetailComponent implements OnInit {

  @Input() artwork: Artwork;

  constructor(
    private route: ActivatedRoute,
    private artworkService: ArtworkService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getArtwork();
  }

  getArtwork(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.artworkService.getArtwork(id)
      .subscribe(artwork => this.artwork = artwork);
  }

  goBack(): void {
    this.location.back();
  }

}
