import { Component, OnInit } from '@angular/core';
import { Artwork } from '../artwork';
import { ARTWORKS } from '../mock-artworks';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent implements OnInit {

  artworks = ARTWORKS;

  selectedArtwork: Artwork;

  onSelect(artwork: Artwork): void {
    this.selectedArtwork = artwork;
  }

  onBack(): void {
    this.selectedArtwork = null
  }

  constructor() { }

  ngOnInit() {

  }

}
