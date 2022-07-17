const quotes = [
  {
    author: "Jane Goodall",
    text: "What you do makes a difference, and you have to decide what kind of difference you want to make",
  },
  {
    author: "Albert Einstein",
    text: "Strive not to be a success, but rather to be of value.",
  },
  {
    author: "Carrie Fisher",
    text: "Stay afraid, but do it anyway. What’s important is the action. You don’t have to wait to be confident. Just do it and eventually the confidence will follow.",
  },
  {
    author: "Eric Butterworth",
    text: "Don’t go through life, grow through life.",
  },
  {
    author: "Amelia Earhart",
    text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
  },
  {
    author: "Hillary Clinton",
    text: "Take criticism seriously, but not personally. If there is truth or merit in the criticism, try to learn from it. Otherwise, let it roll right off you.",
  },
  {
    author: "Stephen Covey",
    text: "Be patient with yourself. Self-growth is tender; it’s holy ground. There’s no greater investment.",
  },
  {
    author: "Ernest Hemingway",
    text: "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.",
  },
  {
    author: "Theodore Roosevelt",
    text: "With self-discipline most anything is possible.",
  },
  {
    author: "Coblin",
    text: "Kishishishi~",
  },
];

const quote = document.querySelector("#quote");
const quoteText = document.querySelector("#quote span:first-child");
const quoteAuthor = document.querySelector("#quote span:last-child");

const randomIdx = Math.floor(Math.random() * quotes.length);
quoteText.innerText = quotes[randomIdx].text;
quoteAuthor.innerText = quotes[randomIdx].author;
