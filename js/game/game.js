import {questionTypes, initialState} from '../data/state-data';
import switchAppScreen from '../util/switch-app-screen';
import timeConverter from '../util/time-converter';

import GameModel from './game-model';

import HeaderView from '../header/header-view';
import GameArtistView from './game-artist-view';
import GameGenreView from './game-genre-view';

import App from '../application';


const getView = (questions, state) => {

  const header = new HeaderView(state);

  switch (questions[state.question].type) {

    case questionTypes.QUESTION_ARTIST:

      return new GameArtistView(header, questions[state.question]);

    case questionTypes.QUESTION_GENRE:

      return new GameGenreView(header, questions[state.question]);

  }

  throw new Error(`Unknown question type ${questions[state.question].type}`);

};


class GameScreen {

  init(state = initialState) {
    this.model = new GameModel(state);
    this.changeQuestion(false);
  }


  changeQuestion(incrementQuestion = true) {

    if (incrementQuestion) {
      this.model.nextQuestionScreen();
    }
    this.level = getView(this.model.questions, this.model.state);
    const startedTime = this.model.state.timeLeft;

    this.stopTimer();

    this.level.onAnswer = (isCorrect) => {

      if (!isCorrect) {
        this.model.mistake();
      }

      this.model.pushAnswer([+isCorrect, startedTime - this.model.state.timeLeft]);

      // Если попытки кончились или вопросов больше нет - переход на экран результата
      if (this.model.state.notesLeft <= 0 || !this.model.nextQuestionAvailable()) {
        this.model.cleanState();
        App.result(this.model.state);
      } else {
        switchAppScreen(this.level);
        this.changeQuestion();
      }
    };

    switchAppScreen(this.level);

    this.tick();
  }

  tick() {
    this.model.tick();
    const timeInfo = timeConverter(this.model.state.timeLeft);
    this.level.updateTime(timeInfo.minutesLeft, timeInfo.secondsLeft);

    this.timer = setTimeout(() => this.tick(), 1000);

    // Если время вышло - переход на экран результата
    if (this.model.state.timeLeft <= 0) {
      this.stopTimer();
      this.model.cleanState();
      App.result(this.model.state);
    }
  }

  stopTimer() {
    clearTimeout(this.timer);
  }
}

export default new GameScreen();
