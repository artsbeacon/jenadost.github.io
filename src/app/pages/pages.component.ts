import { Component, OnInit } from '@angular/core';
import { Page } from '../page';
import { PageService } from '../page.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  page: Page;

  getPage(): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    const id = 'cv';
    this.pageService.getPage(id)
      .subscribe(page => this.page = page);
  }

  constructor(
    private route: ActivatedRoute,
    private pageService: PageService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPage()
  }

}
