import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

constructor(private http: HttpClient) { }

add(todo) {
  return this.http.post('...', todo).pipe( map(r => JSON.parse(r.toString())));
}

getTodos() {
  return this.http.get('...').pipe( map(r => JSON.parse(r.toString())));
}

getTodosPromise() {
  return this.http.get('...').pipe( map(r => JSON.parse(r.toString()))).toPromise();
}

delete(id) {
  return this.http.delete('...').pipe( map(r => JSON.parse(r.toString())));
}

}
