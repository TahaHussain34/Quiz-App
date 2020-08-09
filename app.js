var quiz=[
        {
            SNo: 1,
            Question:"Q#1: Who is the current prime minister of pakistan?",
            Options:["Nawaz sharif","Asif zardari","Imran khan","Zulfiqar Ali Bhutto"],
            Answer:"Imran khan"
        },
        {
            SNo:2,
            Question:"Q#2: What is Capital City of USA?",
            Options:["New York","Washington DC","Khatmandu","California"],
            Answer:"Washington DC"
        },
        {
            SNo:3,
            Question:"Q#3: Who is half blood prince in harry potter?",
            Options:["Ron Weasley","Harry Potter","Dumbledore","Snape"],
            Answer:"Snape"
        },
        {
            SNo:4,
            Question:"Q#4: When did Kotri Barrage Built?",
            Options:["1948","1955","1998","1971"],
            Answer:"1955"
        }
]

var questionCount = 0;
var score = 0;

function questionaire(e){
    var question = document.getElementById("question");
    question.innerHTML = quiz[e].Question;
    var options = document.getElementsByClassName("options");
    for(var i = 0; i < options.length; i++){
        options[i].innerHTML = quiz[e].Options[i].toUpperCase();
    }
}

function nextQuestion(){
    scoring(questionCount);
    questionCount++;
    if(questionCount <= quiz.length-1){
        questionaire(questionCount);
    }
    removeActiveClass();
    getResult();
}
function fetchResult(){
    document.getElementById("marks") = sessionStorage.getItem("obtainedScore");
}

function getResult(){
    if(questionCount == quiz.length){
        window.location.href = "result.html"
    }
    var marks = document.getElementById("marks");
    sessionStorage.setItem("obtainedScore", score);
}

function activeClass(e){
    removeActiveClass();
    var options = document.getElementsByClassName("options");
    e.classList.add("active");
}

function removeActiveClass(){
    var active = document.getElementsByClassName("active")
    for(var i = 0; i < active.length; i++){
        active[i].classList.remove("active");
    }
}

function scoring(e){
    var active = document.getElementsByClassName("active")
    if(active[0].innerHTML.toLowerCase() == quiz[e].Answer.toLowerCase()){
        score += 10;
        console.log(score)
    }
}

function finalResult(){
    var obtained = sessionStorage.getItem("obtainedScore");
    marks.innerHTML = "You scored "+ obtained +" out of 40";
}

function restart(){
    window.location.href = "index.html"
}


function timer(){
    var min = 2;
    var time = min * 60;
    var quizTimer = document.getElementById("timer");

    function countDown(){
        var minutes = Math.floor(time / 60)
        var seconds = time % 60;
        
        if(seconds < 10){
            seconds = "0"+seconds;
        }
        if(minutes < 10){
            minutes = "0"+minutes;
        }
        
        quizTimer.innerHTML = minutes + ":" + seconds;
        time--;

        if(minutes == 00 && seconds == 00){
            alert("Time Up");
            window.location.href = "result.html";
        }
    }
    setInterval(countDown, 1000);
}
