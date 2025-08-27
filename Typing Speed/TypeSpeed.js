let randomQuote = document.getElementById("quoteDisplay");
let userInput = document.getElementById("quoteInput");
let timer = document.getElementById("timer");
let result = document.getElementById("result");
let sunmitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");

let seconds = 0;
let uniqueId;

function startTimer() {
    clearInterval(uniqueId);
    seconds = 0;
    timer.textContent = seconds;
    uniqueId = setInterval(function() {
        seconds++;
        timer.textContent = seconds;
    }, 1000);
}



function resetQuote() {
    spinner.classList.remove("d-none");
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET",
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            spinner.classList.add("d-none");
            randomQuote.textContent = data.content;
        });
    userInput.value = "";
    startTimer();
    result.textContent = ""
}

sunmitBtn.onclick = function() {
    if (randomQuote.textContent === userInput.value) {
        clearInterval(uniqueId);
        result.textContent = "You typed In " + seconds + " seconds";
    } else {
        clearInterval(uniqueId);
        result.textContent = "You typed incorrect sentence";
    }
};


resetBtn.onclick = function() {
    spinner.classList.remove("d-none");
    resetQuote();
};
resetQuote();
spinner.classList.add("d-none");