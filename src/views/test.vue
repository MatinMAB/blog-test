<template lang="">
  <div class="boxHead">
    <div class="boxHead_currency" v-for="index in 5" :key="index">
      <span :class="`currencyName${index} currencyName`"></span>
      <span :class="`price price${index}`"></span>
      <span :class="`percentChange${index} percentChange`"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "LiveCurrency",
  data() {
    return {
      connection: {},
      currencies: [],
    };
  },
  mounted() {
    const CurrencyName1 = document.querySelector(".currencyName1");
    const price1 = document.querySelector(".price1");
    const percentChange1 = document.querySelector(".percentChange1");

    const CurrencyName2 = document.querySelector(".currencyName2");
    const price2 = document.querySelector(".price2");
    const percentChange2 = document.querySelector(".percentChange2");

    const CurrencyName3 = document.querySelector(".currencyName3");
    const price3 = document.querySelector(".price3");
    const percentChange3 = document.querySelector(".percentChange3");

    const CurrencyName4 = document.querySelector(".currencyName4");
    const price4 = document.querySelector(".price4");
    const percentChange4 = document.querySelector(".percentChange4");

    const CurrencyName5 = document.querySelector(".currencyName5");
    const price5 = document.querySelector(".price5");
    const percentChange5 = document.querySelector(".percentChange5");

    this.connection = new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr");
    this.connection.onmessage = function (event) {
      let currencies = JSON.parse(event.data);

      CurrencyName1.innerText = currencies[0].s;
      price1.innerText = currencies[0].a;
      percentChange1.innerHTML =
        currencies[0].P > 0 ? `<span style="color : greenyellow;">${currencies[0].P}</span>` : `<span style="color : red;">${currencies[0].P}</span>`;

      CurrencyName2.innerText = currencies[2].s;
      price2.innerText = currencies[2].a;
      percentChange2.innerHTML =
        currencies[2].P > 0 ? `<span style="color : greenyellow;">${currencies[0].P}</span>` : `<span style="color : red;">${currencies[0].P}</span>`;

      CurrencyName3.innerText = currencies[5].s;
      price3.innerText = currencies[5].a;
      percentChange3.innerHTML =
        currencies[5].P > 0 ? `<span style="color : greenyellow;">${currencies[0].P}</span>` : `<span style="color : red;">${currencies[0].P}</span>`;

      CurrencyName4.innerText = currencies[6].s;
      price4.innerText = currencies[6].a;
      percentChange4.innerHTML =
        currencies[6].P > 0 ? `<span style="color : greenyellow;">${currencies[0].P}</span>` : `<span style="color : red;">${currencies[0].P}</span>`;

      CurrencyName5.innerText = currencies[7].s;
      price5.innerText = currencies[7].a;
      percentChange5.innerHTML =
        currencies[7].P > 0 ? `<span style="color : greenyellow;">${currencies[0].P}</span>` : `<span style="color : red;">${currencies[0].P}</span>`;
    };
  },
};
</script>
<style scoped>
.boxHead {
  width: 100%;
  height: 21px;
  background-color: #1b1c1d;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  direction: ltr;
  gap: 10px;
  overflow-y: scroll;
}
.boxHead_currency {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
.currencyName {
  color: #f7f7f7;
}
.price {
  color: #e2b900;
}
</style>
