'use strict';

let objQuestionsAnswersFromJson = JSON.parse(localStorage.getItem('objQuestionsAnswers'));
   
function programingTestTemplate() {

    let firstQuestion = objQuestionsAnswers.firstQuestion.question;
    let secondQuestion = objQuestionsAnswers.secondQuestion.question;
    let thirdQuestion = objQuestionsAnswers.thirdQuestion.question;

    let firstQuestionAnswerOne = objQuestionsAnswers.firstQuestion.answerOne;
    let firstQuestionAnswerTwo = objQuestionsAnswers.firstQuestion.answerTwo;
    let firstQuestionAnswerThree = objQuestionsAnswers.firstQuestion.answerThree;

    let secondQuestionAnswerOne = objQuestionsAnswers.secondQuestion.answerOne;
    let secondQuestionAnswerTwo = objQuestionsAnswers.secondQuestion.answerTwo;
    let secondQuestionAnswerThree = objQuestionsAnswers.secondQuestion.answerThree;

    let thirdQuestionAnswerOne = objQuestionsAnswers.thirdQuestion.answerOne;
    let thirdQuestionAnswerTwo = objQuestionsAnswers.thirdQuestion.answerTwo;
    let thirdQuestionAnswerThree = objQuestionsAnswers.thirdQuestion.answerThree;
      
    let testTemplate = document.getElementById("test-template").innerHTML;
    //create template function
    let templateFn = _.template(testTemplate);
    
    let divMain = document.getElementById("main");
    
    let templateHTML = templateFn({ 'firstQuestion': firstQuestion, 
                                    'secondQuestion': secondQuestion, 
                                    'thirdQuestion': thirdQuestion,
                                    'firstQuestionAnswerOne': firstQuestionAnswerOne,
                                    'firstQuestionAnswerTwo': firstQuestionAnswerTwo,
                                    'firstQuestionAnswerThree': firstQuestionAnswerThree,

                                    'secondQuestionAnswerOne': secondQuestionAnswerOne,
                                    'secondQuestionAnswerTwo': secondQuestionAnswerTwo,
                                    'secondQuestionAnswerThree': secondQuestionAnswerThree,

                                    'thirdQuestionAnswerOne': thirdQuestionAnswerOne,
                                    'thirdQuestionAnswerTwo': thirdQuestionAnswerTwo,
                                    'thirdQuestionAnswerThree': thirdQuestionAnswerThree, });
    
    divMain.innerHTML = templateHTML;
  };

  
 