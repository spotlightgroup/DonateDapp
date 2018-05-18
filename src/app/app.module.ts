import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MetaSenderComponent} from './meta/meta-sender/meta-sender.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {MetaModule} from './meta/meta.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';

import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  { path: 'home',
    component: HomeComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
   path: 'login',
   component: LoginComponent,
   data: { title: 'Login' }
 },
 {
  path: 'donate',
  component: MetaSenderComponent,
  data: { title: 'DONATE' }
},
 {
  path: 'signup',
  component: RegisterComponent,
  data: { title: 'signup' }
},
{
 path: 'profile',
 component: ProfileComponent,
 data: { title: 'profile' }
}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MetaModule,

    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
