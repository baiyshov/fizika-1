document.addEventListener("DOMContentLoaded", function () {
    const problems = [
        { statement: "Жердин толук тартуу ылдамдыгы канчага барабар? (м/с²)", correctAnswer: "9.81" },
        { statement: "Күчтүн формуласы кандай? ", correctAnswer: "F = m * a" },
        { statement: "Кызыл түстүн толкун узундугу кандай? ", correctAnswer: "700 нм" },
        { statement: "Энергиянын сактоо закону кандай?", correctAnswer: "Энергия жок болбойт жана жаратылбайт, ал бир түрдөн экинчи түргө өтөт." },
        { statement: "Электр тогу кандай формула менен эсептелет? ", correctAnswer: "I = V / R" }
    ];

    let currentProblemIndex = 0;
    const problemStatement = document.getElementById("problem-statement");
    const answerInput = document.getElementById("answer");
    const feedbackDisplay = document.getElementById("feedback-display");
    const submitButton = document.getElementById("submit-button");
    const nextButton = document.getElementById("next-button");

    function loadProblem() {
        problemStatement.textContent = problems[currentProblemIndex].statement;
        answerInput.value = "";
        feedbackDisplay.innerHTML = "";
        nextButton.style.display = "none";
    }

    submitButton.addEventListener("click", function () {
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswer = problems[currentProblemIndex].correctAnswer.toLowerCase();
        const isCorrect = userAnswer === correctAnswer;

        feedbackDisplay.innerHTML = `
            <div class="feedback ${isCorrect ? 'correct' : 'incorrect'}">
                <strong>${isCorrect ? 'Туура!' : 'Туура эмес'}</strong>
                <p>${isCorrect ? "Жоопуңуз туура." : `Туура жооп: ${problems[currentProblemIndex].correctAnswer}`}</p>
            </div>
        `;

        nextButton.style.display = "block";
    });

    nextButton.addEventListener("click", function () {
        currentProblemIndex = (currentProblemIndex + 1) % problems.length;
        loadProblem();
    });

    loadProblem();
});
