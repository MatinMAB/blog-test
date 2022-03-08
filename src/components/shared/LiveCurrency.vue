<template lang="">
  <div class="boxHead">
    <div class="boxHead_currency" v-for="item in firstCurrencies" :key="item">
      <span class="currencyName">{{ item.s }}</span>
      <span class="price">{{ item.a }}</span>
      <span class="percentChange" :class="{ upperGreen: item.P > 0, lowerRed: item.P < 0 }">{{ item.P }}"</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "LiveCurrency",
  data() {
    return {
      connection: null,
      currencies: [],
    };
  },
  computed: {
    firstCurrencies() {
      return this.currencies.slice(0, 5);
    },
  },
  mounted() {
    setInterval(() => {
      const getCurrenciesPromise = new Promise((resolve, reject) => {
        this.connection = new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr");
        this.connection.onmessage = function (event) {
          console.log(JSON.parse(event.data));
          resolve(JSON.parse(event.data));
          reject("Something Went Wrong :(");
        };
      });
      getCurrenciesPromise
        .then((currencies) => {
          this.currencies = currencies;
          console.log(this.currencies);
        })
        .catch((err) => {
          console.error(err);
        });
    }, 1000);
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
.upperGreen {
  color: greenyellow;
}
.lowerRed {
  color: red;
}
</style>
