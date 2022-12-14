import EmberRouter from '@ember/routing/router';
import config from 'trivia-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('trivia', { path: '/trivia/:question_id' });
  this.route('results');
});
