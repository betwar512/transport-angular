import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MainAppConfig } from './MainAppConfig';
/**
 * Main intercept class
 * added in appModule
 */

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // console.log('Intercept');
    //  const  authReq: HttpRequest<any> =  req.clone( {headers : this.getHeaderAuth(req.headers)} );
      return next.handle(req);
  }
/**
 *
 * @param reqHeader Create Oauth Header
 **/
  private getHeaderAuth(reqHeader: HttpHeaders): HttpHeaders {
    let headerAuth: HttpHeaders = reqHeader;
    headerAuth =  headerAuth.append('Access-Control-Allow-Credentials', 'true');
    const currentUser = JSON.parse(localStorage.getItem(MainAppConfig.TOKEN_KEY));

    if (currentUser && currentUser.access_token) {

        headerAuth = headerAuth.append( 'Authorization', 'Bearer ' + currentUser.access_token );
        } else {
          headerAuth = headerAuth.append('Access-Control-Allow-Credentials', 'true');
          headerAuth = headerAuth.append('content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
          //   headers.append('Access-Control-Allow-Origin','*');
          headerAuth = headerAuth.append('Authorization', ' Basic' + ' ');
        }
    // console.log(headerAuth.keys());
    return headerAuth;
  }


private createGalaxyHeader(reqHeader: HttpHeaders): HttpHeaders{
    // siteinterface="ANDROID";

    // hashcode   = null;
    // apptype    = BuildConfig.APPLICATION_ID;
    // osversion  = Build.VERSION.INCREMENTAL;
    // appversion = BuildConfig.VERSION_NAME;
    // phonemodel = Build.MODEL;
    //   deviceid   = "";
    // devicename = Build.BRAND  + " " + Build.MODEL;


    let headerAuth: HttpHeaders = reqHeader;
    headerAuth =  headerAuth.append('Access-Control-Allow-Credentials', 'true');

     return headerAuth;
}

}
