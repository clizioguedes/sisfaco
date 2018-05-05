import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// APP
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// Serviços
import { FirestoreService } from './services/firestore.service';
// Modulos Variados
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialNavComponent } from './material-nav/material-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
// Angularfire2
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
// Componentes do Módulo de RH
import { ListarFuncionariosComponent } from './componentes/listar-funcionarios/listar-funcionarios.component';
import { AddFuncionarioComponent } from './componentes/add-funcionario/add-funcionario.component';
import { FuncionarioComponent } from './componentes/funcionario/funcionario.component';
import { EditarFuncionarioComponent } from './componentes/editar-funcionario/editar-funcionario.component';
// Componentes do Módulo de Ordem de Produção
import { EditarOrdemDeProducaoComponent } from './componentes/editar-ordem-de-producao/editar-ordem-de-producao.component';
import { ListarOrdensDeProducaoComponent } from './componentes/listar-ordens-de-producao/listar-ordens-de-producao.component';
import { AddOrdemDeProducaoComponent } from './componentes/add-ordem-de-producao/add-ordem-de-producao.component';
import { OrdemDeProducaoComponent } from './componentes/ordem-de-producao/ordem-de-producao.component';
// Angular Material
import { MatTableModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule,
  MatFormFieldModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatMenuModule,
    MatListModule, MatDividerModule, MatRadioModule, MatSelectModule, MatSnackBarModule,
    MatProgressBarModule, MatTabsModule, MatCardModule, MatGridListModule } from '@angular/material';


// Rotas
const routes: Routes = [
  { path: 'dashboard',                        component: DashboardComponent },
  { path: 'ordem-de-producao/:id',            component: OrdemDeProducaoComponent },
  { path: 'add-ordem-de-producao',            component: AddOrdemDeProducaoComponent },
  { path: 'listar-ordens-de-producao',        component: ListarOrdensDeProducaoComponent },
  { path: 'edit-ordem-de-producao/:id',       component: EditarOrdemDeProducaoComponent },

  { path: 'funcionario/:id',                  component: FuncionarioComponent },
  { path: 'add-funcionario',                  component: AddFuncionarioComponent },
  { path: 'listar-funcionarios',              component: ListarFuncionariosComponent },
  { path: 'editar-funcionario/:id',           component: EditarFuncionarioComponent },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MaterialNavComponent,
    // FUNCIONARIO
    FuncionarioComponent,
    AddFuncionarioComponent,
    ListarFuncionariosComponent,
    EditarFuncionarioComponent,
    // ORDEM DE PRODUÇÃO
    OrdemDeProducaoComponent,
    AddOrdemDeProducaoComponent,
    ListarOrdensDeProducaoComponent,
    EditarOrdemDeProducaoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFirestoreModule.enablePersistence(),
    NgxDatatableModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),
    MatTableModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule,
      MatFormFieldModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatMenuModule, MatListModule, 
        MatDividerModule, MatRadioModule, MatSelectModule, MatSnackBarModule, MatProgressBarModule,
          MatTabsModule, MatCardModule, MatGridListModule, LayoutModule
  ],
  providers: [ FirestoreService, { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
