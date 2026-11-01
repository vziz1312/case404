
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CasesComponent } from './pages/cases/cases.component';
import { CaseDossierComponent } from './pages/case-dossier/case-dossier.component';
import { SuspectDossierComponent } from './pages/suspect-dossier/suspect-dossier.component';
import { InvestigationBoardComponent } from './pages/investigation-board/investigation-board.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cases', component: CasesComponent },
  { path: 'cases/:id', component: CaseDossierComponent },
  { path: 'suspects/:id', component: SuspectDossierComponent },
  { path: 'investigation-board', component: InvestigationBoardComponent },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
