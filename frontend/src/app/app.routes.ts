import { Routes } from '@angular/router';
import { PasswordTestComponent } from './password-test/password-test.component';

export const routes: Routes = [
  { path: '', component: PasswordTestComponent },
  { path: '**', redirectTo: '' },
];
