import musicData from './music-data';

const INIT_NOTES = 3;
const INIT_TIME = 300;

const initialState = {
  screen: `welcome`,
  question: 0,
  notesLeft: INIT_NOTES,
  timeLeft: INIT_TIME,
  statistics: [],
  answers: [],

  get timeSpend() {
    return INIT_TIME - this.timeLeft;
  },

  get minutesLeft() {
    return Math.floor(this.timeLeft / 60);
  },

  get secondsLeft() {
    return this.timeLeft - this.minutesLeft * 60;
  },

  get minutesSpend() {
    return Math.floor(this.timeSpend / 60);
  },

  get secondsSpend() {
    return this.timeSpend - this.minutesSpend * 60;
  }
};

const questionTypes = {

  QUESTION_ARTIST: `levelArtist`,
  QUESTION_GENRE: `levelGenre`
};

const screenTypes = {
  SCREEN_WELCOME: `screenWelcome`,
  SCREEN_GAME: `screenGame`,
  SCREEN_RESULT: `screenResult`
};

const screens = {
  'welcome': {
    type: screenTypes.SCREEN_WELCOME,
    destination: `game`
  },
  'game': {
    type: screenTypes.SCREEN_GAME,
    destination: `result`
  },
  'result': {
    type: screenTypes.SCREEN_RESULT,
    destination: `welcome`
  }
};

const questions = [
  {
    type: questionTypes.QUESTION_ARTIST,
    title: `Кто исполняет эту песню?`,
    answers: [
      {
        isCorrect: true,
        track: musicData[0]
      },
      {
        isCorrect: false,
        track: musicData[1]
      },
      {
        isCorrect: false,
        track: musicData[2]
      }
    ]
  },
  {
    type: questionTypes.QUESTION_GENRE,
    title: `Выберите инди-рок треки`,
    answers: [
      {
        isCorrect: true,
        track: musicData[0]
      },
      {
        isCorrect: false,
        track: musicData[1]
      },
      {
        isCorrect: false,
        track: musicData[2]
      },
      {
        isCorrect: false,
        track: musicData[3]
      }
    ]
  },
  {
    type: questionTypes.QUESTION_ARTIST,
    title: `Кто исполняет эту песню?`,
    answers: [
      {
        isCorrect: true,
        track: musicData[0]
      },
      {
        isCorrect: false,
        track: musicData[1]
      },
      {
        isCorrect: false,
        track: musicData[2]
      }
    ]
  },
  {
    type: questionTypes.QUESTION_GENRE,
    title: `Выберите инди-рок треки`,
    answers: [
      {
        isCorrect: true,
        track: musicData[0]
      },
      {
        isCorrect: false,
        track: musicData[1]
      },
      {
        isCorrect: false,
        track: musicData[2]
      },
      {
        isCorrect: false,
        track: musicData[3]
      }
    ]
  },
  {
    type: questionTypes.QUESTION_ARTIST,
    title: `Кто исполняет эту песню?`,
    answers: [
      {
        isCorrect: true,
        track: musicData[0]
      },
      {
        isCorrect: false,
        track: musicData[1]
      },
      {
        isCorrect: false,
        track: musicData[2]
      }
    ]
  },
  {
    type: questionTypes.QUESTION_GENRE,
    title: `Выберите инди-рок треки`,
    answers: [
      {
        isCorrect: true,
        track: musicData[0]
      },
      {
        isCorrect: false,
        track: musicData[1]
      },
      {
        isCorrect: false,
        track: musicData[2]
      },
      {
        isCorrect: false,
        track: musicData[3]
      }
    ]
  },
  {
    type: questionTypes.QUESTION_ARTIST,
    title: `Кто исполняет эту песню?`,
    answers: [
      {
        isCorrect: true,
        track: musicData[0]
      },
      {
        isCorrect: false,
        track: musicData[1]
      },
      {
        isCorrect: false,
        track: musicData[2]
      }
    ]
  },
  {
    type: questionTypes.QUESTION_GENRE,
    title: `Выберите инди-рок треки`,
    answers: [
      {
        isCorrect: true,
        track: musicData[0]
      },
      {
        isCorrect: false,
        track: musicData[1]
      },
      {
        isCorrect: false,
        track: musicData[2]
      },
      {
        isCorrect: false,
        track: musicData[3]
      }
    ]
  },
  {
    type: questionTypes.QUESTION_ARTIST,
    title: `Кто исполняет эту песню?`,
    answers: [
      {
        isCorrect: true,
        track: musicData[0]
      },
      {
        isCorrect: false,
        track: musicData[1]
      },
      {
        isCorrect: false,
        track: musicData[2]
      }
    ]
  },
  {
    type: questionTypes.QUESTION_GENRE,
    title: `Выберите инди-рок треки`,
    answers: [
      {
        isCorrect: true,
        track: musicData[0]
      },
      {
        isCorrect: false,
        track: musicData[1]
      },
      {
        isCorrect: false,
        track: musicData[2]
      },
      {
        isCorrect: false,
        track: musicData[3]
      }
    ]
  }
];


export {initialState, screens, screenTypes, questions, questionTypes};