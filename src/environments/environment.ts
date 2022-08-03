export const  environment = {
  production: false,

  auth: {
    clientId: "144",
    authorizationServer: "https://ac.***REMOVED***.ru/oauth/authorize",
    redirectUrl: "https://localhost.***REMOVED***.ru:42071/oauth2/callback",
    serverUrl: "https://vm713.***REMOVED***.ru:24066/auth/token",
    appName: "nomenclature-ui (dev)",
    jwtOptions: {
      allowedDomains: ['vm713.***REMOVED***.ru:24066'],
      disallowedRoutes: []
    }
  },

  apiUrl: "https://vm713.***REMOVED***.ru:24066"
};
