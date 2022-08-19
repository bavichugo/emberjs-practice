import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class TriviaRoute extends Route {
  @service triviaData;

  model(params) {
    const { question_id } = params;
    const data = this.triviaData.questions[question_id];

    const shuffleArray = (array) => {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    };

    const options = [...data.incorrect_answers, data.correct_answer];
    shuffleArray(options);
    const finalObj = {
      ...data,
      question: data.question.replaceAll('&quot;', '"'),
      options,
    };

    console.log('finalObj', finalObj);
    return finalObj;
  }
}
