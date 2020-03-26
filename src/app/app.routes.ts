import { HomeComponent } from './part2/home/home.component';
import { TodosComponent } from './part2/2-todos/todos.component';
import { UsersComponent } from './part2/users/users.component';
import { UserDetailsComponent } from './part2/3-user-details/user-details.component';

export const routes = [
    { path: 'users/:id', component: UserDetailsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'todos', component: TodosComponent },
    { path: '', component: HomeComponent },
];
