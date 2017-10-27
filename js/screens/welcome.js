import switchAppScreen from '../util/switch-app-screen';
import WelcomeView from './welcome-view';
import changeQuestion from '../game';
import {initialState, screens} from "../data/state-data";

const welcome = (state) => {
  const welcomeView = new WelcomeView(state);

  welcomeView.onStart = () => {

    const nextScreen = screens[state.screen].destination;

    const nextState = Object.assign({}, state, {
      'screen': nextScreen,
      'question': initialState.question,
      'notesLeft': initialState.notesLeft,
      'timeLeft': initialState.timeLeft,
      'answers': initialState.answers
    });
    switchAppScreen(changeQuestion(nextState));
  };

  return welcomeView;
};

export default (state) => welcome(state);