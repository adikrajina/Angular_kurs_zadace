import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cm-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToHomepage() {
    this.router.navigate(['']);
  }

  goBack() {
    window.history.back();
  }
}
