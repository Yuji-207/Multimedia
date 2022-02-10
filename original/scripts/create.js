Vue.createApp({
    data() {
        return {
            counter: 1
        }
    }
}).mount('#steps')



//createからtimerへの遷移時にパラメータを付加する
document.getElementById('to-timer').onclick = () => {

    const beans = document.getElementById('beans').value;
    const temp = document.getElementById('temp').value;
    const waters = document.getElementsByClassName('water');
    const times = document.getElementsByClassName('time');

    let params = '?beans=' + beans + '&temp=' + temp;
    
    for (let i = 0; i < waters.length; i++) {
        params += '&water=' + waters[i].value + '&times=' + times[i].value;
    }

    window.location.href = 'eval.html' + params;

};
