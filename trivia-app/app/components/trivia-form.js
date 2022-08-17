import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class TriviaFormComponent extends Component {
  @service router;
  @service triviaData;

  @tracked numberOfQuestions = 10;
  @tracked difficulty = 'random';

  @action
  async submitHandler(event) {
    event.preventDefault();

    const difficultyForAPI =
      this.difficulty === 'random' ? '' : `&difficulty=${this.difficulty}`;
    const api = `https://opentdb.com/api.php?amount=${this.numberOfQuestions}${difficultyForAPI}&type=multiple`;
    await this.triviaData.setQuestions(api);
    this.router.transitionTo('/trivia/0');
  }

  @action
  difficultyInputHandler(event) {
    this.difficulty = event.target.value;
  }
}
