import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SensibilisationComponent } from './sensibilisation/sensibilisation.component';
import { TraitementsComponent } from './traitements/traitements.component';
import { PreventionsComponent } from './preventions/preventions.component';
import { DepistageComponent } from './depistage/depistage.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { NavebarComponent } from './navebar/navebar.component';
import { CancerDuSeinComponent } from './cancer-du-sein/cancer-du-sein.component';
import { RisquesComponent } from './risques/risques.component';
import { TypesCancerComponent } from './types-cancer/types-cancer.component';
import { AutopalpationComponent } from './autopalpation/autopalpation.component';
import { BiopsieComponent } from './biopsie/biopsie.component';
import { MammographieComponent } from './mammographie/mammographie.component';


const routes: Routes = [
  {
    path: '',
    component: AccueilComponent,
  } ,
  {
    path: 'sensibilisation',
    component: SensibilisationComponent,
  },
  {
    path: 'prevention',
    component: PreventionsComponent,
    
  },
  {
    path: 'traitement',
    component: TraitementsComponent,
  },
  {
    path: 'depistage',
    component: DepistageComponent,
  }
  ,
  {
    path: 'actualité',
    component: ActualitesComponent,
  },
  
  {
    path: 'nave',
    component: NavebarComponent,
  },
  {
    path: 'cancer',
    component: CancerDuSeinComponent,
    
  },
  {
    path: 'risques',
    component: RisquesComponent,
    
  },
  {
    path: 'types-cancer',
    component: TypesCancerComponent,
  },
  {
    path: 'mammo',
    component: MammographieComponent,
    
  },
  {
    path: 'auto',
    component: AutopalpationComponent,
    
  },
  {
    path: 'biopsie',
    component: BiopsieComponent,
  },
   { path: 'risques',
    component: RisquesComponent,
    
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
