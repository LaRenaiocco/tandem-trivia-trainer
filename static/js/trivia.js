"use strict"

let SCORE = 0;
let jsonQs;
let current = 0;


$('#start').on('click', () => {
    $.get('/questions.json', (data) => {
        jsonQs = data;
        startQuiz()
    });
});

// shifts DOM and starts quiz
function startQuiz() {
    const banner = document.createElement('img')
    banner.src = '/static/images/banner.png'
    $('#logodiv').append(banner)
    $('#logo').hide()
    $('#welcome').hide()
    $('#start').hide()
    generateQuestion(current);
}

// Generates question to appear and recursively calls each question until 10
function generateQuestion(num) {
    const dict = jsonQs[num];
    const answers = randomChoice(compileAnswers(dict));
    createForm(dict, answers);
    $('#questionForm').on('submit', (event) => {
        event.preventDefault();
        const userAnswer = $('input[name=answer]:checked').val();
        checkAnswerText(dict, checkAnswer(userAnswer));
        current += 1;
        if ( current < jsonQs.length) {
            $('#questionForm').remove();
            generateQuestion(current)
        } else {
            $('#questionForm').remove();
            gameOver(SCORE)
        };
    });
};

// creates form for current question
function createForm(dictionary, answers) {
    $("#questions").append(
    $("<form/>", { id: 'questionForm', action: '/', method: 'POST'}).append(
    $("<div>", {class: "question", text: dictionary['question']}),
    $("<br/>"),
    $("<input/>", {type: 'radio', id: 'inputA', name: 'answer', value: 'A', required: 'true'}),
    $("<span>", {id: 'answerA', text: `${answers[0]}`}), 
    $("<br/>"),
    $("<input/>", {type: 'radio', id: 'inputB', name: 'answer', value: 'B'}), 
    $("<span>", {id: 'answerB', text: `${answers[1]}`}), 
    $("<br/>"),
    $("<input/>", {type: 'radio', id: 'inputC', name: 'answer', value: 'C'}), 
    $("<span>", {id: 'answerC', text: `${answers[2]}`}), 
    $("<br/>"),
    $("<input/>", {type: 'radio', id: 'inputD', name: 'answer', value: 'D'}), 
    $("<span>", {id: 'answerD', text: `${answers[3]}`}), 
    $("<br/>"), $("<br/>"),
    $("<input/>", {type: 'submit', class: ' btn btn-lg button', id: 'submit', value: 'Submit'}),
    ));
};
// class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm"
// compile answer options from incorrect and correct in question dictionary
function compileAnswers(dictionary)  {
    const answerArray = [];
    const incorrect = dictionary['incorrect'];
    const correct = dictionary['correct'];
    incorrect.forEach(i => {
        answerArray.push(i)
    });
    answerArray.push(correct);
    return answerArray;
};

//  randomize the answer array
function randomChoice(answerArray) {
    const randomAnswers = [];
    while(answerArray.length > 0) {
        const choice = Math.floor(Math.random() * answerArray.length)
        const answer = answerArray.splice(choice, 1)
        randomAnswers.push(answer)
    };
    return randomAnswers;
};

// Get span text information for user answer
function checkAnswer(userAnswer) {
    if (userAnswer === 'A') {
        return $('#answerA').text()
    } else if (userAnswer === 'B') {
        return $('#answerB').text()
    } else if (userAnswer === 'C') {
        return $('#answerC').text()
    } else if (userAnswer === 'D') {
        return $('#answerD').text()
    };
};

// check if user answer is correct
function checkAnswerText(dictionary, answer) {
    if (answer === dictionary['correct']) {
        alert('You are correct');
        SCORE += 1;
    } else {
        alert(`You are incorrect. The correct answer is: ${dictionary['correct']}`)
    };
};

function gameOver(SCORE) {
    $('#closing').show()
    const message = document.createElement('h1')
    const score = document.createElement('h2')
    const thanks = document.createElement('div')
    message.innerText = 'Game Over'
    score.innerText = `You got ${SCORE}/10 correct!`
    thanks.innerText = 'Thanks for playing!'
    $('#gameover').append(message)
    $('#gameover').append(score)
    $('#gameover').append(thanks)
}