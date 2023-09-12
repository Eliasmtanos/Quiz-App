//making a array of questions and its correct answers
const quizData = [
    {
        question:"How old is florin?",
        a:"10",
        b:"20",
        c:"30",
        d:"40",
        correct:"c"
    },
    {
        question:"What is the most used programing language in 2022?",
        a:"java",
        b:"C",
        c:"Python",
        d:"javascript",
        correct:"d"
    },
    {
        question:"Who is the president of the US",
        a:"Dounald Trump",
        b:"Florin pop",
        c:"Ivan Saldano",
        d:"Minai Andrei",
        correct:"a"
    }
];

const quiz = document.getElementById('quiz');
const answerEl = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('al');
const b_text = document.getElementById('bl');
const c_text = document.getElementById('cl');
const d_text = document.getElementById('dl');
const submitBtn = document.querySelector('.sub');
 
// initial an counter to reach the elements of the array
let currentQuiz =0;

let score = 0;


function QuizLoad(){
    deSelectAnswer();
    // getting the current element of the array (the first object here)
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  
}
QuizLoad();

function getSelected(){
    let answer = undefined;

    answerEl.forEach( (answerE) => {
        if(answerE.checked){
            answer = answerE.id;
        }
    });
    return answer;
} 
//removing the same choice of radio button from the next question 
function deSelectAnswer(){
    answerEl.forEach( (answerE) => {
        answerE.checked = false;
    });
}

submitBtn.addEventListener('click', () =>{
    // getting the answer of the question
    const answer = getSelected();

    //if the choice is correct then increase one to the score
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            ++score;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
        QuizLoad();
        }else {
        quiz.innerHTML =`<h2>You answered correctly at ${score} / ${quizData.length} questions.<h2> <button onclick =
        'location.reload()'> Reload </button>`;
        }
    }
});