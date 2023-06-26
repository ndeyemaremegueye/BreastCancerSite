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
import { TabagismeComponent } from './tabagisme/tabagisme.component';
import { AlcoolComponent } from './alcool/alcool.component';
import { EducationComponent } from './education/education.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { RisquesComponent } from './risques/risques.component';
import { TypesCancerComponent } from './types-cancer/types-cancer.component';

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
    TabagismeComponent,
    AlcoolComponent,
    EducationComponent,
    AlimentationComponent,
    RisquesComponent,
    TypesCancerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
