import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../portfolio';
import { Artwork } from '../artwork';
import { ArtworkService } from '../artwork.service';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent implements OnInit {

  portfolio: Portfolio = {
    id: 1,
    title: 'Love Portraits'
  }

  artworks: Artwork[];

  getArtworks(): void {
    this.artworkService.getArtworks()
      .subscribe(artworks => this.artworks = artworks)
  }

  constructor(private artworkService: ArtworkService) { }

  ngOnInit() {
    this.getArtworks()
  }

}
