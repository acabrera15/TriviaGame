var questionsAndAnswers = [
  {
    question: "To get over Richard, what did Monica start making?",
    correctAnswer: "Jam",
    allAnswer: ["Marmalade", "Pancakes", "Candy", "Jam"]
  },
  {
    question: "What was name of Ross's Monkey?",
    correctAnswer: "Marcel",
    allAnswer: ["Marcel", "Jimmy", "Marvin", "Mercedes"]
  },
  {
    question: "What is the name of Pheobe's sister?",
    correctAnswer: "Ursela",
    allAnswer: ["Danielle", "Marsha", "Penny", "Ursela"]
  },
  {
    question: "What was the name of the coffee shop the dudes went to",
    correctAnswer: "Central Perk",
    allAnswer: ["Starbuddies", "Couch Haven", "Gunther's", "Central Perk"]
  },
  {
    question: "How many sisters does Joseph Tribianni have?",
    correctAnswer: "seven",
    allAnswer: ["four", "tweleve", "one", "seventeen"]
  },
  {
    question: "What did Ross dress up as in the Halloween episode?",
    correctAnswer: "Spudnick",
    allAnswer: ["Spudnick", "A bunny", "A  murse", "A Paleontologist"]
  },
  {
    question: "Who played Rachael's older boyfriend, Paul Stevens?",
    correctAnswer: "Bruce Willis",
    allAnswer: [
      "Bruce Willis",
      "Dwayne 'The Rock' Johnson",
      "Brad Pitt",
      "Tom Selleck"
    ]
  }
];

$(document).ready(function() {
  //creates an array of the quesion array so every play is different
  var randomArrayOfQuestions = randomizeArray(questionsAndAnswers);
  var count = 0;
  var timer = 30;

  //sets up the game when the start button is clicked
  $("#initialButton").on("click", function() {
    $(".buttonRow").remove();

    //adds the questions and the answers to the display
    addRowsToDisplay(count, randomArrayOfQuestions);

    //adds and sets the coundowm timer to the display
    var time = setInterval(function() {
      if (timer >= 0) {
        $(".timer").text(`Time Remaining: ${timer} seconds`);
        timer--;
      }
    }, 1000);
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

var addRowsToDisplay = function(index, arr) {
  $("<div>", {
    class: "row justify-content-center test"
  }).appendTo(".container");

  $("<div>", {
    class: "col-md-10 mb-5 column justify-content-center"
  }).appendTo(".test");

  $(".column").append(
    '<p class="text-center timer">Time Remaining: 30 seconds</p>'
  );

  $(".column").append(`<p class="text-center">${arr[index].question}</p>`);

  arr[index].allAnswer.forEach(answer => {
    $(".column").append(
      `<input
    class="btn btn-primary btn-lg btn-block mb-4 answerButtons"
    id=""
    type="button"
    value="${answer}"
  />`
    );

  });

  $(".answerButtons").on("click", function(e) {
    console.log(e.currentTarget.defaultValue);
    if (e.currentTarget.defaultValue === arr[index].correctAnswer) {
        
    }
  });
};
