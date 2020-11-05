/*
    pageX = 브라우저 페이지를 기준으로 X좌표의 위치를 반환한다. 
    pageY = 브라우저 페이지를 기준으로 Y좌표의 위치를 반환한다. 

    getBoundingClientRect() = 요소의 크기와 뷰포트 값을 반환한다. (width, height, x, y ) 
    setProperty() = 요소의 속성 값을 반환한다. (속성을 설정해준다.)
*/

let x = 0,
    y = 0;

let moveImg = document.querySelector(".move-image");


moveImg.addEventListener("mousemove", function(e){
    const rect = this.getBoundingClientRect()
    // console.log(rect);
    // position을 사용했기 때문에, top,left,right,bottom값이 다나오고, width, height값 과 x,y 마우스값이 다 나온다. 
    // jquery에서는 값을 다 구해줬지만, javaScript에서는 getBoundingClientRect로 다 가져올 수 있다. 

    // --x => css에서 만들어 놓은 변수.
    // x와 y의 값을 초기화 시켜줘야 한다. 
    this.style.setProperty("--x", e.clientX - (rect.width/2 + rect.left));
    this.style.setProperty("--y", e.clientY - (rect.height/2 + rect.top));

    // 커서
    gsap.to(".cursor", {duration: 0.3, left: e.pageX - 10, top: e.pageY - 10});
});

// 커서가 떠났을때
moveImg.addEventListener("mouseleave", function(e){
    this.style.setProperty("--x", 0);
    this.style.setProperty("--y", 0);
    // setProperty("속성", 속성값)
});

// 출력용
document.addEventListener("mousemove", function(e){
    document.querySelector(".clientX").textContent = e.clientX;
    document.querySelector(".clientY").textContent = e.clientY;
});