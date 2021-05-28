import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './views/cv/cv.component';
import { HomeComponent } from './views/home/home.component';
import { KontaktComponent } from './views/kontakt/kontakt.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'cv', component: CvComponent }, 
  { path: 'kontakt', component: KontaktComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
