import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieService } from './movie.service';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TabsComponent } from './tabs/tabs.component';
import { PhonesComponent } from './phones/phones.component';
import { PhoneService } from './phone.service';
import { PhonedetailComponent } from './phonedetail/phonedetail.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { MyprofileComponent } from './myprofile/myprofile.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MovieDetailComponent,
    MessageComponent,
    TestComponent,
    DashboardComponent,
    LoginComponent,
    TabsComponent,
    PhonesComponent,
    PhonedetailComponent,
    ShopComponent,
    CartComponent,
    MyprofileComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [MovieService,MessageService,PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
