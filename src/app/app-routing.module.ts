import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'search-form', pathMatch:'full'},
  {path: 'landingPage', component: LandingPageComponent},
  {path: 'search-form', component: SearchFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
