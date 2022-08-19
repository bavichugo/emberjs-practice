import Service from '@ember/service';
import { service } from '@ember/service';

export default class TriviaDataService extends Service {
  @service router;

  questionCounter = 0;
  questions = [];
  correctAnswers = 0;
  totalQuestions = 0;

  async setQuestions(api, totalQuestions) {
    const response = await fetch(api);
    if (!response) {
      console.log('Could not obtain data from the API');
      return;
    }

    const data = await response.json();
    if (!data) {
      console.log('Could not extract data from response');
      return;
    }

    this.totalQuestions = totalQuestions;
    this.questions = data.results;
  }

  updateAnswerAndCount(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
      this.correctAnswers += 1;
    }
    this.questionCounter += 1;

    console.log(this.questionCounter, this.totalQuestions);
    if (+this.questionCounter === +this.totalQuestions) {
      this.router.transitionTo('/results');
      return;
    }
    this.router.transitionTo(`/trivia/${this.questionCounter}`);
  }

  resetGame() {
    this.questionCounter = 0;
    this.questions = [];
    this.correctAnswers = 0;
    this.totalQuestions = 0;
  }
}
