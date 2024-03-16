// Array of questions
const questions = [{
        image: "assets/images/ind_sl_a.webp",
        answers: ["C", "M", "A", "Y"],
        correctAnswer: "A"
    },
    {
        image: "assets/images/ind_sl_b.webp",
        answers: ["O", "B", "D", "R"],
        correctAnswer: "B"
    },
    {
        image: "assets/images/ind_sl_c.webp",
        answers: ["U", "J", "D", "C"],
        correctAnswer: "C"
    },
    {
        image: "assets/images/ind_sl_d.webp",
        answers: ["D", "O", "B", "G"],
        correctAnswer: "D"
    },
    {
        image: "assets/images/ind_sl_e.webp",
        answers: ["F", "P", "E", "H"],
        correctAnswer: "E"
    },
    {
        image: "assets/images/ind_sl_f.webp",
        answers: ["V", "E", "N", "F"],
        correctAnswer: "F"
    },
    {
        image: "assets/images/ind_sl_g.webp",
        answers: ["G", "B", "R", "S"],
        correctAnswer: "G"
    },
    {
        image: "assets/images/ind_sl_h.webp",
        answers: ["X", "H", "L", "Q"],
        correctAnswer: "H"
    },
    {
        image: "assets/images/ind_sl_i.webp",
        answers: ["J", "Y", "T", "I"],
        correctAnswer: "I"
    },
    {
        image: "assets/images/ind_sl_j.webp",
        answers: ["J", "U", "Y", "C"],
        correctAnswer: "J"
    },
    {
        image: "assets/images/ind_sl_k.webp",
        answers: ["A", "N", "K", "Z"],
        correctAnswer: "K"
    },
    {
        image: "assets/images/ind_sl_l.webp",
        answers: ["L", "J", "V", "W"],
        correctAnswer: "L"
    },
    {
        image: "assets/images/ind_sl_m.webp",
        answers: ["W", "M", "N", "B"],
        correctAnswer: "M"
    },
    {
        image: "assets/images/ind_sl_n.webp",
        answers: ["M", "N", "U", "V"],
        correctAnswer: "N"
    },
    {
        image: "assets/images/ind_sl_o.webp",
        answers: ["Q", "O", "B", "C"],
        correctAnswer: "O"
    },
    {
        image: "assets/images/ind_sl_p.webp",
        answers: ["D", "F", "P", "A"],
        correctAnswer: "P"
    },
    {
        image: "assets/images/ind_sl_q.webp",
        answers: ["Z", "Q", "G", "R"],
        correctAnswer: "Q"
    },
    {
        image: "assets/images/ind_sl_r.webp",
        answers: ["R", "S", "C", "N"],
        correctAnswer: "R"
    },
    {
        image: "assets/images/ind_sl_s.webp",
        answers: ["X", "T", "A", "S"],
        correctAnswer: "S"
    },
    {
        image: "assets/images/ind_sl_t.webp",
        answers: ["I", "T", "Y", "N"],
        correctAnswer: "T"
    },
    {
        image: "assets/images/ind_sl_u.webp",
        answers: ["V", "Y", "O", "U"],
        correctAnswer: "U"
    },
    {
        image: "assets/images/ind_sl_v.webp",
        answers: ["U", "V", "Y", "N"],
        correctAnswer: "V"
    },
    {
        image: "assets/images/ind_sl_w.webp",
        answers: ["X", "M", "W", "A"],
        correctAnswer: "W"
    },
    {
        image: "assets/images/ind_sl_x.webp",
        answers: ["X", "Q", "N", "W"],
        correctAnswer: "X"
    },
    {
        image: "assets/images/ind_sl_y.webp",
        answers: ["I", "Y", "Q", "V"],
        correctAnswer: "Y"
    },
    {
        image: "assets/images/ind_sl_z.webp",
        answers: ["H", "Z", "E", "K"],
        correctAnswer: "Z"
    },
];

// Select important elements and link to HTML
const currentQuesNo = document.getElementById("current-question");
const timer = document.getElementById("timer");
const signImage = document.getElementById("sign-abc");
const answerButtons = Array.from(document.getElementById("answer-choice").children);
const nextButton = document.getElementById("game-next");
const boxContainer = document.querySelector('.box-container');
const resultContainer = document.querySelector('.result-container');

// Assign variables

let shuffledQuestions = [];
let currentQuesIndex = 0;
let timeStart = 15;
let currentQuestionNum = 1;
let score = 0;

// Shuffle array using the Fisher-Yates algorithm
function shuffleQuesAns() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;
    }
}

// Shuffle and select 10 questions
function randomQuestions() {
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}

// Display the first question when the page loads
function displayFirstQuestion() {
    shuffleQuesAns(questions);
    randomQuestions();
    const currentQuestion = shuffledQuestions[currentQuesIndex];
    signImage.src = currentQuestion.image;
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        // Reset the button color and enable the button
        button.style.backgroundColor = "";
        button.disabled = false;
        // Check if the chosen answer is correct
        button.onclick = () => {
            clearInterval(timeStart); // Stop the timer
            // Disable all answer buttons
            answerButtons.forEach((btn) => {
                if (btn) { // Check if the button exists
                    btn.disabled = true;
                }
            });

            if (button) { // Check if the button exists
                if (button.textContent === currentQuestion.correctAnswer) {
                    score++; // Increment the score
                    button.style.backgroundColor = "green"; // Correct answer
                } else {
                    button.style.backgroundColor = "red"; // Incorrect answer
                    // Find and highlight the correct answer
                    const correctButton = answerButtons.find((btn) => btn.textContent === currentQuestion.correctAnswer);
                    if (correctButton) { // Check if the correct button exists
                        correctButton.style.backgroundColor = "green";
                    }
                }

            }
        };
    });
    currentQuesNo.textContent = currentQuestionNum;
    timer.textContent = timeStart;
    nextButton.style.display = "none";
    answerButtons.forEach((button) => {
        button.addEventListener("click", () => {
            nextButton.style.display = "block";
        });
    });
    nextButton.addEventListener("click", nextQuestion);
}

// Function to start the timer
function startTimer() {
    let timeRemaining = 15;
    document.getElementById("timer").textContent = timeRemaining;
    timeStart = setInterval(() => {
        timeRemaining--;
        document.getElementById("timer").textContent = timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(timeStart);
            nextQuestion();
        }
    }, 1000);
}

// Move to the next question when an user chooses an answer or when the time is up
function nextQuestion() {
    clearInterval(timeStart);
    currentQuesIndex++;
    currentQuestionNum++;
    if (currentQuestionNum <= 10) {
        const currentQuestion = shuffledQuestions[currentQuesIndex];
        signImage.src = currentQuestion.image;
        answerButtons.forEach((button, index) => {
            button.textContent = currentQuestion.answers[index];
            // Reset the button color and enable the button
            button.style.backgroundColor = "";
            button.disabled = false;
            // Check if the chosen answer is correct
            button.onclick = () => {
                clearInterval(timeStart); // Stop the timer
                // Disable all answer buttons
                answerButtons.forEach((btn) => {
                    if (btn) { // Check if the button exists
                        btn.disabled = true;
                    }
                });

                if (button) { // Check if the button exists
                    if (button.textContent === currentQuestion.correctAnswer) {
                        score++; // Increment the score
                        button.style.backgroundColor = "green"; // Correct answer
                    } else {
                        button.style.backgroundColor = "red"; // Incorrect answer
                        // Find and highlight the correct answer
                        const correctButton = answerButtons.find((btn) => btn.textContent === currentQuestion.correctAnswer);
                        if (correctButton) { // Check if the correct button exists
                            correctButton.style.backgroundColor = "green";
                        }
                    }

                }
            };
        });
        currentQuesNo.textContent = currentQuestionNum;
        nextButton.style.display = "none";
        answerButtons.forEach((button) => {
            button.addEventListener("click", () => {
                nextButton.style.display = "block";
            });
        });
        nextButton.addEventListener("click", nextQuestion);
        startTimer();
    } else {
        endGame();
    }
}

function endGame() {
    // Hide the game
    boxContainer.style.display = 'none';

    // Show the results
    resultContainer.style.display = 'block';

    // Calculate the score as a percentage
    const scorePercentage = (score / 10) * 100;

    // Display the score in the result container
    resultContainer.innerHTML = `
        <h1>Game Over!</h1>
        <h2>Your score: ${score}/10</h2>
        <h2>Percentage: ${scorePercentage}%</h2>
        <a id="game-restart" onclick="location.reload()"><strong><i class="fa-solid fa-rotate-right"> Restart?</i></strong</a>
        <a href="index.html"><strong><i class="fa-solid fa-house"> Home</i></strong></a>
    `;
}

function startQuiz() {
    displayFirstQuestion();
    startTimer();
}

window.onload = startQuiz();