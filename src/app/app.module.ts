import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";

import {DataTableModule} from 'primeng/datatable';
import { AppComponent } from './app.component';
import {UserService} from "./service/user.service";
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

const appRoutes: Routes = [
  { path: 'userlist', component: UserListComponent },
  { path: 'user/:id',      component: UserAddComponent },
  {
    path: 'login',
    component: UserLoginComponent,
    data: { title: 'Login Form' }
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserAddComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
