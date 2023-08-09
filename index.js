// STEP 1
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
var userName = " ";
var form = document.getElementById('formClass');

// Evento para el botón "Start"
document.getElementById("startBtn").addEventListener("click", function() {
    if (!started) {
        document.getElementById("level-title").textContent = "Level " + level;
        started = true;
        setTimeout(function() {
            nextSequence();
        }, 750); //Tiempo a que se encienda el boton
    }
});

// Evento para el botón "Reset"
document.getElementById("resetBtn").addEventListener("click", function() {
    if (started) {
        document.getElementById("level-title").textContent = "Press Start button to start";
        userClickedPattern = [];
        gamePattern = [];
        level = 0;
        started = false;
    }
});

// Eventos para los botones de colores
var buttons = document.querySelectorAll(".btn");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        if (started) {
            var userChosenColor = this.getAttribute("id");
            userClickedPattern.push(userChosenColor);

            playSound(userChosenColor);
            animatePress(userChosenColor);

            checkAnswer(userClickedPattern.length - 1);
        }
    });
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }

    } else {
        console.log("wrong");

        document.body.classList.add("game-over");
        setTimeout(function() {
            document.body.classList.remove("game-over");
        }, 200);

        document.getElementById("level-title").textContent = "Game over, Press start button to Restart";

        startOver();
    }
}

// STEP 2
function nextSequence() {
    userClickedPattern = [];
    level++;
    document.getElementById("level-title").textContent = "Level " + level;

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    // Muestra toda la secuencia del patrón al jugador
    for (var i = 0; i < gamePattern.length; i++) {
        (function(i) {
            setTimeout(function() {
                animatePress(gamePattern[i]);
                playSound(gamePattern[i]);
            }, i * 750); // Tiempo a que se encienda el boton
        })(i);
    }
}

function animatePress(currentColor) {
    document.getElementById(currentColor).classList.add("pressed");
    setTimeout(function() {
        document.getElementById(currentColor).classList.remove("pressed");
    }, 100);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
 
 
 
 
 
 
 
 
 
 
 /*var botones=document.querySelectorAll(".botones")
var start = document.getElementById("start")
botones = Array.from(botones)

//funcion que agrega la clase click al boton que este disparando el evento mousedown
var pintar = function(event){
    var button = document.getElementById(event.target.id);
    button.classList.add('click');
}

//funcion que quita la clase click al boton que este disparando el evento mouseup el cual se accionara inmediatamente luego del evento mousedown
var despintar = function(event) {
    var button = document.getElementById(event.target.id);
    button.classList.remove('click');
  }

var len = botones.length
function secuencia() {
    var randomNum = Math.floor(Math.random() * len);
    botones[randomNum].classList.add('click');
    setTimeout(function () {
        botones[randomNum].classList.remove('click');
    }, 1000);
}

botones.forEach(function(i){
    i.addEventListener("mousedown", pintar)
    i.addEventListener("mouseup", despintar)
})

// start.addEventListener("click", secuencia)
var intervalo = setInterval(secuencia, 3000);*/