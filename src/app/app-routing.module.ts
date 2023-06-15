import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SensibilisationComponent } from './sensibilisation/sensibilisation.component';
import { TraitementsComponent } from './traitements/traitements.component';
import { PreventionsComponent } from './preventions/preventions.component';
import { DepistageComponent } from './depistage/depistage.component';
import { ActualitesComponent } from './actualites/actualites.component';

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
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
