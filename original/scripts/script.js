// create
Vue.createApp({
    data() {
        return {
            counter: 1
        }
    }
}).mount('#steps')

// eval
Vue.createApp({
    data() {
        return {
            items: [
                {name: '総合評価', id: 'eval', min: '低い', max: '高い'},
                {name: 'ボディ', id: 'body', min: '弱い', max: '強い'},
                {name: '酸味', id: 'acidity', min: '弱い', max: '強い'},
                {name: '苦味', id: 'bitterness', min: '弱い', max: '強い'}
            ]
        }
    }
  }).mount('form')


// タイマー
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


// timerからevalへの遷移時にパラメータを保持する
document.getElementById('to-eval').onclick = () => {
    let params = window.location.href;
    params = params.split('?')[1];
    window.location.href = 'eval.html?' + params;
};


// evalでJSONファイルを保存する
document.getElementById('save').onclick = () => {

    const url = new URL(window.location.href);
    const params = url.searchParams;

    const dt = new Date();
    const year = String(dt.getFullYear());
    const month = String(dt.getMonth() + 1).padStart(2, '0');
    const date = String(dt.getDate()).padStart(2, '0');
    const hours = String(dt.getHours()).padStart(2, '0');
    const minutes = String(dt.getMinutes()).padStart(2, '0');
    const seconds = String(dt.getSeconds()).padStart(2, '0');
    
    const path = 'variesta_' + year + month + date + '_' + hours + minutes + seconds + '.json';

    save_as_json({

        'beans': params.get('beans'),
        'temp': params.get('temp'),
        'waters': params.getAll('water'),
        'times': params.getAll('time'),

        'eval': document.getElementById('eval').value,
        'body': document.getElementById('body').value,
        'acidity': document.getElementById('acidity').value,
        'bitterness': document.getElementById('bitterness').value,
        'note': document.getElementById('note').value

    }, path);

};


function save_as_json(data, fname) {

    data = JSON.stringify(data);  // JSONに変換

    const link = document.createElement('a');  // HTMLのリンク要素を生成
    link.href = "data:text/plain," + encodeURIComponent(data);  // リンク先にデータを保持
    link.download = fname;
    link.click();

}
