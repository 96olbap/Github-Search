import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';

const routes: Routes = [
  {path: 'search-form', component: SearchFormComponent},
  {path: 'repositories', component: RepositoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
