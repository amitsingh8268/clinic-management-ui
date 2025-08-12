import { CanActivateFn, CanDeactivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  return true;
};
