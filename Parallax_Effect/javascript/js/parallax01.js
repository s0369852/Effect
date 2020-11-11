
/*
    parseInt() = 문자형 데이터를 정수형 데이터로 바꾼다. 
    pageXoffset = 브라우저의 문서 위치(스크롤된 위치)의 x좌표를 반환한다. 
    pageYoffset = 브라우저의 문서 위치(스크롤된 위치)의 y좌표를 반환한다. 
*/

/*
    패럴럭스 작업시 가장 기본이 되는 것은 scrollTop값이다. 
    
    scrollTop값하고 각 section의 offset값을 비교하는 것.
    두 값을 비교해서 값이 같으면 section의 컨텐츠가 나오도록 만든다. 
*/

window.addEventListener("scroll", () => {
    // let pageYOffset = window.pageYOffset
    let pageYOffset = window.pageYOffset + screen.height / 3;
    // jquery에서는 scrollTop값이라고 쓰지만, javascript에서는 pageYOffset이라고 쓴다. 
    // 현재의 height값만 더해주면 더 늦게 나타나게 할 수 있다.
    // jquery에서는 $(window).height -> javascript에서는 screen.height

    // console.log(parseInt(pageYOffset));

    // 출력용
    document.querySelector(".pageYOffset").textContent = parseInt(pageYOffset);
    document.querySelector(".s1OT").textContent = document.getElementById("section1").offsetTop;
    //  querySelector를 사용해도 되지만, id는 getElemtById를 사용해도 된다. getElementById를 사용하면 #은 붙이지 않아도 된다. 
    //  offset값은 0,0을 기준으로 했을때 현재 높이값을 말한다. 
    document.querySelector(".s2OT").textContent = document.getElementById("section2").offsetTop;
    document.querySelector(".s3OT").textContent = document.getElementById("section3").offsetTop;
    document.querySelector(".s4OT").textContent = document.getElementById("section4").offsetTop;
    document.querySelector(".s5OT").textContent = document.getElementById("section5").offsetTop;
    document.querySelector(".s6OT").textContent = document.getElementById("section6").offsetTop;
    document.querySelector(".s7OT").textContent = document.getElementById("section7").offsetTop;
    document.querySelector(".s8OT").textContent = document.getElementById("section8").offsetTop;
    document.querySelector(".s9OT").textContent = document.getElementById("section9").offsetTop;
    // 화면의 width값이 달라지면, offsetTop값도 달라진다. (화면의 width값이 바뀔 때마다, offsetTop값도 바뀌게 해주는 메서드가 있다.)

    // 출력용(민트)
    if ( pageYOffset > document.getElementById("section1").offsetTop ){
        document.querySelector(".s1OT").style.color = "#26d1db";
    } else {
        document.querySelector(".s1OT").style.color = "#ffffff";
    }

    if ( pageYOffset > document.getElementById("section2").offsetTop ){
        document.querySelector(".s2OT").style.color = "#26d1db";
    } else {
        document.querySelector(".s2OT").style.color = "#ffffff";
    }

    if ( pageYOffset > document.getElementById("section3").offsetTop ){
        document.querySelector(".s3OT").style.color = "#26d1db";
    } else {
        document.querySelector(".s3OT").style.color = "#ffffff";
    }

    if ( pageYOffset > document.getElementById("section4").offsetTop ){
        document.querySelector(".s4OT").style.color = "#26d1db";
    } else {
        document.querySelector(".s4OT").style.color = "#ffffff";
    }

    if ( pageYOffset > document.getElementById("section5").offsetTop ){
        document.querySelector(".s5OT").style.color = "#26d1db";
    } else {
        document.querySelector(".s5OT").style.color = "#ffffff";
    }

    if ( pageYOffset > document.getElementById("section6").offsetTop ){
        document.querySelector(".s6OT").style.color = "#26d1db";
    } else {
        document.querySelector(".s6OT").style.color = "#ffffff";
    }

    if ( pageYOffset > document.getElementById("section7").offsetTop ){
        document.querySelector(".s7OT").style.color = "#26d1db";
    } else {
        document.querySelector(".s7OT").style.color = "#ffffff";
    }

    if ( pageYOffset > document.getElementById("section8").offsetTop ){
        document.querySelector(".s8OT").style.color = "#26d1db";
    } else {
        document.querySelector(".s8OT").style.color = "#ffffff";
    }

    if ( pageYOffset > document.getElementById("section9").offsetTop ){
        document.querySelector(".s9OT").style.color = "#26d1db";
    } else {
        document.querySelector(".s9OT").style.color = "#ffffff";
    }

    // 나타나기
    if ( pageYOffset > document.getElementById("section1").offsetTop ){
        document.getElementById("section1").classList.add("show");
    } else {
        document.getElementById("section1").classList.remove("show");
    }

    if ( pageYOffset > document.getElementById("section2").offsetTop ){
        document.getElementById("section2").classList.add("show");
    } else {
        document.getElementById("section2").classList.remove("show");
    }

    if ( pageYOffset > document.getElementById("section3").offsetTop ){
        document.getElementById("section3").classList.add("show");
    } else {
        document.getElementById("section3").classList.remove("show");
    }

    if ( pageYOffset > document.getElementById("section4").offsetTop ){
        document.getElementById("section4").classList.add("show");
    } else {
        document.getElementById("section4").classList.remove("show");
    }

    if ( pageYOffset > document.getElementById("section5").offsetTop ){
        document.getElementById("section5").classList.add("show");
    } else {
        document.getElementById("section5").classList.remove("show");
    }

    if ( pageYOffset > document.getElementById("section6").offsetTop ){
        document.getElementById("section6").classList.add("show");
    } else {
        document.getElementById("section6").classList.remove("show");
    }

    if ( pageYOffset > document.getElementById("section7").offsetTop ){
        document.getElementById("section7").classList.add("show");
    } else {
        document.getElementById("section7").classList.remove("show");
    }

    if ( pageYOffset > document.getElementById("section8").offsetTop ){
        document.getElementById("section8").classList.add("show");
    } else {
        document.getElementById("section8").classList.remove("show");
    }
    
    if ( pageYOffset > document.getElementById("section9").offsetTop ){
        document.getElementById("section9").classList.add("show");
    } else {
        document.getElementById("section9").classList.remove("show");
    }

});
