/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SecondTodosComponent } from './second-todos.component';
import { TodoService } from '../_services/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

describe('SecondTodosComponent', () => {
  let component: SecondTodosComponent;
  let fixture: ComponentFixture<SecondTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondTodosComponent ],
      imports: [ HttpClientModule ],
      providers: [ TodoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTodosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should load todos from the server', () => {
  //   const service = TestBed.get(TodoService);
  //   spyOn(service, 'getTodos').and.returnValue(from([[1, 2, 3]]));

  //   fixture.detectChanges();

  //   expect(component.todos.length).toBe(3);
  // });

  it('should load todos from the server', async(() => {
    const service = TestBed.get(TodoService);
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.todos.length).toBe(3);
    });
  }));
});
