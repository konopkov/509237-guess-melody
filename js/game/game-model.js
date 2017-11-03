import {getTimer, incrementQuestion, setNotes, getQuestion} from './game-data';
import {ResultTypes} from './game-data';


class GameModel {
  constructor(questions) {
    this.state = {};
    this.state.answers = [];
    this.questions = questions;
  }

  updateState(newState) {
    return Object.assign(this.state, newState);
  }

  cleanState(resultWin = false) {
    const {notesLeft, timeLeft, answers} = this.state;

    if (resultWin) {
      this.state = {notesLeft, timeLeft, answers, result: ResultTypes.WIN};
    } else {
      this.state = {notesLeft, timeLeft, answers, result: ResultTypes.LOOSE};
    }
  }

  incrementQuestionInState() {
    this.state = incrementQuestion(this.state, this.questions);
  }

  tick() {
    const timer = getTimer(this.state.timeLeft);
    this.state.timeLeft = timer.tick().value;
  }

  canMistake() {
    return this.state.notesLeft > 0;
  }

  mistake() {
    if (this.canMistake()) {
      this.state = setNotes(this.state, this.state.notesLeft - 1);
    }
  }

  pushAnswer(answer) {
    this.state.answers.push(answer);
  }

  nextQuestionAvailable() {
    return !!getQuestion(this.questions, this.state.question + 1);
  }
}


export default GameModel;
