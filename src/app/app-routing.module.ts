import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeSVGSComponent } from './free-svgs/free-svgs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SvgDetailComponent } from './svg-detail/svg-detail.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: SvgDetailComponent },
  { path: 'svgs', component: FreeSVGSComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
