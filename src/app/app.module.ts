import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

import { ReactiveFormsModule } from '@angular/forms';

const appRoutes : Routes = [
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'user/create-user',
    component: CreateUserComponent
  },
  {
    path: 'user/update-user/:id',
    component: UpdateUserComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CreateUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
