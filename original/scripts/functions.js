// パラメータを取得
function getParams() {
    let params = window.location.href;
    params = params.split('?')[1];
    params = '?' + params
    return params
}


// パラメータを作成
function makeParams(dict) {

    params = '?';

    for (let key in dict) {

        let value = dict[key];

        if (typeof(value) === 'string') {
            params += key + '=' + value + '&';
        } else {
            value.forEach(x => params += key + '=' + x + '&');  // 配列を展開して付加
        }
        
    }

    params = params.slice(0, -1);  // 末尾の&を削除
    return params

};

