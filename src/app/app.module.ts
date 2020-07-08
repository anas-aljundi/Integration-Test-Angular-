import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OneVoterComponent } from './one-voter/one-voter.component';
import { SecondTodosComponent } from './second-todos/second-todos.component';
import { TodoService } from './_services/todo.service';
import { ThirdUserDetailsComponent } from './third-user-details/third-user-details.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { routes } from './routes';
import { NavComponent } from './nav/nav.component';

@NgModule({
   declarations: [
      AppComponent,
      OneVoterComponent,
      SecondTodosComponent,
      ThirdUserDetailsComponent,
      HomeComponent,
      UsersComponent,
      NavComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
