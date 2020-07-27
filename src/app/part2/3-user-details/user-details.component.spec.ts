/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable,empty, Subject} from 'rxjs';

class RouterStub{
 navigate(params){

 }
}
class AcctivatedRouteStub{
    private subject = new Subject();
    ///params: Observable<any> = empty();
    push(value){
        this.subject.next(value);
    }
    get params(){
        return this.subject.asObservable();
    }
    
}
describe('UserDetailsComponent', () => {
    let component: UserDetailsComponent;
    let fixture: ComponentFixture<UserDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UserDetailsComponent ],
            providers: [
                {provide: Router, useClass: RouterStub},
                {provide:ActivatedRoute, useClass: AcctivatedRouteStub}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should redirect the user to users page after saving', () => {
        let router = TestBed.get(Router);
        let spy = spyOn(router,'navigate');
        component.save();
        expect(spy).toHaveBeenCalledWith(['users']);

    });
    it('should naviagate the user to the not found page when the user id is invalid', () => {
        let router = TestBed.get(Router);
        let spy = spyOn(router,'navigate');
        let route : AcctivatedRouteStub = TestBed.get(ActivatedRoute);
        route.push({id:0})
        expect(spy).toHaveBeenCalledWith(['not-found']);

    });
});
