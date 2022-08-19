import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class TriviaGameQuestionComponent extends Component {
  @service triviaData;

  @action
  answerClickedHandler(event) {
    const { model } = this.args;
    const userAnswer = event.target.innerHTML;
    const correctAnswer = model.correct_answer;
    this.triviaData.updateAnswerAndCount(userAnswer, correctAnswer);
  }
}
