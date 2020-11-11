
/*
    .scrollTop  = .scrollTop() 메서드는 선택한 요소의 세로 스크롤 값을 설정하거나 반환한다. 
    .scrollLeft = .scrollLetf() 메서드는 선택한 요소의 가로 스크롤 값을 설정하거나 반환한다. 
    .offset() = .offset() 메서드는 선택한 위치 좌표 값(문서 기준)을 설정하거나 반환한다. 
    .width() = .width() 메서드는 선택한 요소의 가로(패딩,마진,보더 불포함)를 설정한다. 
    .height() = .height() 메서드는 선택한 요소의 높이(패딩, 마진, 보더 불포함)를 설정한다. 
    .text() = .text() 매서드는 선택한 요소에 텍스트를 가져오거나 변경한다. 
    .each() = .each() 메서드는 선택한 요소에 각각 함수를 실행한다. 

    parseInt() = 문자형 데이터를 정수형 데이터로 바꾼다. 
*/

/*
    패럴럭스 작업시 가장 기본이 되는 것은 scrollTop값이다. 
    
    scrollTop값하고 각 section의 offset값을 비교하는 것.
    두 값을 비교해서 값이 같으면 section의 컨텐츠가 나오도록 만든다. 
*/

// window(브라우저)가 스크롤이 되면 무언가를 작동시켜라.
$(window).scroll(function(){
    // const scrollTop = $(window).scrollTop();
    const scrollTop = $(window).scrollTop() + $(window).height() / 3;
    /*  
        나타나는 것이 조금 느리게 나타나기 때문에 흐름을 맞춰주기 위해, transform을 사용했다. 
        그래도 화면에 늦게 나타나 보이는 이유는 offset()top이 scrollTop에 딱 맞았을때 그때 보이기 시작하기 때문이다. 
        그래서 화면의 height만큼을 빼주거나 더해주면, 좀 더 일찍 나타나게 할 수가 있다. 

        const scrollTop = $(window).scrollTop() + $(window).height();
        => 어떤 현상이 생기느냐 이전 보다 좀 더 빠른 위치에서 컨텐츠가 나타나는 것을 볼 수 있다. 

        const scrollTop = $(window).scrollTop() + $(window).height() / 2;
        => 좀 전 보다 더 빠른 위치에서 나타나는 것을 볼 수 있다. 

        + $(window).height() / 2
        => 위치값을 조절해주면 타이밍을 맞출수가 있다. 
    */

    // 스크롤이 움직일때마다 값이 계속해서 변하는 것을 볼 수 있다. 
    // 보여지는 값은 스크롤 최상단에서 스크롤러(스크롤바)의 상단까지의 값이다. 
    // console.log(parseInt(scrollTop));


    // 출력용
    $(".scrollTop").text(parseInt(scrollTop));
    $(".s1OT").text(parseInt( $("#section1").offset().top ));
    $(".s2OT").text(parseInt( $("#section2").offset().top ));
    $(".s3OT").text(parseInt( $("#section3").offset().top ));
    $(".s4OT").text(parseInt( $("#section4").offset().top ));
    $(".s5OT").text(parseInt( $("#section5").offset().top ));
    $(".s6OT").text(parseInt( $("#section6").offset().top ));
    $(".s7OT").text(parseInt( $("#section7").offset().top ));
    $(".s8OT").text(parseInt( $("#section8").offset().top ));
    $(".s9OT").text(parseInt( $("#section9").offset().top ));

    // 출력용(레드)
    if( scrollTop > $("#section1").offset().top ){
        $(".s1OT").css("color", "red");
    } else {
        $(".s1OT").css("color", "white")
    }
    
    if( scrollTop > $("#section2").offset().top ){
        $(".s2OT").css("color", "red");
    } else {
        $(".s2OT").css("color", "white")
    }

    if( scrollTop > $("#section3").offset().top ){
        $(".s3OT").css("color", "red");
    } else {
        $(".s3OT").css("color", "white")
    }

    if( scrollTop > $("#section4").offset().top ){
        $(".s4OT").css("color", "red");
    } else {
        $(".s4OT").css("color", "white")
    }

    if( scrollTop > $("#section5").offset().top ){
        $(".s5OT").css("color", "red");
    } else {
        $(".s5OT").css("color", "white")
    }

    if( scrollTop > $("#section6").offset().top ){
        $(".s6OT").css("color", "red");
    } else {
        $(".s6OT").css("color", "white")
    }

    if( scrollTop > $("#section7").offset().top ){
        $(".s7OT").css("color", "red");
    } else {
        $(".s7OT").css("color", "white")
    }

    if( scrollTop > $("#section8").offset().top ){
        $(".s8OT").css("color", "red");
    } else {
        $(".s8OT").css("color", "white")
    }

    if( scrollTop > $("#section9").offset().top ){
        $(".s9OT").css("color", "red");
    } else {
        $(".s9OT").css("color", "white")
    }

    //  나타나기
    if( scrollTop > $("#section1").offset().top ){
        $("#section1").addClass("show");
    }
    if( scrollTop > $("#section2").offset().top ){
        $("#section2").addClass("show");
    }
    if( scrollTop > $("#section3").offset().top ){
        $("#section3").addClass("show")
    }
    if( scrollTop > $("#section4").offset().top ){
        $("#section4").addClass("show")
    }
    if( scrollTop > $("#section5").offset().top ){
        $("#section5").addClass("show")
    }
    if( scrollTop > $("#section6").offset().top ){
        $("#section6").addClass("show")
    }
    if( scrollTop > $("#section7").offset().top ){
        $("#section7").addClass("show")
    }
    if( scrollTop > $("#section8").offset().top ){
        $("#section8").addClass("show")
    }
    if( scrollTop > $("#section9").offset().top ){
        $("#section9").addClass("show")
    }
});