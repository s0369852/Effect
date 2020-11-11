const cursor = $(".cursor");
const follower = $(".cursor-follower");

// 움직임 효과
$(window).mousemove(function(e){
    // GSAP로 작업
    gsap.to(cursor, { duration: 0.3, left: e.pageX - 5, top: e.pageY - 5 });
    gsap.to(follower, { duration: 1, left: e.pageX - 15, top: e.pageY - 15 });
    // 기본값이 px이기 때문에 따로 px를 적어주지 않아도 된다. 
    // gsap.to(선택자, {속성: 속성값});
    

    // CSS로 작업
    //  cursor.css({ left: e.pageX - 5, top: e.pageY - 5});
    //  follow.css({ left: e.pageX - 15, top: e.pageY - 15});
    //  cursor를 가운데 오게 하고 싶다면 반지름정도를 빼주면 된다. 
});

// 오버 효과
$(".contents em").hover(function(){
    cursor.addClass("active");
    follower.addClass("active");
}, function(){
    cursor.removeClass("active");
    follower.removeClass("active")
});

// 출력값
$(window).mousemove(function(e){
    //console.log(e);
    $(".pageX").text(e.pageX);
    $(".pageY").text(e.pageY);
});

    /*
        pageX : 브라우저 페이지를 기준으로 X좌표의 위치를 반환한다.
        pageY : 브라우저 페이지를 기준으로 Y좌표의 위치를 반환한다. 
    */

