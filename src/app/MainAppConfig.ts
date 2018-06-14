

function makeAppConfig() {
    const date = new Date();
    const year = date.getFullYear();

    const AppConfig = {
        apptype:'au.com.ozpol.transport',
        osversion:'angular-6',
        appversion:'1.0.0',
        AutoCloseMobileNav: true,                       // true, false. Automatically close sidenav on route change (Mobile only)
        fullpath :"https:\\/\\/www.speedytravel.com.au\\/",
        devicename:'browser-angular-app'
    };

    return AppConfig;
}

export const APPCONFIG = makeAppConfig();


export class MainAppConfig {
    public static              API =   'http://localhost:443';
    public static        CLIENT_ID =   '' ;
    public static   GOOGLE_API_KEY =   'AIzaSyC0issMIvDUUJGO-_SkOakauyChv6wyTP8' ;
    public static        TOKEN_KEY =   'currentUser';
}
