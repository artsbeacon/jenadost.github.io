import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ArtworksComponent } from './artworks/artworks.component';
import { ArtworkDetailComponent } from './artwork-detail/artwork-detail.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '', redirectTo: '/portfolios', pathMatch: 'full' },
  { path: 'artwork/:id', component: ArtworkDetailComponent },
  { path: 'pages/:slug', component: PagesComponent },
  { path: 'portfolios', component: PortfolioComponent },
  { path: 'portfolio/:slug', component: PortfolioComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
