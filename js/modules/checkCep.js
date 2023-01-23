export default function initCheckCep() {
  const form = document.querySelector('[data-cep="form"]');
  const input = document.querySelector('[data-cep="input"]');
  const cepBlock = document.querySelector(".cep");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const cep = input.value;

    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then((response) => {
        response.text().then((cep) => {
          cepBlock.innerText = cep.toUpperCase();
        });
      })
      .catch((reject) => {
        cepBlock.innerText = "Humm, não encontramos esse CEP. Você digitou corretamente?";
      });
  });
}

initCheckCep();
