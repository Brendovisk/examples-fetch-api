export default function initCheckBtc() {
  const valueField = document.querySelector('[data-bitcoin="value"]');

  function showBtcValue() {
    fetch("https://www.blockchain.com/ticker").then((response) => {
      response.json().then((responseData) => {
        const currentValue = (+responseData.BRL.buy).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        valueField.innerText = currentValue;
      });
    });
  }

  showBtcValue();

  setInterval(() => {
    showBtcValue();
  }, 30000);
}

initCheckBtc();
