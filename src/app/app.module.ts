import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HighlightDirective } from './highlight.directive';
import { DatePipe } from './date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    UserDetailsComponent,
    RepositoriesComponent,
    LandingPageComponent,
    HighlightDirective,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
