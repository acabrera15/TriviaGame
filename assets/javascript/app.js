var questionsAndAnswers = [
  {
    question: "To get over Richard, what did Monica start making?",
    correctAnswer: "jam",
    allAnswer: ["Marmalade", "Pancakes", "Candy", "Jam"]
  },
  {
    question: "Where was the 'Aroma' room?",
    correctAnswer: "12",
    allAnswer: ["1", "", "", ""]
  },
  {
    question: "Where was the 'Aroma' room?",
    correctAnswer: "13",
    allAnswer: ["1", "", "", ""]
  },
  {
    question: "Where was the 'Aroma' room?",
    correctAnswer: "14",
    allAnswer: ["1", "", "", ""]
  },
  {
    question: "Where was the 'Aroma' room?",
    correctAnswer: "15",
    allAnswer: ["1", "", "", ""]
  },
  {
    question: "Where was the 'Aroma' room?",
    correctAnswer: "16",
    allAnswer: ["1", "", "", ""]
  },
  {
    question: "Where was the 'Aroma' room?",
    correctAnswer: "17",
    allAnswer: ["1", "", "", ""]
  }
];

$(document).ready(function() {
  //creates an array of the quesion array so every play is different
  var randomArrayOfQuestions = randomizeArray(questionsAndAnswers);

  $("#initialButton").on("click", function() {
    $(".buttonRow").remove();

    $("<div>", {
      class: "row justify-content-center test"
    }).appendTo(".container");


    $("<div>", {
        class: "col-md-10 mb-5 column"
      }).appendTo(".test");

      $('.column').append('<p>Time Remaining: 30 seconds</p>');
    });

});

var randomizeArray = function(arr) {
  let array2 = [];
  while (arr.length !== 0) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    array2.push(arr[randomIndex]);
    arr.splice(randomIndex, 1);
  }
  return array2;
};
