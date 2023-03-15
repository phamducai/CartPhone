import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { PhonedetailComponent } from './phonedetail/phonedetail.component';
import { ShopComponent } from './shop/shop.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  { path: 'dmm', component: MoviesComponent  },
  {path: 'test', component: DashboardComponent},
  {path:'detail/:id',component:MovieDetailComponent },
  {path:'shop/:id',component:PhonedetailComponent },
  {path:'shop',component:ShopComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
