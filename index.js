
var readLineSync=require("readline-sync");
var chalk=require("chalk");
var score=0;
var userName=readLineSync.question("Hello! Enter your name :\n->");
console.log(chalk.blue("\n Hi", userName + ", here's a quiz on INDIAN CRICKET. Just type the correct option number.\n" ));


function play(question,answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.green("\nYou're right!"));
    score=score+1;
  }
  else{
    console.log(chalk.red("\nYou're wrong!"));
    console.log(chalk.green("The correct option is", answer))
  }
  console.log(chalk.cyan("Your current score is : "+score));
  console.log(chalk.grey.bold("\n------------------------\n"));
  
}

//  array of highscores 
var highScores=[{
  name:"Abhishek",
  score:10
},{
  name:"Utkarsh",
  score:8
}
]

// an array of questions is created
var questions = [{
  question:"1) This stadium is the oldest cricket ground in India, also called Lord's of Asia. India set a record for the highest Test score on this ground when they made 657-7 against Australia during the Series in 2000-01. Where was it?\nA)Jawaharlal Nehru Commonwealth Stadium, New Delhi.\nB) Eden Gardens Cricket Stadium, Kolkata\nC)Narendra Modi Stadium\n-->",
  answer:"B"
},{
  question:"2)What is the name of the trophy awarded in India-Australia test series?\nA) Border-Gavaskar Trophy\nB)The Pataudi Trophy\nC)The Freedom Series\n-->",
  answer:"A"
},{
  question:"3) Who was named India's Cricketer of the Century by Wisden?\nA)Virat Kohli\nB)Kapil Dev\nC)Sachin Tendulkar\n-->",
  answer:"B"
},{
  question:"4) In 2009, who was the chairman of the cash-rich Indian Premier League?\nA)N Srinivasan\nB)Shashank Manohar\nC)Lalit Modi\n-->",
  answer:"C"
},{
  question:"5) When did Sachin Tendulkar make his Test debut?\nA)1986\nB)1990\nC)1989\n-->",
  answer:"C"
},{
  question:`"6) This wicket-keeper batsman has been honoured with titles like "The Wall" and "Mr. Dependable", and he received the prestigious "Player of the Year" and "Test Player of the Year" awards in 2004. Identify him.\nA) Syed Kirmani\nB) Rahul Dravid\nC)MS Dhoni\n-->"`,
  answer:"B"
},{
  question:"7) This clever spinner might not be a big turner of the ball, but he holds the record for being the first Indian bowler to claim 500, and then 600 wickets in Test cricket. He finished his Test career having claimed 619 wickets and ODI career with 337 wickets in his pocket. Who is he?\nA)Harbhajan Singh\nB) Anil Kumble\nC)Ravi C Ashwin\n-->",
  answer:"B"
},{
  question:"8) Who was the Man of the Series of the Hero Honda Cup ODI series played between India and England in 2008?\nA)Sachin Tendulkar\nB)Yuvraj Singh\nC)MS Dhoni\n(Choose one of the above)\n-->",
  answer:"B"
},{
  question:"9) In which year was MS Dhoni appointed Indian captain?\nA)2007\nB)2009\nC)2010\n-->",
  answer:"A"
},{
  question:"10)  At which venue did MS Dhoni made his daunting 183 not out?\nA)Jaipur\nB)Mumbai\nC)Kolkata\n(Choose one of the above)\n-->",
  answer:"A"
}
]

 for(var i=0;i<questions.length;i=i+1){
   var currentQuestion=questions[i];
   play(currentQuestion.question,currentQuestion.answer)
 }

 console.log(chalk.magenta("Your Final score is", score + " out of 10"));
 console.log("\n--------------------------------");
 console.log(chalk.blue("Here's the Leaderboard - "));
 console.log("--------------------------------");
   

 for(var j=0;j<highScores.length;j=j+1){
   var currentHighScore=highScores[j];
   console.log(currentHighScore.name);
   console.log(currentHighScore.score);
 }

 //   update the highscorer 
 if(score >= highScores[0,1].score) {
    console.log(chalk.yellow("\nCongratulations!!! Since you are one of the highscorers,If want your name on the leaderboard, send me a screenshot of your score. Thank you\n"));
    console.log("*************************************");
    
  } else {
   console.log(chalk.yellow("\nThank you for playing the quiz!"));
}