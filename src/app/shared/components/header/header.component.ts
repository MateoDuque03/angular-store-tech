import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: ` <mat-toolbar class="main-header" color="primary">
    <a [routerLink]="['/']">Store Technology</a>
    <app-cart class="shopping-cart" (click)="goToCheckout()"></app-cart>
  </mat-toolbar>`,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToCheckout(): void {
    this.router.navigate(['/checkout']);
  }
}
