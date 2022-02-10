Vue.createApp({
    data() {
        return {
            counter: 0
      }
    },
    mounted() {
        setInterval(() => {
            this.counter++
        }, 1000)
    }
  }).mount('#counter')


  // timerからevalへの遷移時にパラメータを保持する
document.getElementById('to-eval').onclick = () => {
    let params = window.location.href;
    params = params.split('?')[1];
    window.location.href = 'eval.html?' + params;
};
