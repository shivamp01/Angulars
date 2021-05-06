import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CarrierComponent } from './carrier/carrier.component';
import { CodeComponent } from './code/code.component';
import { RouteComponent } from './route/route.component';

const routes: Routes = [
  {path: 'add', component: AddComponent},
  {path: 'code', component: CodeComponent},
  {path: 'carrier', component: CarrierComponent},
  {path: 'route', component: RouteComponent},
  {path: '', redirectTo: '/add', pathMatch: 'full'},
  {path: '**', redirectTo: '/add', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
