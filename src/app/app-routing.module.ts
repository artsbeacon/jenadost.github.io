import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworksComponent } from './artworks/artworks.component'
import { ArtworkDetailComponent }  from './artwork-detail/artwork-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'artwork/:id', component: ArtworkDetailComponent },
  { path: 'portfolio', component: ArtworksComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
