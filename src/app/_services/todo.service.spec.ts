/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Todo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [TodoService]
    });
  });

  it('should ...', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));
});
