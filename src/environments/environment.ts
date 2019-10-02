// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backend: {
    host: 'local.k8cluster.io',
    basePath: 'api',
    defaultJwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1Njg0NDMwMzUsImV4cCI6MTU5OTk3OTAzNSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkFtaXQiLCJTdXJuYW1lIjoiS3NoaXJzYWdhciIsIkVtYWlsIjoiYW1pdC5rc2hpcnNhZ2FyLjEzQGdtYWlsLmNvbSIsIlJvbGUiOlsiQWRtaW4iLCJDRU8iXX0.kGTAnKis7k30Y4K6tvDor7Y6tRkfzQaunlMIoVzC8gc'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
