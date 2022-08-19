import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ResultsController extends Controller {
  @service triviaData;

  @action
  resetGameInfo() {
    this.triviaData.resetGame();
  }
}
