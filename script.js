
const minttime = document.querySelector('.mint');
const sectime = document.querySelector('.sec');
const qcontainer=document.querySelector('.q-container1')
const qtime=document.querySelector('.q-time');
const qnext=document.querySelector('.q-next');
const rightsound=document.querySelector('.option-right')

let sec = 0;
let mint = 0;

const updatetime = (deadline) => {
    const currenttime = new Date();
    const timediffrent = deadline - currenttime;

    sec = Math.floor(timediffrent / 1000) % 60;
    mint = Math.floor(timediffrent / 1000 / 60) % 60;

    const format = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    sectime.textContent = format(sec);
    minttime.textContent = format(mint);
};
document.body.addEventListener('mouseenter', () => {
    rightsound.play().then(() => {
        rightsound.pause();
        rightsound.currentTime = 0;
    });
}, { once: true });

const Countdown = (target) => {
    const timer = setInterval(() => {
        updatetime(target);
     
        if((sec<=15&&sec>=6) && mint==0){
            qcontainer.classList.add('q-container2')
            qtime.style.backgroundColor='#d7c30ddb';
            qnext.style.color='#655e20db';
            //  rightsound.currentTime = 0;
            //    rightsound.play();

        }else if(sec <=5 && mint==0){
            qcontainer.classList.add('q-container3');
            qtime.style.backgroundColor='#e01608d2';
            qnext.style.color='#e01608d2';
                rightsound.currentTime = 0;

            rightsound.play();


        }
        
        if (sec === 0 && mint === 0) {
            clearInterval(timer);
            console.log("Countdown ended");
        }
    }, 1000);
};

const targettime = new Date();
const target = new Date(targettime.getTime() + 60 * 1000); 

Countdown(target);






const option1 = document.querySelector(".option-text1");
const option2 = document.querySelector(".option-text2");
const option3 = document.querySelector(".option-text3");
const option4 = document.querySelector(".option-text4");
const next = document.querySelector(".q-next");
const qcount = document.querySelector(".q-count");
const qtext = document.querySelector(".q-text"); // assuming this is in HTML

const allOptions = document.querySelectorAll(".option");
// const result=document.querySelector(".result-container");

const question1 = {
  "q": "Keyword to declare variable?",
  "op1": "define",
  "op2": "let",
  "op3": "set",
  "op4": "varr",
  "correct-option": 2
};
const question2 = {
  "q": "Type of NaN?",
  "op1": "number",
  "op2": "string",
  "op3": "object",
  "op4": "undefined",
  "correct-option": 1
};
const question3 = {
  "q": "Function without name?",
  "op1": "regular",
  "op2": "arrow",
  "op3": "anonymous",
  "op4": "global",
  "correct-option": 3
};
const question4 = {
  "q": "Loop type in JS?",
  "op1": "for",
  "op2": "repeat",
  "op3": "during",
  "op4": "again",
  "correct-option": 1
};
const question5 = {
  "q": "JavaScript file extension?",
  "op1": ".html",
  "op2": ".css",
  "op3": ".js",
  "op4": ".json",
  "correct-option": 3
};
const question6 = {
  "q": "Output method?",
  "op1": "echo",
  "op2": "write",
  "op3": "say",
  "op4": "log",
  "correct-option": 4
};
const question7 = {
  "q": "Not a JS type?",
  "op1": "symbol",
  "op2": "boolean",
  "op3": "character",
  "op4": "undefined",
  "correct-option": 3
};
const question8 = {
  "q": "typeof null?",
  "op1": "null",
  "op2": "object",
  "op3": "undefined",
  "op4": "number",
  "correct-option": 2
};
const question9 = {
  "q": "Check equality (type + value)?",
  "op1": "==",
  "op2": "!=",
  "op3": "===",
  "op4": "=",
  "correct-option": 3
};
const question10 = {
  "q": "DOM stands for?",
  "op1": "Data",
  "op2": "Object",
  "op3": "Method",
  "op4": "Function",
  "correct-option": 2
};

// Store all questions in localStorage
localStorage.setItem('question1', JSON.stringify(question1));
localStorage.setItem('question2', JSON.stringify(question2));
localStorage.setItem('question3', JSON.stringify(question3));
localStorage.setItem('question4', JSON.stringify(question4));
localStorage.setItem('question5', JSON.stringify(question5));
localStorage.setItem('question6', JSON.stringify(question6));
localStorage.setItem('question7', JSON.stringify(question7));
localStorage.setItem('question8', JSON.stringify(question8));
localStorage.setItem('question9', JSON.stringify(question9));
localStorage.setItem('question10', JSON.stringify(question10));

let qnumber = parseInt(localStorage.getItem("qnumber")) || 1;
let currentQuestion = JSON.parse(localStorage.getItem(`question${qnumber}`));

// Initial load
qtext.innerHTML = currentQuestion.q;
option1.innerHTML = currentQuestion.op1;
option2.innerHTML = currentQuestion.op2;
option3.innerHTML = currentQuestion.op3;
option4.innerHTML = currentQuestion.op4;
qcount.innerHTML = `${qnumber}/10`;

choseOption(currentQuestion);



next.addEventListener('click', () => {
  qnumber++;


  if (qnumber > 10) {
    // Hide question container
    document.querySelector(".q-container1").style.display = "none";
    document.querySelector(".start-container").style.display="none"

    // Show result container
    document.querySelector(".result-container-out").style.display = "block";

    // Reset qnumber to 1 for next session
    qnumber = 1;
    localStorage.setItem("qnumber", qnumber);

    return; // Stop further execution
  }
    else if( qnumber>=0 && qnumber<=10){
      //show q container
      document.querySelector(".q-container1").style.display = "block";
      //hide star container
    document.querySelector(".start-container").style.display="none"

    // hide result container
    document.querySelector(".result-container-out").style.display = "none";
    }

  localStorage.setItem("qnumber", qnumber);
  const nextQuestion = JSON.parse(localStorage.getItem(`question${qnumber}`));
  currentQuestion = nextQuestion;

  qtext.innerHTML = nextQuestion.q;
  option1.innerHTML = nextQuestion.op1;
  option2.innerHTML = nextQuestion.op2;
  option3.innerHTML = nextQuestion.op3;
  option4.innerHTML = nextQuestion.op4;
  qcount.innerHTML = `${qnumber}/10`;

  allOptions.forEach(option => {
    option.classList.remove("correct", "wrong");
    option.querySelector(".correct img").style.display = "none";
    option.querySelector(".wrong img").style.display = "none";
    option.querySelector(".option-choice").style.display = "none";
    option.style.borderColor = "#D9D9D9";
  });

  choseOption(nextQuestion);
});




function choseOption(question) {
  const correctIndex = question["correct-option"] - 1;
  let clicked = false;

  allOptions.forEach((option, index) => {
    option.onclick = () => {
      if (clicked) return;
      clicked = true;

      const correctImg = option.querySelector(".correct img");
      const wrongImg = option.querySelector(".wrong img");
      const choiceBox = option.querySelector(".option-choice");

      if (index === correctIndex) {
        option.classList.add("correct");
        correctImg.style.display = "block";
        choiceBox.style.display = "flex";
        option.style.borderColor = "#01AB08";
      } else {
        option.classList.add("wrong");
        wrongImg.style.display = "block";
        choiceBox.style.display = "flex";
        option.style.borderColor = "#ab2601";

        // also show correct answer
        const correctOption = allOptions[correctIndex];
        // const correctChoiceBox = correctOption.querySelector(".option-choice");
        correctOption.classList.add("correct");
        correctOption.querySelector(".correct img").style.display = "block";
        correctChoiceBox.style.display = "flex";
        correctOption.style.borderColor = "#01AB08";
      }
    };
  });
}

document.querySelector(".retry").addEventListener('click',(e)=>{
           //hide q container
      document.querySelector(".q-container1").style.display = "block";
      //show star container
    document.querySelector(".start-container").style.display="none"

    // hide result container
    document.querySelector(".result-container-out").style.display = "none";
})


