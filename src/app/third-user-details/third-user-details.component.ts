import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third-user-details',
  templateUrl: './third-user-details.component.html',
  styleUrls: ['./third-user-details.component.css']
})
export class ThirdUserDetailsComponent implements OnInit {

  userId = 0;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p.id === 0) {
        this.router.navigate(['not-found']);
      }
      this.userId = p.id;
    });
  }

  save() {
    this.router.navigate(['users']);
  }

}
