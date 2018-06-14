
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MainAppConfig } from 'src/app/MainAppConfig';



@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router ) {
    }

/**
 * Check
 * @param route
 * @param state
 */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('Auth gard');
            let key =   localStorage.getItem(MainAppConfig.TOKEN_KEY);

        if (key) {
            console.log('Auth gard key :' + key);
                return true;
        } else {
            this.router.navigate(['/login']);
        }

        return false;
    }

    /**
     * Check if token is valid
     * @return boolean => is valid true : false
     */
    checkToken(): boolean {
            return true;
    }

 
}