/*
    .position() = 선택한 요소의 위치 좌표값(기준점 기준)을 설정하거나 변환한다.
    .width() = 선택한 요소의 너비(패딩/마진/보더 불포함)를 설정한다.
    .height() = 선택한 요소의 높이(패딩/마진/보더 불포함)를 설정한다. 
    .innerWidth() = 선택한 요소의 가로(패딩 포함, 보더/마진 불포함)를 설정한다. 
    .innerHeight() = 선택한 요소의 높이(패딩포함, 보더/마진 불포함)를 설정한다.
    .outerWidth() = 선택한 요소의 가로(패딩/보더 포함, 마진 불포함)를 설정한다.
    .outerHeight() = 선택한 요소의 높이(패딩/보더 포함, 마진 불포함)를 설정한다.
    .Math.ceil() = 숫자 보다 크거나 같은 수 중에서 가장 작은 정수를 반환한다. 
    .Math.floor() = 제공된 숫자 보다 작거나 같은 가장 큰 정수를 반환한다. 
    .Math.round() = 제공된 숫자를 반올림하여 가장 가까운 정수를 반환한다.     

    innerWidth = 브라우저의 콘텐츠 영역의 너비(스크롤 포함)값을 반환한다. 
    innerHeight = 브라우저의 콘텐츠 영역의 높이(스크롤 포함)값을 반환한다. 
    outerWidth = 브라우저의 툴바/스크롤바를 포함한 바깝 영역의 너비를 반환한다. 
    outerHeight = 브라우저의 툴바/ 스크롤바를 포함한 바깥 영역의 높이를 반환한다. 
*/

//  $(window).mousemove(function(e){});
$(window).on("mousemove", mouseMove);       // on이라는 클릭이벤트를 사용하여서 ("mousemove", 함수명)을 쓸 수 있다. 

function mouseMove(e){
    // 원점 잡기 (* 0.1은 속도를 제어하기 위함)
    let positionSlow = (e.pageX - ($(window).width() / 2)) * 0.1 ;
    let positionFast = (e.pageX - ($(window).width() / 2)) * 0.2 ;

    //  $(".spanSlow").css({ "transform": "translateX("+ positionSlow +"px)" });
    //  $(".spanFast").css({ "transform": "translateX("+ -positionFast +"px)" });

    gsap.to(".spanSlow", {duration: 0.4, x: positionSlow});
    gsap.to(".spanFast", {duration: 0.4, x: -positionFast});

    // 출력용
    $(".pageX").text(e.pageX);
    $(".pageY").text(e.pageY);
    $(".positionSlow").text(parseInt(positionSlow));
    $(".positionFast").text(parseInt(positionFast));
};