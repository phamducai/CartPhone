import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhonedetailComponent } from './tabs/phonedetail/phonedetail.component';
import { LoginComponent } from './login/login.component';
import { TabsComponent } from './tabs/tabs.component';
import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    redirectTo: '',
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  { path: 'test', component: PhonedetailComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
