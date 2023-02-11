import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './private/admin/admin.component';
import { LoginComponent } from './public/login/login.component';

const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
