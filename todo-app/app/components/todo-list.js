import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class TodoListComponent extends Component {
  @service todoData;

  @action
  removeTodo(event) {
    console.log(event.target.value);
    const todoToRemove = event.target.value;
    this.todoData.removeTodo(todoToRemove);
  }
}
