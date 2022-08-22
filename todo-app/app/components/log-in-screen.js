import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LogInScreenComponent extends Component {
  @tracked email = '';
  @tracked password = '';

  @action
  logInHandler(event) {
    event.preventDefault();

    // Handle the login information here
  }
}
