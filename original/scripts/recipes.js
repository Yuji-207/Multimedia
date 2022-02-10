Vue.createApp({
    data() {

        let params = getParams().slice(1);
        params = params.split('&');
    
        const dict = {
            name: null,
            beans: null,
            temp: null,
            waters: [],
            times: [],
            eval: null,
            body: null,
            acidity: null,
            bitterness: null,
            note: null
        };
    
        for (let param of params) {
    
            param = param.split('=');
            let key = param[0];
            let value = param[1];
    
            if (key === 'waters' || key === 'times') {
                dict[key].push(value);
            } else if (key === 'name' || key === 'note') {
                dict[key] = decodeURI(value);
            } else {
                dict[key] = value;
            }

        }

        return {
            recipes: [
                {
                    name: '中村',
                    beans: '20',
                    temp: '92',
                    waters: ['60', '0', '60', '0', '180'],
                    times: ['20', '40', '10', '50', '30'],
                    eval: '4',
                    body: '5',
                    acidity: '3',
                    bitterness: '2',
                    note: '美味しいです。'
                },
                {
                    name: '勇士',
                    beans: '20',
                    temp: '90',
                    waters: ['60', '0', '60', '0', '180'],
                    times: ['20', '70', '10', '50', '30'],
                    eval: '4',
                    body: '5',
                    acidity: '2',
                    bitterness: '3',
                    note: 'コクのあるコーヒが飲みたい方におすすめです。'
                },
                {
                    name: dict['name'],
                    beans: dict['beans'],
                    temp: dict['temp'],
                    waters: dict['waters'],
                    times: dict['times'],
                    eval: dict['eval'],
                    body: dict['body'],
                    acidity: dict['acidity'],
                    bitterness: dict['bitterness'],
                    note: dict['note']
                }
            ]
        }
    }
  }).mount('tbody')


// evalでJSONファイルを保存する
document.getElementById('submit').onclick = () => {

    const url = new URL(window.location.href);
    console.log(url);
    const params = url.searchParams;
    console.log(params);

    const dt = new Date();
    const year = String(dt.getFullYear());
    const month = String(dt.getMonth() + 1).padStart(2, '0');
    const date = String(dt.getDate()).padStart(2, '0');
    const hours = String(dt.getHours()).padStart(2, '0');
    const minutes = String(dt.getMinutes()).padStart(2, '0');
    const seconds = String(dt.getSeconds()).padStart(2, '0');
    
    const path = 'variesta_' + year + month + date + '_' + hours + minutes + seconds + '.json';

    saveAsJson([
        {
            name: '中村',
            beans: '20',
            temp: '92',
            waters: ['60', '0', '60', '0', '180'],
            times: ['20', '40', '10', '50', '30'],
            eval: '4',
            body: '5',
            acidity: '3',
            bitterness: '2',
            note: '美味しいです。'
        },
        {
            name: '勇士',
            beans: '20',
            temp: '90',
            waters: ['60', '0', '60', '0', '180'],
            times: ['20', '70', '10', '50', '30'],
            eval: '4',
            body: '5',
            acidity: '2',
            bitterness: '3',
            note: 'コクのあるコーヒが飲みたい方におすすめです。'
        },
        {
            beans: params.get('beans'),
            temp: params.get('temp'),
            waters: params.getAll('water'),
            times: params.getAll('time'),
            eval: params.getparams.get('eval'),
            body: params.getparams.get('body'),
            acidity: params.getparams.get('acidity'),
            bitterness: params.getparams.get('bitterness'),
            note: params.getparams.get('note')
        }
    ], path);

};



function saveAsJson(data, fname) {

    data = JSON.stringify(data);  // JSONに変換

    const link = document.createElement('a');  // HTMLのリンク要素を生成
    link.href = "data:text/plain," + encodeURIComponent(data);  // リンク先にデータを保持
    link.download = fname;
    link.click();

}
