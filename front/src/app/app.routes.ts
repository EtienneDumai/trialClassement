import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

import { AccueilComponent } from './pages/accueil/accueil.component';
import { ClassementComponent } from './pages/classement/classement.component';
import { ScoresComponent } from './pages/scores/scores.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent }, // Accueil par défaut
  { path: 'accueil', component: AccueilComponent }, // 👈 Ajout explicite d’Accueil
  { path: 'classement', component: ClassementComponent }, // Page Classement
  { path:'scores', component: ScoresComponent } // Page Scores
];

export const appRoutingProviders = [
  provideRouter(routes) // Active le routage
];