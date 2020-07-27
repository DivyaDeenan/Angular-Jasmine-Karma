/* tslint:disable:no-unused-variable */
import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {TodoService} from './todo.service';
import {HttpClientModule} from '@angular/common/http';
import { TodosComponent } from './todos.component';
import { from } from 'rxjs'

//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not
// provided the TodoService as a dependency to TodosComponent.
//


describe('TodosComponent', () => {
    let component: TodosComponent;
    let fixture: ComponentFixture<TodosComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [ TodosComponent ],
            providers: [TodoService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodosComponent);
        component = fixture.componentInstance;
        //fixture.detectChanges();
    });
    it('should load todos from the server',fakeAsync(() => {
    //it('should load todos from the server',async(() => {
        //module level dependency injected as singleton instance of service
        let service = TestBed.get(TodoService);
        //component level dependency injected at each component using the service 
        //let service = fixture.debugElement.injector.get(TodoService);
        //for subscribing observable
        //spyOn(service,'getTodos').and.returnValue(from([[1,2,3]]));
        //for resolving promise
        spyOn(service,'getTodosPromise').and.returnValue(Promise.resolve([1,2,3]));
        fixture.detectChanges();
       /* fixture.whenStable().then(()=>{
            expect(component.todos.length).toBe(3);
        })*/
        tick();
        expect(component.todos.length).toBe(3);
       }));
});
