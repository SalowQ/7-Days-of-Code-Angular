import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ShipComponent } from './components/ship/ship.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: '7 Days Of Code',
  },
  {
    path: 'movies',
    component: MoviesComponent,
    title: '7 Days Of Code | Movies',
  },
  {
    path: 'ships',
    component: ShipComponent,
    title: '7 Days Of Code | Ship',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
