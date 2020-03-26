import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './part2/home/home.component';
import { TodosComponent } from './part2/2-todos/todos.component';
import { UserDetailsComponent } from './part2/3-user-details/user-details.component';
import { VoterComponent } from './part2/1-voter/voter.component';
import { UsersComponent } from './part2/users/users.component';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './part2/highlight.directive';
import { NavComponent } from './nav/nav.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TodosComponent,
        UserDetailsComponent,
        VoterComponent,
        UsersComponent,
        HighlightDirective,
        NavComponent,
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
