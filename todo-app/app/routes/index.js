import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service auth;

  model() {
    const data = {
      isLoggedIn: this.auth.isLoggedIn,
      pageTitle: this.auth.isLoggedIn ? 'Main' : 'Log In',
    };
    return data;
  }
}
