/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThirdUserDetailsComponent } from './third-user-details.component';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { routes } from '../routes';

class RouterStub {
  navigate(params){

  }
}

class ActivatedRouteStub {
  private subject = new Subject();
  // params: Observable<any> = Observable.create();
  get params() {
    return this.subject.asObservable();
  }

  push(value) {
    this.subject.next(value);
  }
}

describe('ThirdUserDetailsComponent', () => {
  let component: ThirdUserDetailsComponent;
  let fixture: ComponentFixture<ThirdUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdUserDetailsComponent ],
      imports: [ RouterModule.forRoot(routes)],
      providers: [
        { provide: Router, useClass: RouterStub},
        { provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect the user to the users page after saving', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it('should navigate the user to not found page when the user is not found', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    const route: ActivatedRouteStub = TestBed.get(ActivatedRoute);

    route.push({ id: 0});
    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
