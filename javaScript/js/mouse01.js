
window.addEventListener("mousemove", function(event){
    
    // 출력 값
    // console.log(event);
    document.querySelector(".clientX").innerHTML = event.clientX;
    document.querySelector(".clientY").innerHTML = event.clientY;
    document.querySelector(".offsetX").innerHTML = event.offsetX;
    document.querySelector(".offsetY").innerHTML = event.offsetY;
    document.querySelector(".pageX").innerHTML = event.pageX;
    document.querySelector(".pageY").innerHTML = event.pageY;
    document.querySelector(".screenX").innerHTML = event.screenX;
    document.querySelector(".screenY").innerHTML = event.screenY;
});

// 마우스와 관련된 위치 (기준점에 따라 뽑아내는 값이 다르다.)
/*
    clientX : 브라우저 페이지를기준으로 X좌표의 위치를 반환한다.
    clientY : 브라우저 페이지를 기준으로 Y좌표의 위치를 반환한다.
    offsetX : 선택한 객체를 기준으로 X좌표의 위치를 반환한다.
    offsetY : 선택한 객체를 기준으로 Y좌표의 위치를 반환한다.
    pageX : 브라우저 페이지를 기준으로 X좌표의 위치를 반환한다.
    pageY : 브라우저 페이지를 기준으로 Y좌표의 위치를 반환한다. 
    screenX : 모니터 스크린을 기준으로 X좌표의 위치를 반환한다. 
    screenY : 모니터 스크린을 기준으로 Y좌표의 위치를 반환한다. 

*/

// 마우스 움직이기
// 마우스가 움직일 때, 마우스의 값을 설정할 수 있다. 

window.addEventListener("mousemove", function(event){

    //document.querySelector(".cursor").style.left = event.clientX - 25 + "px";
    //document.querySelector(".cursor").style.top = event.clientY - 25 + "px";
    // jquery는 px등의 단위를 안써줘도 상관없지만 JavaScript는 단위를 명확히 써줘야 한다. 
    
    let x = event.clientX - 25 + "px";
    let y = event.clientY - 25 + "px";
    
    // document.querySelector(".cursor").style.cssText = 'left: event.clientX - 25 + "px"; top: event.clientY - 25 + "px";'  -> 한줄로 작성하면 너무 길어져 가독성이 좋지 않다.
    document.querySelector(".cursor").style.cssText = "left:" + x +"; top: "+ y;

    // hover 효과

    /*
        document.querySelector(".contents em").addEventListener("mouseenter",function(){});
        document.querySelector(".contents em").addEventListener("mouseleave", function(){});
        화살표 함수로 조금 더 간략하게 표현 
        document.querySelector(".contents em").addEventListener("mouseenter", () => {
            document.querySelector(".cursor").classList.add("active");
        });
        document.querySelector(".contents em").addEventListener("mouseleave", () => {
            document.querySelector(".cursor").classList.remove("active");
        });
        문제는 JavaScript는 다중선택이 안된다는 것이다. -> 첫번째만 선택이 된다. 
        여기서 다중 선택을 하려면 em의 갯수가 몇개인지를 파악하고 JavaScript한테 알려줘야 한다. 
    */

    // 다중 선택
    /* 
        document.querySelector(".contents em").style.color = "#f00";
        document.querySelectorAll(".contents em").style.color = "#F00";  -> querySelectorAll을 사용했지만 아예 작동이 안되어 버린다. 왜냐면 여러개 있는것을 확인했으면 몇개인지 파악해서, 일일이 다 넣어줘야 한다. 
    */

    /*
        let em = document.querySelectorAll(".contents em");
    
        for(var i = 0; i <= em.length; i++){
            em[i].style.color = "red";      // 작동은 되지만 Uncaught TypeError: Cannot read property 'style' of undefined 라는 에러가 발생한다. 
            em[i].style.color = "red";     -> i값을 넣어주게 되면, 0부터 시작을 하고 em.length가 2니까, 0,1,2 총 3번이 반복이 되어버린다. 그래서 error가 뜨는 것. 
        i <= em.length; 여기서 =를 빼주면 된다. -> i < em.length;
        }
        em의 갯수를 파악한 다음에 for(반복문)으로 각각에다가 다 넣어준 것. 
    */

    //  forEach -> for문을 좀더 간략하게.
    /*
        document.querySelectorAll(".contents em").forEach(elem => { elem.style.color = "red"});
        querySelectorAll을 사용한다면, forEach로 갯수를 파악한 다음에 각각의 요소(elem)한테 style을 줘야 JavaScript가 작동이 된다. 
    */

    // 마무리
    document.querySelectorAll(".contents em").forEach(elem => {
        elem.addEventListener("mouseenter", () => {
            document.querySelector(".cursor").classList.add("active");
        });
    });
    document.querySelectorAll(".contents em").forEach(elem => {
        elem.addEventListener("mouseleave", () => {
            document.querySelector(".cursor").classList.remove("active");
        });
    });
});
