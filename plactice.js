//サイト接続時のパスワード入力
//let master = "2525";
//let word = "";
//let number ="0123456789";
//for (let o = 0; o < 4; o++) {
//    word += number[Math.floor(Math.random() * number.length)];
//}
//console.log(word);
//
//let i = 0;
//do{
//    let pas = prompt('パスワードを入力してください');
//    if(pas == word || pas == master) {
//        i = i+1;
//    } else {
//        alert("パスワードが違います");
//    }
//}while(i == 0)

var addnumber = 0;

function redclear() {
    document.getElementById('hup').innerHTML = "";
}
//リスト数をカウントする処理
function countnumbers() {
    console.log("リストの数は" + addnumber + "個です。");
    var getid = document.getElementById("countnumber");
    getid.innerHTML = 'リストの数' + addnumber;
}

//Enterキーで処理発動
addEventListener( "keydown", keydownfunc );
	//キーが押されたときに呼び出される関数
	function keydownfunc( event ) {
        if (event.keyCode == 13) {
            clickbtn();
        } else {
            return;
        }
	}




//リストを増やす処理
function clickbtn() {
    let test = document.getElementById('input').value;
    if(!test){
        console.log("入力欄が空なので入力を完了できません。")
    }else{ if(addnumber >= 12) {
        console.log("リストがいっぱいなのでこれ以上追加できません。タスクを削除してください。");
        document.getElementById('hup').innerHTML = ("リストがいっぱいなのでこれ以上追加できません。")
        return;
    }else{
        let create_li = document.createElement('li');
        create_li.textContent = test;
        create_li.classList.add('removelist');
        create_li.setAttribute('onclick','deleteli(this)');
        document.getElementById('list').appendChild(create_li);
        document.getElementById('input').value = "";
        addnumber = addnumber + 1;
        countnumbers();
        console.log(test + "を追加しました。");
        document.getElementById('resetbtn').disabled = false;
    }
    }
}
//リストを消す処理
function deleteli(target_li) {
    target_li.remove();
    addnumber = addnumber - 1;
    countnumbers();
    console.log("要素を削除しました");
    redclear();
    document.getElementById('input').value = "";
}
//全てのリストを消す処理
function alldeleteli() {
    var idsarch = document.getElementsByClassName('removelist');
    while(idsarch.length){
        idsarch[0].remove();
    }
    addnumber = 0;
    countnumbers();
    console.log("全ての要素を削除しました。");
    redclear();
    document.getElementById('input').value = "";
}






