import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PeopleListComponent extends Component {
    
    @action
    showPerson(person, age) {
        alert(`The person's name is ${person}!`);
    }
}
