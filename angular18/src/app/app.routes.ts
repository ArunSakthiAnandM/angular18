import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { SignalsComponent } from './signals/signals.component';
import { PageOneComponent } from './transitions/page-one/page-one.component';
import { PageTwoComponent } from './transitions/page-two/page-two.component';
import { DeferredComponent } from './deferred/deferred.component';

export const routes: Routes = [
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  { path: 'first', component: FirstComponent },
  { path: 'control-flow', component: ControlFlowComponent },
  { path: 'signals', component: SignalsComponent },
  { path: 'page-one', component: PageOneComponent },
  { path: 'page-two', component: PageTwoComponent },
  { path: 'deferred', component: DeferredComponent },
];
