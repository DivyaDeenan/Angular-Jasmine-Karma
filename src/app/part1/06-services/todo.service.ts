import { HttpClient } from '@angular/common/http';

export class TodoService {
    url = '...';

    constructor(private http: HttpClient) {
    }

    add(todo) {
        return this.http.post(this.url, todo);
    }

    getTodos() {
        return this.http.get(this.url);
    }

    delete(id) {
        return this.http.delete(`${this.url}/${id}`);
    }
}
