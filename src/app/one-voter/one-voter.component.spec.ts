/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OneVoterComponent } from './one-voter.component';

describe('OneVoterComponent', () => {
  let component: OneVoterComponent;
  let fixture: ComponentFixture<OneVoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneVoterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.vote-count'));
    const el: HTMLElement = de.nativeElement;
    expect(el.innerText).toContain('21');
  });

  it('should highlight the upvote button if I have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.fa-vote-yea'));
    expect(de.classes.highlighted).toBeTruthy();
  });

  it('should increase the total votes when I click the vote button', () => {
    const button = fixture.debugElement.query(By.css('.fa-vote-yea'));
    button.triggerEventHandler('click', null);

    expect(component.totalVotes).toBe(1);
  });
});
