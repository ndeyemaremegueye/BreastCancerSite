import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SensibilisationComponent } from './sensibilisation/sensibilisation.component';
import { PreventionsComponent } from './preventions/preventions.component';
import { TraitementsComponent } from './traitements/traitements.component';
import { NavebarComponent } from './navebar/navebar.component';
import { DepistageComponent } from './depistage/depistage.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { CancerDuSeinComponent } from './cancer-du-sein/cancer-du-sein.component';
import { RisquesComponent } from './risques/risques.component';
import { TypesCancerComponent } from './types-cancer/types-cancer.component';
import { BiopsieComponent } from './biopsie/biopsie.component';
import { MammographieComponent } from './mammographie/mammographie.component';
import { AutopalpationComponent } from './autopalpation/autopalpation.component';


import { OctobreRoseComponent } from './octobre-rose/octobre-rose.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { DonComponent } from './don/don.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    SensibilisationComponent,
    PreventionsComponent,
    TraitementsComponent,
    NavebarComponent,
    DepistageComponent,
    ActualitesComponent,
    CancerDuSeinComponent,
    RisquesComponent,
    TypesCancerComponent,
    AutopalpationComponent,
    MammographieComponent,
    BiopsieComponent,
  
    RisquesComponent,
    TypesCancerComponent,
    OctobreRoseComponent,
    ActualiteComponent,
    DonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
