const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

window.onload = () => {
  document.querySelector("h1").onmouseover = (event) => {
    let iteration = 0;

    const interval = setInterval(() => {
      event.target.innerHTML = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index <= iteration) {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= 10) {
        clearInterval(interval);
      }
      iteration += 1;
    }, 50);
  };
};
