import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

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

    LoginComponent,
    TabsComponent,
    PhonesComponent,
    PhonedetailComponent,
    ShopComponent,
    CartComponent,
    MyprofileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [PhoneService],
  bootstrap: [AppComponent],
})
export class AppModule {}
