import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


// ruta
import { appRouting } from './app.routes';
import { NoImagesPipe } from './pipes/no-images.pipe';

// servicios

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoImagesPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRouting,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
