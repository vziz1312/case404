import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasesComponent } from './pages/cases/cases.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CaseDossierComponent } from './pages/case-dossier/case-dossier.component';
import { SuspectDossierComponent } from './pages/suspect-dossier/suspect-dossier.component';


@NgModule({
  declarations: [
    AppComponent,
    CasesComponent,
    DashboardComponent,
    SidebarComponent,
    CaseDossierComponent,
    SuspectDossierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
