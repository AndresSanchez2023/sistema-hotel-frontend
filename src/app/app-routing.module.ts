import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuardService } from './services/admin.guard';
import { NormalGuardService } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginService } from './services/login.service';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewTiposComponent } from './pages/admin/view-tipos/view-tipos.component';
import { AddTipoComponent } from './pages/admin/add-tipo/add-tipo.component';
import { ViewHabitacionesComponent } from './pages/admin/view-habitaciones/view-habitaciones.component';
import { AddHabitacionComponent } from './pages/admin/add-habitacion/add-habitacion.component';
import { ActualizarHabitacionComponent } from './pages/admin/actualizar-habitacion/actualizar-habitacion.component';
import { ViewHabitacionReservasComponent } from './pages/admin/view-habitacion-reservas/view-habitacion-reservas.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: ['adminCanActivate'],
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: '',
        component : WelcomeComponent
      },
      {
        path: 'tipohab',
        component:ViewTiposComponent
      },
      {
        path:'add-tipo',
        component: AddTipoComponent
      },
      {
        path: 'habitaciones',
        component: ViewHabitacionesComponent
      },
      {
        path:'add-habitacion',
        component: AddHabitacionComponent
      },
      {
        path:'habitacion/:habitacionId',
        component:ActualizarHabitacionComponent
      },
      {
        path: 'ver-reservas/:habitacionId/:numHabitacion',
        component: ViewHabitacionReservasComponent
      }
    ]
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    pathMatch: 'full',
    canActivate: [NormalGuardService.prototype.canActivate]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: 'adminCanActivate',
    useFactory: (loginService: LoginService, router: Router) => {
      return AdminGuardService.canActivateFn(loginService, router);
    },
    deps: [LoginService, Router]
  }]
})
export class AppRoutingModule { }
