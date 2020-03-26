import { TodoService } from './todo.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';
import { empty } from 'rxjs/internal/Observer';

// extra test file for 100% coverage (not part of the course)
describe('TodoService', () => {
    let service: TodoService;
    let http: HttpClient;
    let todos;

    beforeEach(() => {
        http = new HttpClient(null);
        service = new TodoService(http);
        todos = [ 1, 2, 3 ];
    });

    it('returns the list of todos from the server', () => {
        const spy = spyOn(http, 'get').and.returnValue(todos);

        const result = service.getTodos();

        expect(spy).toHaveBeenCalled();
        expect(result).toBe(todos);
    });

    it('adds the todo to the server', () => {
        const addTodo = 1;
        const spy = spyOn(http, 'post').and.returnValue(of(addTodo));

        const result$ = service.add(1);
        let result;

        const subscription = result$.subscribe(value => {
            result = value;
        });

        subscription.unsubscribe();

        expect(spy).toHaveBeenCalledWith(service.url, addTodo);
        expect(result).toBe(addTodo);
    });

    it('deletes the todo from the server', () => {
        const deleteTodoId = 1;
        const spy = spyOn(http, 'delete').and.returnValue(of(empty));

        service.delete(deleteTodoId);

        expect(spy).toHaveBeenCalledWith(`${service.url}/${deleteTodoId}`);
    });
});
