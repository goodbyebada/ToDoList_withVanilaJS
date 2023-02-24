//js -> html 로 이동

//1.picList 만들기
const picList = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

//2.random하게 뽑기
const chosenPic = picList[Math.floor(Math.random() * picList.length)];

//3.createElement() js->html
const picBg = document.createElement("img");

// console.log(picBg);
//지정한 tagName의 HTML 요소를 만들어 반환합니다.
//<img

picBg.src = `pic/${chosenPic}`;
// 경로 : 파일/파일명

//마지막으로 body에 추가
//appendChiilds는 body에 html을 추가함
document.body.appendChild(picBg);
