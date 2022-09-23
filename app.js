// let a, b;
// a = prompt("enter a number = ", "");
// b = prompt("enter second numebr ", "");
// let c = parseInt(a) + parseInt(b);
// for (let d = a; d <= c; d++) {
//   console.log(d);
// }
// let k = c * c;

// console.log(Math.sqrt(k) + k);
// console.log(c);
const question = [
  {
    ques: "which of the following is a markup language?",
    a: "html",
    b: "css",
    c: "c",
    d: "c++",
    currect: "a",
  },
  {
    ques: "what year was javaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    currect: "b",
  },
  {
    ques: "what does css stands for?",
    a: "hypertext markup language",
    b: "cassading style language",
    c: "jason object notation",
    d: "Helicopers terminals motoboats lamborings",
    currect: "b",
  },
];
let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInput = document.querySelectorAll(".options");

const loadQuestion = () => {
  if (index == total) {
    return endQuiz();
  }
  reset();
  const data = question[index];
  quesBox.innerText = `${index + 1}) ${data.ques}`;

  optionInput[0].nextElementSibling.innerHTML = data.a;
  optionInput[1].nextElementSibling.innerHTML = data.b;
  optionInput[2].nextElementSibling.innerHTML = data.c;
  optionInput[3].nextElementSibling.innerHTML = data.d;
};
const submitQuiz = () => {
  const data = question[index];
  const ans = getAnswer();
  console.log(ans);
  if (ans == data.currect) {
    right++;
    console.log("hi" + right);
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};
const getAnswer = () => {
  let asnwer;
  optionInput.forEach((input) => {
    if (input.checked) {
      asnwer = input.valule;
    }
  });
  return asnwer;
};

const reset = () => {
  optionInput.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
   <h2>Thank you for playing </h2>
   <h3>${right} / ${total} are currect </h3>
  `;
};
// inital call
loadQuestion();
