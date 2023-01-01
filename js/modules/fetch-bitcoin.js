export default function initFetchBitcoin() {
  async function fetchBitcoin(url) {
    try {
      const btcResponse = await fetch(url);
      const btcJSON = await btcResponse.json();
      const btc = document.querySelector(".btc");
      btc.innerHTML = (1000 / btcJSON.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchBitcoin("https://blockchain.info/ticker");
}
