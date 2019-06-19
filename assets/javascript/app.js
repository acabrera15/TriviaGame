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
    allAnswer: ["four", "tweleve", "seven", "seventeen"]
  },
  {
    question: "What did Ross dress up as in the Halloween episode?",
    correctAnswer: "Spudnick",
    allAnswer: ["Spudnick", "A bunny", "A  murse", "A Paleontologist"]
  },
  {
    question: "Who played Rachel's older boyfriend, Paul Stevens?",
    correctAnswer: "Bruce Willis",
    allAnswer: [
      "Bruce Willis",
      "Dwayne 'The Rock' Johnson",
      "Brad Pitt",
      "Tom Selleck"
    ]
  },
  {
    question: "What was the name of Pheobe's most popular song?",
    correctAnswer: "Smelly Cat",
    allAnswer: ["Smelly Cat", "Stinky Pup", "Broken Yolk", "Tiny Feets"]
  },
  {
    question: "Who plays one of Rachel's sisters?",
    correctAnswer: "Reese Witherspoon",
    allAnswer: [
      "Reese Witherspoon",
      "Winona Ryder",
      "Dakota Fanning",
      "Ellen Pompeo"
    ]
  },
  {
    question: "What year did Friends end?",
    correctAnswer: "2004",
    allAnswer: ["2004", "1997", "2007", "2000"]
  }
];

var randomizeArray = function(arr) {
  let array2 = [];
  while (arr.length !== 0) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    array2.push(arr[randomIndex]);
    arr.splice(randomIndex, 1);
  }
  return array2;
};

var time;
var count = 0;
var timer = 30;
var randomArrayOfQuestions = randomizeArray(questionsAndAnswers);
var wins = 0;
var losses = 0;

$(document).ready(function() {
  //sets up the game when the start button is clicked
  $("#initialButton").on("click", function() {
    $(".buttonRow").remove();

    //adds the questions and the answers to the display
    addRowsToDisplay(count, randomArrayOfQuestions);

    //adds and sets the coundowmmmmmm timer to the display
    time = setInterval(function() {
      if (timer > 0) {
        $(".timer").text(`Time Remaining: ${timer} seconds`);
        timer--;
      } else if (timer === 0) {
        losses++;
        createLossScreen();
      }
    }, 1000);
  });
});

//adds the rows that have the questions and answers to screen
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

  //adds the functionality for answer buttons to be pushed
  $(".answerButtons").on("click", function(e) {
    console.log(e.currentTarget.defaultValue);
    if (e.currentTarget.defaultValue === arr[index].correctAnswer) {
      //TODO: insert GIF
      createTheYouWonScreen();
      clearInterval(time);
      wins++;
    } else {
      losses++;
      createLossScreen();
      clearInterval(time);
    }
  });
};

var createLossScreen = function() {
  $(".test").remove();

  $(".container").append(
    `<div id="correctAnswerDiv" class="row justify-content-center">
                <div class="col-md-8 justify-content-center">
                    <p class="text-center">That answer was incorrect!</p>
                    <img src="https://via.placeholder.com/150" alt="placeholder" />
               </div>
            </div>`
  );
  console.log(losses);

  setTimeout(function() {
    console.log("hell0?");
    $("#correctAnswerDiv").remove();
    addRowsToDisplay(++count, randomArrayOfQuestions);

    //adds and sets the coundowmmmmmm timer to the display
    timer = 30;
    time = setInterval(function() {
      if (timer > 0) {
        $(".timer").text(`Time Remaining: ${timer} seconds`);
        timer--;
      } else if (timer === 0) {

      }
    }, 1000);
  }, 3000);
};

//populates the display was the content for wins
var createTheYouWonScreen = function() {
  $(".test").remove();

  $(".container").append(
    `<div id="correctAnswerDiv" class="row justify-content-center">
            <div class="col-md-8 justify-content-center">
                <p class="text-center">That was the correct answer!</p>
                <img src="https://via.placeholder.com/150" alt="placeholder" />
           </div>
        </div>`
  );

  setTimeout(function() {
    console.log("hell0?");
    $("#correctAnswerDiv").remove();
    addRowsToDisplay(++count, randomArrayOfQuestions);

    //adds and sets the coundowmmmmmm timer to the display
    timer = 30;
    time = setInterval(function() {
      if (timer > 0) {
        $(".timer").text(`Time Remaining: ${timer} seconds`);
        timer--;
      } else if (timer === 0) {

      }
    }, 1000);
  }, 3000);
};
