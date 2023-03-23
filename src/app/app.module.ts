import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './tabs/header/header.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { TabsComponent } from './tabs/tabs.component';
import { PhonesComponent } from './tabs/phones/phones.component';
import { PhoneService } from './phone.service';
import { PhonedetailComponent } from './tabs/phonedetail/phonedetail.component';

import { MyprofileComponent } from './myprofile/myprofile.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './tabs/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    TabsComponent,
    PhonesComponent,
    PhonedetailComponent,

    CartComponent,
    MyprofileComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [PhoneService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
