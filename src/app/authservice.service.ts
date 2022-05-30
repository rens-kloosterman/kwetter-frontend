import { Injectable } from '@angular/core';
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";

export const authCodeFlowConfig: AuthConfig = {
  // URL of identity provider. https://<YOUR_DOMAIN>.auth0.com
  issuer: 'https://dev-f32d4z1k.us.auth0.com/',
  redirectUri: window.location.origin,
  clientId: 'DLTTSJAXkWWN3qhLWcXWXCQhDUeBCTDc',
  responseType: 'code',
  scope: 'openid profile admin',
  showDebugInformation: true,
  silentRefreshRedirectUri: window.location.origin,
  useSilentRefresh: true,
  customQueryParams: {
    /**
     * replace with your API-Audience
     * This is very important to retrieve a valid access_token for our API
     * */
    audience: 'http://localhost:4200',
  },
};


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private oauth: OAuthService) {
    this.oauth.configure(authCodeFlowConfig);
    this.oauth.loadDiscoveryDocumentAndTryLogin();
    this.oauth.setupAutomaticSilentRefresh();
  }

  login(): void {
    this.oauth.initLoginFlow();
  }
}
