let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Was bedeutet CSS?",
    answer_1: "Cascading Style Sheets",
    answer_2: "Cascading Super Sheets",
    answer_3: "Cars SUVs Sailboats",
    answer_4: "Cascading Sailor Scouts",
    right_answer: 1,
  },
  {
    question:
      "Wie heißt die Programmiersprache, die im Web am meisten verwendet wird?",
    answer_1: "Java",
    answer_2: "C",
    answer_3: "Python",
    answer_4: "JavaScript",
    right_answer: 4,
  },
  {
    question: "Was ist kein JavaScript-Framework?",
    answer_1: "React",
    answer_2: "Vue",
    answer_3: "Angular",
    answer_4: "Django",
    right_answer: 4,
  },
  {
    question: "Was ist die Hauptstadt von Deutschland?",
    answer_1: "Berlin",
    answer_2: "München",
    answer_3: "Hamburg",
    answer_4: "Köln",
    right_answer: 1,
  },
  {
    question: "Welcher Planet ist der größte in unserem Sonnensystem?",
    answer_1: "Erde",
    answer_2: "Mars",
    answer_3: "Jupiter",
    answer_4: "Saturn",
    right_answer: 3,
  },
  {
    question: "Was ist die größte Wüste der Welt?",
    answer_1: "Sahara",
    answer_2: "Arabische Wüste",
    answer_3: "Gobi",
    answer_4: "Kalahari",
    right_answer: 1,
  },
];

let rightQuestions = 0;

let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio("sounds/success.mp3");
let AUDIO_FAIL = new Audio("sounds/fail.mp3");

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
  if (gameIsOver()) {
      showEndScreen();
  } else {
      updateProgressBar();
      updateToNextQuestion();
  }
}

function gameIsOver(){
  return currentQuestion >= questions.length;
}

function showEndScreen (){
    document.getElementById("endScreen").style = "";
    document.getElementById("questionBody").style = "display: none";
    document.getElementById("amount-of-questions").innerHTML = questions.length;
    document.getElementById("amount-of-right-questions").innerHTML = rightQuestions;
    document.getElementById("header-image").src = "Quizapp/brain_result.png";
}

function updateProgressBar(){
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById("progress-bar").innerHTML = `${percent} %`;
    document.getElementById("progress-bar").style = `width: ${percent}%`;
}

function updateToNextQuestion(){
   

    let question = questions[currentQuestion];

    document.getElementById("question-number").innerHTML = currentQuestion + 1;
    document.getElementById("questionText").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (rightAnswerSelected(selectedQestionNumber)) {// Richtige Frage beantwortet
    document.getElementById(selection).parentNode.classList.add("bg-success");
    AUDIO_SUCCESS.play();
    rightQuestions++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
      AUDIO_FAIL.play();
  }
  document.getElementById("next-button").disabled = false;
}

function rightAnswerSelected(selectedQestionNumber){
  let question = questions[currentQuestion];
  return selectedQestionNumber == question["right_answer"];
}

function nextQuestion() {
  currentQuestion++; // Z.b von 0 auf 1 erhöhen
  document.getElementById("next-button").disabled = true;
  resetAnswersButtons();
  showQuestion();
}

function resetAnswersButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

function restartGame() {
  document.getElementById("header-image").src = "img/pencil.jpg";
  document.getElementById("questionBody").style = ""; // Show question body
  document.getElementById("endScreen").style = "display: none"; // Hide end screen
  rightQuestions = 0;
  currentQuestion = 0;
  resetAnswersButtons();
  showQuestion();
  init();
}
