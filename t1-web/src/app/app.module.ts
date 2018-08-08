import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { PersonsListComponent } from './components/persons-list/persons-list.component';
import { PersonItemComponent } from './components/persons-list/person-item/person-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PersonsListComponent,
    PersonItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
