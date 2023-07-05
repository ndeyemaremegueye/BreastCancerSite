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
import { ChirurgieComponent } from './chirurgie/chirurgie.component';
import { RadiotherapieComponent } from './radiotherapie/radiotherapie.component';
import { ChimiotherapieComponent } from './chimiotherapie/chimiotherapie.component';
import { TabagismeComponent } from './tabagisme/tabagisme.component';
import { AlcoolComponent } from './alcool/alcool.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { EducationComponent } from './education/education.component';


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
    path: 'chirurgie',
    component: ChirurgieComponent,
  },
  {
    path: 'radiotherapie',
    component: RadiotherapieComponent,
  },
  {
    path: 'chimiotherapie',
    component: ChimiotherapieComponent,
  },
  {
    path: 'tabagisme',
    component:TabagismeComponent,
  },
  {
    path: 'alcool',
    component: AlcoolComponent,
  },
  {
    path: 'education',
    component: EducationComponent,
  },
  {
    path: 'alimentation',
    component: AlimentationComponent,
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
