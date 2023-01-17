// 자바 스크립트 랜더링 제어 C base 이므로 c의 주석처리라던가를 따라감
// DOM요소 생성
/*function domAdd(){
    console.log('domAdd');
}*/
/*  변수 선언을 기본적으로 추천  const= 변수를 상수로, function도 지정가능 이름이 없으면 =>*/
const domAdd = () => {
    console.log('domAdd');
    const btn1 = document.createElement("button");
    btn1.innerHTML = '버튼1';
    document.getElementById("content").append(btn1)
    btn1.id = "bt1";
    btn1.className = "btc";

    const btn2 = document.createElement("button");
    btn2.innerHTML = '버튼2';
    document.getElementById("content").append(btn2)
    btn2.id = "bt2";
    btn2.className = "btc";

    const btn3 = document.createElement("button");
    btn3.innerHTML = '버튼3';
    document.getElementById("content").append(btn3)
    btn3.id = "bt3";
    btn3.className = "btc";
}

const domRead = () => {
    const btc = document.querySelectorAll(".btc");
    console.log(btc);
    //for loop 변수선언시 let/ const 두개만 쓰자!
    for(let i=0; i<btc.length ; i++){
        console.log(btc[i]);
    }
    // for ... in 순회
    console.log("** for  in**")

    for (let k in btc){
        console.log(btc[k]);}
    //for each 순회 
    console.log("** for each **");

    btc.forEach((item,k) => console.log(item,k))
    
    //for .. of 순회
    console.log("** for of **");

    for (let [k,v] of btc.entries()){
        console.log(k,v.innerHTML);
        if (k == 1) break;
    }

    }

document.addEventListener("DOMContentLoaded",() =>{
   // document.getElementById("idh1").innerHTML = "<a href='http://google.com' >K-Digital";
/* addevk ent listner 라는 method 호출- DOM이 로드가 다 되었다면,call back함수를 실행하라.
이름이 없으면 =>로 대체 - 순서상으로 뒤쪽으로 미뤄서 content 가 다 로드한 다음에 스크립트를 실행,
innerHTML- html 내의 내용을 "K-digital"로 바꾸라는것 .브레이슬릿과 괄호를 조금 주의 */
 domAdd();
 //DOM 요소 접근 
 domRead();
});
