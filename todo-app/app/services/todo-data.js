import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TodoDataService extends Service {
  @tracked todoList = ['Todo List 1', 'Todo List 2', 'Todo List 3', 'Eat food'];

  addTodoToList(todo) {
    const newArr = [...this.todoList, todo];
    this.todoList = newArr;
  }

  removeTodo(todoToRemove) {
    const newArr = this.todoList.filter((todo) => todo !== todoToRemove);
    this.todoList = newArr;
  }
}
