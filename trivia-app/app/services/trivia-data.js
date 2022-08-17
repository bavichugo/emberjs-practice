import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TriviaDataService extends Service {
  questionCounter = 0;
  questions = [];
  correctAnswers = 0;

  async setQuestions(api) {
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

    this.questions = data.results;
    console.log(this.questions);
  }
}
