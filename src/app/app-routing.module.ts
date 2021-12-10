import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './general/header/header.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCreateComponent } from './components/user-create/user-create.component';

const routes: Routes = [
    { path: 'header', component: HeaderComponent },
    { path: 'users', component: UsersListComponent },
    { path: 'user', component: UserListComponent },
    { path: 'create', component: UserCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
