// 抽出ステップ
Vue.createApp({
    data() {
        return {
            counter: 1
        }
    }
}).mount('#steps')


// timer.htmlに遷移
document.getElementById('submit').onclick = () => {

    const name = document.getElementById('name').value;
    const beans = document.getElementById('beans').value;
    const temp = document.getElementById('temp').value;
    const water_class = document.getElementsByClassName('water');
    const time_class = document.getElementsByClassName('time');

    const waters = []
    for (let water of water_class) {
        waters.push(water.value);
    }

    const times = []
    for (let time of time_class) {
        times.push(time.value);
    }

    //　paramが埋められてたら！
    window.location.href = 'eval.html' + makeParams({
        'name': name,
        'beans': beans,
        'temp': temp,
        'waters': waters,
        'times': times
    });

};
