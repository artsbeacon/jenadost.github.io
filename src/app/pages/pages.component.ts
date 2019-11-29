import { Component, OnInit } from '@angular/core';
import { Page } from '../page';
import { PageService } from '../page.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  page$: Observable<Page>;

  pageList: Page[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PageService
  ) { }

  ngOnInit() {
    // NOTE: this can be simpler if there is no navigation between pages. see  https://angular.io/guide/router#route-definition-with-a-parameter
    //
    this.service.getPages().subscribe(pages => this.pageList = pages)
    // the fix was to add async as in the template
      this.page$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this.service.getPage(params.get('slug')))
      );
  }

}
