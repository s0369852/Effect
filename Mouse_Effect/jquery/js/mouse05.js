/*
    .position() = 선택한 요소의 위치 좌표값(기준점 기준)을 설정하거나 변환한다.
    .width() = 선택한 요소의 너비(패딩/마진/보더 불포함)를 설정한다.
    .height() = 선택한 요소의 높이(패딩/마진/보더 불포함)를 설정한다. 
    .fadeToggle() = 선택한 요소를 천천히 보여주고, 숨긴다.

    pageX = 브라우저 페이지를 기준으로 X좌표의 위치를 반환한다. 
    pageY = 브라우저 페이지를 기준으로 Y좌표의 위치를 반환한다. 
    clientX = 브라우저 페이지를 기준으로 X좌표의 위치를 반환한다. 
    clientY = 브라우저 페이지를 기준으로 Y좌표의 위치를 반환한다. 
*/

// 전역 변수
let x = 0,
    y = 0;

// 커서
$(".move-image").mousemove(function(e){
    // gsap -> DOCS -> 여러가지 애니메이션 효과 
    gsap.to(".cursor", {duration: 0.3, left: e.pageX - 10, top: e.pageY - 10, ease: "power4.out"});

    // 좌표값을 중앙으로 설정 (0,0 => 좌측상단이 기준점.)
    // let x = 컨텐츠 박스의 width()/2 + 왼쪽의 여백값
    // let x = $(".move-image").width()/2;         // -> 컨텐츠 박스의 width()/2
    // let x = $(".move-image").position().left;   // -> 왼쪽의 여백값(왼쪽 포지션값)
    // 결국 x의 값은,
    // clientX값 - (컨텐츠 박스의 width()/2 + 왼쪽의 여백값) 해주면 0이 되면서 가운데에 기준점이 0이 되게 된다. 
    x = e.clientX - ($(".move-image").width()/2 + $(".move-image").position().left);
    y = e.clientY - ($(".move-image").height()/2 + $(".move-image").position().top);

    // console.log(x,y)  -> 한가운데에 마우스커서를 가져가면 0,0 이 나온다.
    
    $(".img").attr({"style": "transform: translate("+ x/20 +"px, "+ y/20 +"px)"});
    // 변수 x, y값을 그냥 넣어주면 너무 많이 움직이게 되므로 가공을 해서 넣어준다. 
});

// 출력용
$(window).mousemove(function(e){
    $(".clientX").text(e.clientX);
    $(".clientY").text(e.clientY);
    $(".mouseX").text(Math.floor(x)+"px");
    $(".mouseY").text(Math.floor(y)+"px");
});

// 좌표 확인
$(".cord").click(function(e){
    e.preventDefault();
    $(".cursor strong").fadeToggle();
});
