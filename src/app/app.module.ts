import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';
import { SectCarouselComponent } from './sect-carousel/sect-carousel.component';
import { PiliersComponent } from './piliers/piliers.component';
import { FooterComponent } from './footer/footer.component';
import { ArticlesComponent } from './articles/articles.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectCarouselComponent,
    PiliersComponent,
    FooterComponent,
    ArticlesComponent,
    StatsComponent
  ],
    imports: [
        BrowserModule,
        RouterOutlet
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
