// @ts-ignore
import {KeycloakConfig} from 'keycloak-angular';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const keycloakConfig: KeycloakConfig = {
  url: 'https://oop-lab2.herokuapp.com/auth',
  realm: 'Lab-2',
  clientId: 'lab2-front',
  credentials: {
    secret: '9bc97f3f-262f-41c9-b2cb-a12e153e9d80',
  }
};


export const environment = {
  production: true,
  envName: 'local',
  keycloak: keycloakConfig,
  logoutService: 'http://localhost:8180/sso/logout',
  menuService: 'http://localhost:8180/menu/',
  orderService: 'http://localhost:8180/order/',
  receiptService: 'http://localhost:8180/receipt/',
  redeptService: 'http://localhost:8180/redept/',
  partService: 'http://localhost:8180/part/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
