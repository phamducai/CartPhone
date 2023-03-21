import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PhonedetailComponent } from './phonedetail/phonedetail.component';
import { LoginComponent } from './login/login.component';
import { TabsComponent } from './tabs/tabs.component';
const routes: Routes = [
  { path: '', component: TabsComponent },
  { path: 'shop/:id', component: PhonedetailComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
