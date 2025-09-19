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

let currentQuestion = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
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

  if (selectedQestionNumber == question["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
  }
   document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++; // Z.b von 0 auf 1 erhöhen
  showQuestion();
}
