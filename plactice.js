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
var cookienumver = 0;
var check1,check2,check3,check4,check5,check6,check7,check8,check9,check10,check11,check0;
var testadd;

u();

function redclear() {
    document.getElementById('hup').innerHTML = "";
}
//リスト数をカウントする処理
function countnumbers() {
    var getid = document.getElementById("countnumber");
    getid.innerHTML = 'リストの数' + addnumber;
}

/*onload = function(){
    check0 = document.getElementById('addlist0');
    check1 = document.getElementById('addlist1');
    check2 = document.getElementById('addlist2');
    check3 = document.getElementById('addlist3');
    check4 = document.getElementById('addlist4');
    check5 = document.getElementById('addlist5');
    check6 = document.getElementById('addlist6');
    check7 = document.getElementById('addlist7');
    check8 = document.getElementById('addlist8');
    check9 = document.getElementById('addlist9');
    check10 = document.getElementById('addlist10');
    check11 = document.getElementById('addlist11');
}*/

function save(){
    //消した後などのid付け替え
    if(document.getElementById('list').children.length == 0){
        console.log("リストは空です");
    }

    var save_list = [];
    var list0 = document.getElementById('list');
    var length2 = document.getElementById('list').children
    for(let i = 0; i < length2.length; i++){
        
        testadd = document.getElementById('list').children[i].textContent;
        console.log("保存されました"+length2.length + ": "  + testadd);
        var add_save_list = list0.children[i].textContent;
        save_list.push(add_save_list);
    }

    var setjson = JSON.stringify(save_list);
    localStorage.setItem("list",setjson);
}

function u(){
    if(localStorage.getItem('list')){
        var getjson = localStorage.getItem('list');
        var obj = JSON.parse(getjson);
        for(let i = 0; i < obj.length; i++){
            console.log(obj[i]);
            let create_li = document.createElement('li');
            create_li.textContent = obj[i];
            create_li.classList.add('removelist');
            create_li.setAttribute('onclick','deleteli(this)');
            console.log(create_li);
            document.getElementById('list').appendChild(create_li);
            addnumber = addnumber + 1;
            cookienumver ++;
            countnumbers();
            console.log(obj[i] + "を追加しました。");
        }
    }
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
        cookienumver ++;
        countnumbers();
        console.log(test + "を追加しました。");
    }
    }
}
//リストを消す処理
function deleteli(target_li) {
    target_li.remove();
    addnumber = addnumber - 1;
    cookienumver --;
    countnumbers();
    console.log("要素を削除しました");
    redclear();
    document.getElementById('input').value = "";
    save();
}
//全てのリストを消す処理
function alldeleteli() {
    var idsarch = document.getElementsByClassName('removelist');
    while(idsarch.length){
        idsarch[0].remove();
    }
    addnumber = 0;
    cookienumver = 0;
    countnumbers();
    console.log("全ての要素を削除しました。");
    redclear();
    document.getElementById('input').value = "";
    localStorage.removeItem('list');
}






