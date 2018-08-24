import { Component, OnInit } from '@angular/core';
import { Artwork } from '../artwork';
import { ARTWORKS } from '../mock-artworks';
import { ArtworkService } from '../artwork.service';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent implements OnInit {

  artworks: Artwork[];

  selectedArtwork: Artwork;

  onSelect(artwork: Artwork): void {
    this.selectedArtwork = artwork;
  }

  onBack(): void {
    this.selectedArtwork = null
  }

  getArtworks(): void {
    this.artworkService.getArtworks()
      .subscribe(artworks => this.artworks = artworks)
  }

  constructor(private artworkService: ArtworkService) { }

  ngOnInit() {
    this.getArtworks()
  }

}
