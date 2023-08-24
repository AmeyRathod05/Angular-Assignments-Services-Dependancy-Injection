import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { MovieTableComponent } from './movie-table/movie-table.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { CounterService } from './counter.service';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    MovieDashboardComponent,
    MovieTableComponent,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [AccountsService,LoggingService,CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
