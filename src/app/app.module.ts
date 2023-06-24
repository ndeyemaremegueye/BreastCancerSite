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
import { AutopalpationComponent } from './autopalpation/autopalpation.component';
import { MammographieComponent } from './mammographie/mammographie.component';
import { BiopsieComponent } from './biopsie/biopsie.component';


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
    AutopalpationComponent,
    MammographieComponent,
    BiopsieComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
