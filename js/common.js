//카드 높이와 넓이를 수정합니다.
const allW = document.querySelector("#wrap").offsetWidth;

const card = document.querySelector(".cards");
const cardW = card.offsetWidth;

if(allW  > 1025){
      card.style.width = "20%";
      cardH = cardW/2;
      console.log(cardW);
      card.style.height = cardH + "px";
  
  }else if(allW > 500){
     card.style.width = "40%";
      cardH = cardW - 50;
      card.style.height = cardH + "px";

  }else{
      card.style.width = "60%";
      cardH = cardW + 100;
      card.style.height = cardH + "px";
    
  }







var datas=[
  {name :"홍길동", age: "26", year: "1995", month: "8", day: "21"}
];


function call(){




  //인풋에 입력한 유저 네임
  var userName = document.getElementById("name").value;




    //  var birth = prompt("생년월일을 입력해주세요","6자리 입력");
    var years;
    var birth = document.getElementById("birth").value;
    var a;
    var mon;
    var days;
    //생일 년도 정리  
    if(birth!=""){
        if(parseInt(birth.substr(0,2))>=00&&parseInt(birth.substr(0,2))<=50){
        var temp= document.getElementById("div1");
        var a = birth.substr(0,2);
        var mon = birth.substr(2,2);
        var days = birth.substr(4,2);
        //temp.innerHTML = birth.length;
        temp.innerHTML = "생일:20"+a+"년 "+mon+"월 "+days+"일";
        years = "20"+a;
        }
        else{
          var temp= document.getElementById("div1");
          var a = birth.substr(0,2);
          var mon = birth.substr(2,2);
          var days = birth.substr(4,2);
          //temp.innerHTML = birth.length;
          temp.innerHTML = "생일:19"+a+"년 "+mon+"월 "+days+"일";
          console.log(a);
          years = "19"+a;
        }
      var date = new Date();
      var arr =  date.toString().split(" ");
      var t = parseInt(arr[3])- parseInt(years);
      document.getElementById("div2").innerHTML ="당신의 이름은 " +userName+ " 입니다 <br>" + "나이는 현재 만"+ t+" 세입니다";
      //배열에 저장
      datas.push({name: userName, age: String( t ), year: years, month: mon, day: days});  

    }


  
  console.log(datas);

 }