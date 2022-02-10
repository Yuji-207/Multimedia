// form
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
  }).mount('#items')


// recipe.htmlに遷移
document.getElementById('submit').onclick = () => {

    const eval = document.getElementById('eval').value;
    const body = document.getElementById('body').value;
    const acidity = document.getElementById('acidity').value;
    const bitterness = document.getElementById('bitterness').value;
    const note = document.getElementById('note').value;

    window.location.href = 'recipes.html' + getParams() + '&' + makeParams({
        'eval': eval,
        'body': body,
        'acidity': acidity,
        'bitterness': bitterness,
        'note': note
    }).slice(1);  // ?を削除

};


// timer.htmlに戻る
document.getElementById('back').onclick = () => {
    window.location.href = 'create.html' + getParams();
};
