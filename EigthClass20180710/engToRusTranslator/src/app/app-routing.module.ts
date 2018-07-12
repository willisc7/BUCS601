import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TranslateComponent }   from './translate/translate.component';

const routes: Routes = [
  { path: '', redirectTo: '/translate', pathMatch: 'full' },
  { path: 'translate', component: TranslateComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}