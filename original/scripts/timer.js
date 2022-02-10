// カウンター
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


  function calc(time, waters, times) {

        let water = 0;
        let time = 0;

        for (let i = 1; i < waters.length; i++) {

            if time > times[i]:
                times[i-1]

            water += waters[i];
            time += times[i];

            v = water / time;
            
        }
  }


// eval.htmlに遷移
document.getElementById('submit').onclick = () => {
    window.location.href = 'eval.html' + getParams();
};


// create.htmlに戻る
document.getElementById('back').onclick = () => {
    window.location.href = 'create.html' + getParams();
};
