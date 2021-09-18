const correctAnswers = ["B", "A", "C", "B"];
const form = document.querySelector(".quiz-form");
const showResult = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  userAnswers.forEach((answer, index) => {
    if (answer == correctAnswers[index]) {
      score += 25;
    }
  });

  scrollTo(top);
  showResult.querySelector("span").textContent = `${score}%`;
  showResult.classList.remove("d-none");
  showResult.classList.add("d-block");

  let output = 0;
  const timer = setInterval(() => {
    showResult.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 20);
});

const titlu = document.querySelector('#titlu');
const q1 = document.querySelector('#q1');
const q2 = document.querySelector('#q2');
const q3 = document.querySelector('#q3');
const q4 = document.querySelector('#q4');

function romanianLang(){
  titlu.textContent = "Ghiceste cat de multe poti!";
  q1.textContent = "1. Cand a fost produs primul calculator?";
  q2.textContent = "Ce calculator a folosit pentru prima data display color?";
  q3.textContent = "Ce companie populara a produs primul procesor?";
  q4.textContent = "Ce componenta hardware efectueaza click, scroll, drag sau select?";
}

function englishLang(){
  titlu.textContent = "Guess as many as you can!";
  q1.textContent = "1. When was the first computer created?";
  q2.textContent = "2. What was the first computer system that used color display?";
  q3.textContent = "3. Which popular company designed the first CPU?";
  q4.textContent = "4. Which computer hardware device performs the functions like click, point, drag, or select?";    
}