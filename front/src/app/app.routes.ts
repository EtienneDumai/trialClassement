import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ClassementComponent } from './pages/classement/classement.component';
export const routes: Routes = [
    { path: '', component: AccueilComponent },
    { path: 'classement', component: ClassementComponent },
];
export const appRoutingProviders = [
    provideRouter(routes)
];