import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterLinkWithHref} from '@angular/router';
import { NavComponent } from './nav.component';
import {RouterTestingModule} from '@angular/router/testing';
import {By} from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a link to /todos',()=>{
    let debugElements =  fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let index = debugElements.findIndex(de=> de.properties['href'] === '/todos');
    expect(index).toBeGreaterThan(-1);
 })
});
