import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { firstValueFrom } from 'rxjs';

export const IsAuthGuard: CanMatchFn = async(
  route: Route,
  segments: UrlSegment[]
) => {

  const authService = inject(AuthService)
  const router = inject(Router)

  const isAuthenticated = await firstValueFrom(authService.checkStatus())
  console.log(isAuthenticated)
  if(isAuthenticated === false){
    router.navigate(['/auth'])
    return false
  }

  return true

}
