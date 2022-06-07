let accordion = document.querySelector(".accordion");
let questions = document.querySelectorAll(".question");
let answers = document.querySelectorAll(".answer");

accordion.onclick = (e) => {
  for (i = 0; i < questions.length; i++) {
    if (e.target === questions[i]) {
      questions[i].classList.toggle("active");
    } else {
      questions[i].classList.remove("active");
    }
    if (e.target.parentElement === answers[i].parentElement) {
      if (
        answers[i].style.maxHeight ||
        answers[i].classList.contains("active")
      ) {
        answers[i].style.maxHeight = null;
        answers[i].classList.remove("active");
      } else {
        answers[i].style.maxHeight = answers[i].scrollHeight + "px";
        answers[i].classList.add("active");
      }
      //   answers[i].classList.toggle("active");
      // } else {
      //   answers[i].classList.remove("active");
    } else {
      answers[i].style.maxHeight = null;
      answers[i].classList.remove("active");
    }
  }
};
