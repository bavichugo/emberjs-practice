import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TodoFormComponent extends Component {
  @service todoData;

  @tracked todo = '';

  @action
  addTodoToList(event) {
    event.preventDefault();
    this.todoData.addTodoToList(this.todo);
    this.todo = '';
  }
}
