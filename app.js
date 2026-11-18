(() => {
  "use strict";

  const questions = window.quizQuestions;
  const welcomeScreen = document.querySelector("#welcome-screen");
  const quizScreen = document.querySelector("#quiz-screen");
  const resultsScreen = document.querySelector("#results-screen");
  const startButton = document.querySelector("#start-button");
  const backButton = document.querySelector("#back-button");
  const actionButton = document.querySelector("#action-button");
  const answerList = document.querySelector("#answer-list");
  const feedback = document.querySelector("#feedback");
  const progressBar = document.querySelector("#progress-bar");
  const progressFill = document.querySelector("#progress-fill");
  const answeredFill = document.querySelector("#answered-fill");
  const reviewSection = document.querySelector("#review-section");
  const reviewList = document.querySelector("#review-list");

  document.querySelector("#question-total").textContent = String(questions.length);
  progressBar.setAttribute("aria-valuemax", String(questions.length));

  let roundQuestions = questions.slice();
  let currentIndex = 0;
  let selectedAnswers = [];
  let savedAnswers = [];
  let streak = 0;
  let bestStreak = 0;

  function showScreen(screen) {
    welcomeScreen.hidden = screen !== "welcome";
    quizScreen.hidden = screen !== "quiz";
    resultsScreen.hidden = screen !== "results";
  }

  function shuffle(items) {
    const shuffledItems = items.slice();
    for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffledItems[index], shuffledItems[swapIndex]] =
        [shuffledItems[swapIndex], shuffledItems[index]];
    }
    return shuffledItems;
  }

  function startRound(items) {
    roundQuestions = shuffle(items);
    currentIndex = 0;
    selectedAnswers = [];
    savedAnswers = new Array(items.length).fill(null);
    streak = 0;
    bestStreak = 0;
    showScreen("quiz");
    renderQuestion();
    document.querySelector("#question-title").focus();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function currentQuestion() {
    return roundQuestions[currentIndex];
  }

  function renderQuestion() {
    const question = currentQuestion();
    const savedAnswer = savedAnswers[currentIndex];
    selectedAnswers = savedAnswer ? savedAnswer.slice() : [];

    document.querySelector("#question-count").textContent =
      `QUESTION ${String(currentIndex + 1).padStart(2, "0")} / ${roundQuestions.length}`;
    document.querySelector("#question-number").textContent =
      `#${String(currentIndex + 1).padStart(2, "0")}`;
    document.querySelector("#topic-chip").textContent = question.topic;
    document.querySelector("#question-title").textContent = question.prompt;
    const isMultiSelect = question.type === "multi";
    const selectHint = document.querySelector("#select-hint");
    document.querySelector("#answer-mode").textContent =
      isMultiSelect ? "Multiple answers" : "One answer";
    document.querySelector("#answer-mode-instruction").textContent =
      isMultiSelect ? "Select every correct option." :
        question.type === "boolean" ? "Choose True or False." : "Choose one option.";
    selectHint.classList.toggle("is-multi", isMultiSelect);
    document.querySelector("#streak-count").textContent = String(streak);
    document.querySelector("#answered-count").textContent =
      `${savedAnswers.filter(Boolean).length} / ${roundQuestions.length}`;

    const answered = Boolean(savedAnswer);
    answerList.replaceChildren();
    question.options.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      label.className = "answer-option";
      const input = document.createElement("input");
      input.type = question.type === "multi" ? "checkbox" : "radio";
      input.name = "answer";
      input.value = String(optionIndex);
      input.checked = selectedAnswers.includes(optionIndex);
      input.disabled = answered;
      input.addEventListener("change", () => {
        if (question.type === "multi") {
          selectedAnswers = input.checked
            ? [...selectedAnswers, optionIndex].sort((a, b) => a - b)
            : selectedAnswers.filter((index) => index !== optionIndex);
        } else {
          selectedAnswers = [optionIndex];
        }
        actionButton.disabled = selectedAnswers.length === 0;
      });

      const marker = document.createElement("span");
      marker.className = "answer-marker";
      marker.setAttribute("aria-hidden", "true");
      marker.textContent = String.fromCharCode(65 + optionIndex);
      const text = document.createElement("span");
      text.className = "answer-text";
      text.textContent = option;
      label.append(input, marker, text);
      if (answered && question.answer.includes(optionIndex)) {
        label.classList.add("is-correct");
      } else if (answered && savedAnswer.includes(optionIndex)) {
        label.classList.add("is-incorrect");
      }
      answerList.append(label);
    });

    feedback.hidden = !answered;
    if (answered) {
      showFeedback(question, savedAnswer);
    } else {
      actionButton.disabled = selectedAnswers.length === 0;
      actionButton.innerHTML = 'Check answer <span aria-hidden="true">↗</span>';
    }

    backButton.disabled = currentIndex === 0;
    actionButton.textContent = answered
      ? currentIndex === roundQuestions.length - 1 ? "See my results" : "Next question →"
      : "Check answer";
    actionButton.disabled = !answered && selectedAnswers.length === 0;

    const completed = savedAnswers.filter(Boolean).length;
    const progress = (completed / roundQuestions.length) * 100;
    const currentProgress = ((currentIndex + (answered ? 1 : 0)) / roundQuestions.length) * 100;
    progressFill.style.width = `${Math.max(progress, currentProgress)}%`;
    answeredFill.style.width = `${progress}%`;
    progressBar.setAttribute("aria-valuemax", String(roundQuestions.length));
    progressBar.setAttribute("aria-valuenow", String(completed));
  }

  function isCorrect(question, selected) {
    return question.answer.length === selected.length &&
      question.answer.every((index) => selected.includes(index));
  }

  function showFeedback(question, selected) {
    const correct = isCorrect(question, selected);
    document.querySelector("#feedback-heading").textContent =
      correct ? "✨ Nailed it! Your signal is strong." : "🧭 Not quite—but now you know.";
    document.querySelector("#feedback-explanation").textContent = question.explanation;
    document.querySelector("#feedback-tip").textContent = `Signal boost: ${question.tip}`;
    feedback.classList.toggle("feedback-correct", correct);
    feedback.classList.toggle("feedback-try-again", !correct);
  }

  function checkAnswer() {
    const question = currentQuestion();
    savedAnswers[currentIndex] = selectedAnswers.slice();
    const correct = isCorrect(question, selectedAnswers);
    streak = correct ? streak + 1 : 0;
    bestStreak = Math.max(bestStreak, streak);
    renderQuestion();
  }

  function goNext() {
    if (currentIndex === roundQuestions.length - 1) {
      showResults();
      return;
    }
    currentIndex += 1;
    renderQuestion();
    document.querySelector("#question-title").focus();
  }

  function showResults() {
    const correctCount = savedAnswers.reduce((total, answer, index) =>
      total + (isCorrect(roundQuestions[index], answer) ? 1 : 0), 0);
    const missed = roundQuestions.filter((question, index) =>
      !isCorrect(question, savedAnswers[index]));
    const percent = Math.round((correctCount / roundQuestions.length) * 100);

    document.querySelector("#score-value").textContent = `${percent}%`;
    document.querySelector("#score-detail").textContent =
      `${correctCount} out of ${roundQuestions.length} answers right`;
    document.querySelector("#correct-stat").textContent = String(correctCount);
    document.querySelector("#review-stat").textContent = String(missed.length);
    document.querySelector("#streak-stat").textContent = String(bestStreak);
    document.querySelector("#results-message").textContent =
      percent === 100 ? "Flawless connection. You’re officially the signal whisperer."
        : percent >= 80 ? "Strong connection! A little review will make it even stronger."
          : percent >= 50 ? "You’re building a solid signal. Review a few concepts and try again."
            : "Every great connection starts with practice. Your review queue is ready.";
    document.querySelector("#results-emoji").textContent =
      percent === 100 ? "🏆" : percent >= 80 ? "📶" : "📡";

    reviewList.replaceChildren();
    reviewSection.hidden = missed.length === 0;
    document.querySelector("#review-count").textContent =
      `${missed.length} ${missed.length === 1 ? "question" : "questions"}`;
    missed.forEach((question) => {
      const item = document.createElement("article");
      item.className = "review-item";
      const topic = document.createElement("span");
      topic.className = "topic-chip";
      topic.textContent = question.topic;
      const prompt = document.createElement("h3");
      prompt.textContent = question.prompt;
      const answer = document.createElement("p");
      answer.className = "review-answer";
      answer.textContent = `Answer: ${question.answer.map((index) => question.options[index]).join(" · ")}`;
      const explanation = document.createElement("p");
      explanation.textContent = question.explanation;
      item.append(topic, prompt, answer, explanation);
      reviewList.append(item);
    });

    document.querySelector("#retry-button").hidden = missed.length === 0;
    showScreen("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  startButton.addEventListener("click", () => startRound(questions.slice()));
  backButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      renderQuestion();
    }
  });
  actionButton.addEventListener("click", () => {
    if (!savedAnswers[currentIndex]) {
      checkAnswer();
    } else {
      goNext();
    }
  });
  document.querySelector("#retry-button").addEventListener("click", () => {
    const missed = roundQuestions.filter((question, index) =>
      !isCorrect(question, savedAnswers[index]));
    startRound(missed);
  });
  document.querySelector("#restart-button").addEventListener("click", () => {
    showScreen("welcome");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
