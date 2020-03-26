import { TodoService } from './todo.service';
import { OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

export class TodosComponent implements OnInit, OnDestroy {
    todos: any[] = [];
    message;
    subscription: Subscription;

    constructor(private service: TodoService) {
    }

    // added subscription to prevent memory leaks
    ngOnInit() {
        // @ts-ignore
        this.subscription = this.service.getTodos().subscribe(t => this.todos = t);
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    add() {

        // @ts-ignore
        let newTodo = {title: '... '};
        this.service.add(newTodo).subscribe(
            t => this.todos.push(t),
            err => this.message = err);
    }

    delete(id) {
        if (confirm('Are you sure?')) {
            this.service.delete(id).subscribe();
        }
    }
}
