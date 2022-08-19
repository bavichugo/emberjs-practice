import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ResultsRoute extends Route {
  @service triviaData;

  model() {
    const data = {
      correctAnswers: this.triviaData.correctAnswers,
      totalQuestions: this.triviaData.totalQuestions,
    };
    console.log(data);
    return data;
  }
}
