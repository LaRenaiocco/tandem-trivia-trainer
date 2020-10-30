"use strict"

$('#start').on('click', () => {
    $('#questions').show()
})

$.get('/questions.json', (data) => {
    data.forEach(d => {
        displayQuestion(d)
        displayAnswers(d)
        $('#questionForm').on('submit', (event) => {
            event.preventDefault();
            const checked = $('input[name=answer]:checked').val()
            console.log(`This value: ${checked}`)
        })  
    })
});


//  render question 
function displayQuestion(dictionary) {
    $('#question').text(dictionary['question'])
    // const question = document.createElement('div');
    // question.setAttribute('class', 'question');
    // question.textContent = dictionary['question'];
    // $('#questions').append(question)
};
// compile answer options from incorrect and correct
function compileAnswers(dictionary)  {
    const answerArray = [];
    const incorrect = dictionary['incorrect']
    const correct = dictionary['correct']
    incorrect.forEach(i => {
        answerArray.push(i)
    });
    answerArray.push(correct);
    console.log(` og array: ${answerArray}`);

    return answerArray;
}
//  randomize the answer array
function randomChoice(answerArray) {
    const randomAnswers = [];
    while(answerArray.length > 0) {
        const choice = Math.floor(Math.random() * answerArray.length)
        const answer = answerArray.splice(choice, 1)
        randomAnswers.push(answer)
    }
    console.log(`random array: ${randomAnswers}`)
    return randomAnswers
}

// render answers for question
function displayAnswers(dictionary) {
    const answers = randomChoice(compileAnswers(dictionary))
    // console.log(answers)
    // answers.forEach(a => {
    //     const answer = document.createElement('div')
    //     answer.setAttribute('class', 'answer')
    //     answer.textContent = a;
    //     $('#questions').append(answer)   
    // })
    $('#answerA').text(answers[0])
    $('#answerB').text(answers[1])
    $('#answerC').text(answers[2])
    $('#answerD').text(answers[3])

}

function checkAnswer(form, name) {
    console.log(form)
    console.log(name)
    const radios = form.elements[name];
    console.log(radios)
    radios.forEach(r => {
        if ( r.checked ) {
            const userAnswer = r.value
            console.log(`radio for loop answer: ${userAnswer}`)
            return r.value
        }
        
    })
}
