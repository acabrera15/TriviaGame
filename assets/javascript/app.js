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

var arrayOfFriendsGif = [
  "https://media1.giphy.com/media/JPsFUPp3vLS5q/200.gif?cid=b9cc065e5d0d791f59484a76737d189c&rid=200.gif",
  "https://media1.giphy.com/media/31lPv5L3aIvTi/200.gif?cid=b9cc065e5d0d791f59484a76737d189c&rid=200.gif",
  "https://media2.giphy.com/media/SGkufeMafyuBhIw796/200.gif?cid=b9cc065e5d0d791f59484a76737d189c&rid=200.gif",
  "https://media1.giphy.com/media/HGEiJZcovtb1e/200.gif?cid=b9cc065e5d0d791f59484a76737d189c&rid=200.gif",
  "https://media0.giphy.com/media/lfmYxOkGpNtEk/200.gif?cid=b9cc065e5d0d791f59484a76737d189c&rid=200.gif",
  "https://media3.giphy.com/media/KL7xA3fLx7bna/200.gif?cid=b9cc065e5d0d791f59484a76737d189c&rid=200.gif",
  "https://media0.giphy.com/media/NERY7uUYtur4Y/200.gif?cid=b9cc065e5d0d791f59484a76737d189c&rid=200.gif",
  "https://media1.giphy.com/media/KiaU2EUyxjQB2/200.gif?cid=b9cc065e5d0d791f59484a76737d189c&rid=200.gif",
  "https://media0.giphy.com/media/pPr0e5tqtCwTe/200.gif?cid=b9cc065e5d0d791f59484a76737d189c&rid=200.gif",
  "https://media2.giphy.com/media/ld1RKulOqeeaI/200.gif?cid=b9cc065e5d0d791f59484a76737d189c&rid=200.gif",
  "https://media0.giphy.com/media/ccosx2jCejdew/200.gif?cid=b9cc065e5d0d791f59484a76737d189c&rid=200.gif"
]


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
var timer = 15;
var randomArrayOfQuestions = randomizeArray(questionsAndAnswers);
var wins = 0;
var losses = 0;

$(document).ready(function() {
  // getGifs();

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
        clearInterval(time);
      }
    }, 1000);
  });
});

//adds the rows that have the questions and answers to screen
var addRowsToDisplay = function(index, arr) {
  var isDone = false;
  if (index === arr.length) {
    isDone = true;
    $("<div>", {
      class: "row justify-content-center test"
    }).appendTo(".container");

    $("<div>", {
      class: "col-md-10 mb-5 column justify-content-center"
    }).appendTo(".test");

    $(".column").append(
      `<p class="text-center timer">correct: ${wins}</p>`

    );
    $(".column").append(
      `<p class="text-center timer">losses: ${losses}</p>`
    );

  } else {
    $("<div>", {
      class: "row justify-content-center test"
    }).appendTo(".container");

    $("<div>", {
      class: "col-md-10 mb-5 column justify-content-center"
    }).appendTo(".test");

    $(".column").append(
      '<p class="text-center timer">Time Remaining: 15 seconds</p>'
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
  }
  return isDone;
};

var createLossScreen = function() {
  $(".test").remove();
  var gifAddress = "https://media.giphy.com/media/UUVqDm2xhyU36/giphy.gif";

  $(".container").append(
    `<div id="correctAnswerDiv" class="row justify-content-center">
                <div class="col-md-8 justify-content-center">
                    <p class="text-center">That answer was incorrect!</p>
                    <img class="rounded mx-auto d-block mb-5" src="${gifAddress}" alt="friends-Gif" />
                    </div>
            </div>`
  );
  console.log(losses);

  setTimeout(function() {
    $("#correctAnswerDiv").remove();
    var isDone = addRowsToDisplay(++count, randomArrayOfQuestions);

    if (!isDone) {
          //adds and sets the coundowmmmmmm timer to the display
    timer = 15;
    time = setInterval(function() {
      if (timer > 0) {
        $(".timer").text(`Time Remaining: ${timer} seconds`);
        timer--;
      } else if (timer === 0) {
        losses++;
        createLossScreen();
        clearInterval(time);
      }
    }, 1000);
    }

  }, 3000);
};

//populates the display was the content for wins
var createTheYouWonScreen = function() {
  $(".test").remove();

  var randomNum = Math.floor(Math.random() * 10);

  $(".container").append(
    `<div id="correctAnswerDiv" class="row justify-content-center">
            <div class="col-md-8 justify-content-center">
                <p class="text-center">That was the correct answer!</p>
                <img class="rounded mx-auto d-block mb-5" src="${arrayOfFriendsGif[randomNum]}" alt="friends-Gif" />
           </div>
        </div>`
  );

  setTimeout(function() {
    console.log("hell0?");
    $("#correctAnswerDiv").remove();
     var isDone = addRowsToDisplay(++count, randomArrayOfQuestions);

     if (!isDone) {
    //adds and sets the coundowmmmmmm timer to the display
    timer = 15;
    time = setInterval(function() {
      if (timer > 0) {
        $(".timer").text(`Time Remaining: ${timer} seconds`);
        timer--;
      } else if (timer === 0) {
      }
    }, 1000);
     }

  }, 3000);
};


