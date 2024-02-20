"use strict";

const jokeEl = document.querySelector(".joke");
const button = document.querySelector(".btn");

const getJoke = function () {
  fetch(`https://geek-jokes.sameerkumar.website/api?format=json`)
    .then((response) => response.json())
    .then((joke) => renderJoke(joke));
};

getJoke();
button.addEventListener("click", getJoke);

const renderJoke = function (joke) {
  jokeEl.innerHTML = joke.joke;
};
