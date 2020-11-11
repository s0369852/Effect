const cursor = $(".cursor");

// 움직임 효과

$(document).mousemove(function(e){
    gsap.to(cursor, {duration: 0.4, left : e.pageX - 5, top: e.pageY - 5});
});

// 오버 효과
$(".contents em").hover(function(){
    cursor.addClass("active");
}, function(){
    cursor.removeClass("active");
});


// 출력용
$(".info.bottom li").click(function(){
    const text = $(this).text();            // text라는 메서드는 글씨를 바꿔주는 것이지만, 바꿔오는 것도 할 수 있다. 
    //  const text = $(".info.bottom li").text();           // this를 사용하지 않고 $(".info.bottom li")로 써주게 되면 li가 전부 나온다.
    //  alert(text)
    $(".info.bottom li").removeClass("active");
    $(this).addClass("active");
    $(".cursor").css("mix-blend-mode", text);
});