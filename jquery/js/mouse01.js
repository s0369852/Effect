// 마우스 움직이기
// 마우스가 움직일 때, 마우스의 값을 설정할 수 있다. 

    //출력용
    $(window).mousemove(function(event){
        $(".clientX").text(event.clientX);    
        // console.log(event)에서 찍혀있던 값중 clientX값을 가져와서 .clientX클래스를 가진 li태그에 text를 입력해 주겠다는 말이다.
        $(".clientY").text(event.clientY);
        $(".offsetX").text(event.offsetX);
        $(".offsetY").text(event.offsetY);
        $(".pageX").text(event.pageX);
        $(".pageY").text(event.pageY);
        $(".screenX").text(event.screenX);
        $(".screenY").text(event.screenY);
    });

$(window).mousemove(function(event){
    // console.log(event);
    $(".cursor").css({ left: event.clientX - 25, top: event.clientY - 25});
    // px가 들어가면 문자열이기 때문에 ""를 써준다.
    // 뒤에 - 25는 cursor의 width값이 50px이기 때문에 -25를 해줘서 cursor의 위치를 중앙으로 오게 해줬다.

    // $(".contents em").mousehover(function(){});
    // $(".contents em").mouseout(function(){});

    $(".contents em").hover(function(){ // mousehover + mouseout
        $(".cursor").addClass("active");
    }, function(){
        $(".cursor").removeClass("active");
    });

});

