import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @service router;
  @tracked username = '';

  @action
  async searchUser(event) {
    event.preventDefault();
    this.router.transitionTo(`/user-profile/${this.username}`);
  }

  @action
  setUsername(event) {
    // Find a way to use href as well, that way you wont need tracked
    this.username = event.target.value;
  }
}
