import EmberRouter from '@ember/routing/router';
import config from 'github-profile-searcher/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('user-profile', { path: '/user-profile/:user_id' });
});
