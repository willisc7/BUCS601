import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClockComponent } from './clock/clock.component';
import { Router } from '@angular/router/src/router';
import { LandingComponent } from './landing/landing.component';
import { CommonModule } from '@angular/common';

const routes:Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'clock', component: ClockComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
