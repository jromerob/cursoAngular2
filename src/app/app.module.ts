import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// Rutas
import {APP_ROUTING} from './app.routes';


// Servicios
import {HeroesService} from './services/heroes.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesSearchComponent } from './components/heroes-search/heroes-search.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    HeroesSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
