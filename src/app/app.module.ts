import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarMedicoComponent } from './cadastrar-medico/cadastrar-medico.component';
import { ConsultarMedicoComponent } from './consultar-medico/consultar-medico.component';
import { EditarMedicoComponent } from './editar-medico/editar-medico.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './_interceptors/tokenInterceptor';


const routes: Routes = [

  {path: 'cadastrar-medico', component: CadastrarMedicoComponent},
  {path: 'consultar-medico', component: ConsultarMedicoComponent},
  {path: 'editar-medico/:id', component: EditarMedicoComponent},
  {path: 'account', component: AccountComponent},
  {path: '', component: LoginComponent}


]


@NgModule({
  declarations: [
    AppComponent,
    CadastrarMedicoComponent,
    ConsultarMedicoComponent,
    EditarMedicoComponent,
    AccountComponent,
    LoginComponent
  ],



  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [{
    //Configurando o uso do interceptor
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],




  bootstrap: [AppComponent]
})
export class AppModule { }
