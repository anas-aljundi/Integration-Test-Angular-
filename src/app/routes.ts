import { SecondTodosComponent } from './second-todos/second-todos.component';
import { ThirdUserDetailsComponent } from './third-user-details/third-user-details.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';


export const routes = [
    { path: 'users/:id', component: ThirdUserDetailsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'todos', component: SecondTodosComponent },
    { path: '', component: HomeComponent },
  ];
