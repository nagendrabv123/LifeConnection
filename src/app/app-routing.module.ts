import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { PawServicesComponent } from './paw-services/paw-services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ViewAllPawsComponent } from './view-all-paws/view-all-paws.component';

const routes: Routes = [
  {path: 'home', component: HomeScreenComponent},
  {path: 'services', component: PawServicesComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'viewPaws', component:ViewAllPawsComponent}
  // {path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
