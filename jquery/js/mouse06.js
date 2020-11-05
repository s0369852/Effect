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

// jquery가 편하긴 하지만 소스를 많이 잡아먹기 때문에 과부하가 걸릴 수 있다. 

$(window).mousemove(function(e){
    let x = e.pageX;
    let y = e.pageY;

    // 좌측 상단의 기본값을 별의 한가운데로 0,0으로 맞춰주기
    let mouseX = (x - ($(".word").width()/2 + $(".word").offset().left)) / $(".word").width() * 5;
    let mouseY = (y - ($(".word").height()/2 + $(".word").offset().top)) / $(".word").height() * 5;

    // jquey로 하기에는 부적절한 소스. 너무 길고, 소스도 많이 잡아먹는다. 만약에 하나만 한다고 하면 괜찮겠지만 여러개를 한다고 하면 안된다.
    $(".word").css({textShadow: ""+ mouseX +"px -"+ mouseY +"px 0px rgba(255, 165, 9, 0.4), -"+ mouseX +"px "+ mouseY +"px 0px rgba(255, 35, 251, 0.4), "+ mouseY +"px -"+ mouseX +"px 0px rgba(255, 255, 73, 0.4), -"+ mouseY +"px "+ mouseX +"px 0px rgba(102, 249, 255, 0.4)"});

    // 이 css속성을 jquery한테 줘야한다. 
    /*
    text-shadow: 10px -20px 0px rgba(255, 165, 9, 0.4), 
                -10px 20px 0px rgba(255, 35, 251, 0.4),
                20px -10px 0px rgba(255, 255, 73, 0.4),
                -20px 10px 0px rgba(102, 249, 255, 0.4);
    */

    
    // 출력용
    $(".mouseX").text(parseInt(mouseX));
    $(".mouseY").text(parseInt(mouseY));
    $(".mouseX2").text(parseInt(-mouseX));
    $(".mouseY2").text(parseInt(-mouseY));
});
