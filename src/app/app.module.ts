import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewTiposComponent } from './pages/admin/view-tipos/view-tipos.component';
import { AddTipoComponent } from './pages/admin/add-tipo/add-tipo.component';
import { ViewHabitacionesComponent } from './pages/admin/view-habitaciones/view-habitaciones.component';
import { AddHabitacionComponent } from './pages/admin/add-habitacion/add-habitacion.component';
import { ActualizarHabitacionComponent } from './pages/admin/actualizar-habitacion/actualizar-habitacion.component';
import { ViewHabitacionReservasComponent } from './pages/admin/view-habitacion-reservas/view-habitacion-reservas.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { DetallesTipoHabitacionComponent } from './pages/detalles-tipo-habitacion/detalles-tipo-habitacion.component';
import { SidebarComponent as UserSidebar} from './pages/user/sidebar/sidebar.component';
import { ViewUsuarioReservasComponent } from './pages/user/view-usuario-reservas/view-usuario-reservas.component';
import { FeedbackComponent } from './pages/user/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewTiposComponent,
    AddTipoComponent,
    ViewHabitacionesComponent,
    AddHabitacionComponent,
    ActualizarHabitacionComponent,
    ViewHabitacionReservasComponent,
    CarouselComponent,
    DetallesTipoHabitacionComponent,
    UserSidebar,
    ViewUsuarioReservasComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
