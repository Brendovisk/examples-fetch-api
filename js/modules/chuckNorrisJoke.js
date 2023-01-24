export default function initChuckNorrisJoke() {
  const btn = document.querySelector('[data-joke="btn"]');
  const quote = document.querySelector('[data-joke="quote"]');

  function tellAChuckNorrisJoke() {
    fetch("https://api.chucknorris.io/jokes/random").then((response) => {
      if (response.status === 200) {
        response.json().then((joke) => {
          quote.innerText = joke.value;
        });
      } else {
        quote.innerText = "Chuck Norris is so strong that he breaked this API request!";
      }
    });
  }

  tellAChuckNorrisJoke();

  btn.addEventListener("click", tellAChuckNorrisJoke);
}

initChuckNorrisJoke();
