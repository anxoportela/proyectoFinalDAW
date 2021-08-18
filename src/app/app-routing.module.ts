import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./shared/guard/auth.guard";
import { SecureInnerPagesGuard } from "./shared/guard/secure-inner-pages.guard";
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AddNoticiaComponent } from './components/add-noticia/add-noticia.component';
import { DetallesNoticiaComponent } from './components/detalles-noticia/detalles-noticia.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'login', component: SignInComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'registro', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]  },
  { path: 'cpanel', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'recuperar', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard]  },
  { path: 'verificar', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard]  },
  { path: 'add', component: AddNoticiaComponent, canActivate: [AuthGuard]  },
  { path: 'detalles/:id', component: DetallesNoticiaComponent, canActivate: [AuthGuard]  },
  { path: 'users', component: ListaUsuariosComponent, canActivate: [AuthGuard]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
