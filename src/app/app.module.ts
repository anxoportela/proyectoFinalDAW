import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { EditorModule } from '@tinymce/tinymce-angular';

import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthService } from "./shared/services/auth/auth.service";
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MejorValoradosComponent } from './components/mejor-valorados/mejor-valorados.component';
import { RecomendadosComponent } from './components/recomendados/recomendados.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AddNoticiaComponent } from './components/add-noticia/add-noticia.component';
import { DetallesNoticiaComponent } from './components/detalles-noticia/detalles-noticia.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BuscadorComponent,
    MejorValoradosComponent,
    RecomendadosComponent,
    NoticiasComponent,
    InicioComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    AddNoticiaComponent,
    DetallesNoticiaComponent,
    ListaUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    EditorModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
