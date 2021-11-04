/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
    };
  },
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "Hello Vue.js!",
  },
  methods: {
    changeMessage: function () {
      if (this.message === "Hello Vue.js!") {
        this.message = "yooooooooo";
      } else {
        this.message = "Hello Vue.js!";
      }
    },
  },
});

var app3 = new Vue({
  el: "#app-3",
  data: {
    message: "Type here!",
  },
});
