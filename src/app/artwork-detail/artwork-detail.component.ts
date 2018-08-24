import { Component, OnInit, Input } from '@angular/core';
import { Artwork } from '../artwork';

@Component({
  selector: 'app-artwork-detail',
  templateUrl: './artwork-detail.component.html',
  styleUrls: ['./artwork-detail.component.css']
})
export class ArtworkDetailComponent implements OnInit {

  @Input() artwork: Artwork;

  constructor() { }

  ngOnInit() {
  }

}
