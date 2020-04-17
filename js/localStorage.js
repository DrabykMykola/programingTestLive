'use strict';

let objQuestionsAnswers = {
    firstQuestion: {
        question: 'JS stands for:',
        answerOne: 'JavaScript',
        answerTwo: 'JohnSnow',
        answerThree: 'JustSleep'
    },
    secondQuestion: {
        question: 'What will bring alert(typeof null)?',
        answerOne: 'typeof null',
        answerTwo: 'null',
        answerThree: 'object'
    }, 
    thirdQuestion: {
        question: 'What will bring alert(Nan === Nan)?',
        answerOne: 'true',
        answerTwo: 'false',
        answerThree: 'Nan'
    }
};

let objQuestionsAnswersToJson = JSON.stringify(objQuestionsAnswers);
localStorage.setItem('objQuestionsAnswers', objQuestionsAnswersToJson);



