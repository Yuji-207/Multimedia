document.getElementById('submit').onclick = () => {

    const name = document.getElementById('name').value;
    const beans = document.getElementById('beans').value;
    const temp = document.getElementById('temp').value;
    const water_class = document.getElementsByClassName('water');
    const time_class = document.getElementsByClassName('time');

    const waters = []
    for (let i = 0; i < water_class.length; i++) {
        waters.push(water_class[i].value);
    }

    const times = []
    for (let i = 0; i < time_class.length; i++) {
        times.push(time_class[i].value);
    }
    
    const recipe = {
        'name': name,
        'beans': beans,
        'temp': temp,
        'waters': waters,
        'times': times
    };

    save_as_json(recipe, 'variesta.json');

};


function save_as_json(data, fname) {

    data = JSON.stringify(data);  // JSONに変換

    const link = document.createElement('a');  // HTMLのリンク要素を生成
    link.href = "data:text/plain," + encodeURIComponent(data);  // リンク先にデータを保持
    link.download = fname;
    link.click();

}
