/*
    pageX = 브라우저 페이지를 기준으로 X좌표의 위치를 반환한다.
    pageY = 브라우저 페이지를 기준으로 Y좌표의 위치를 반환한다. 

    innerWidth = 브라우저의 콘텐츠 영역의 너비(스크롤 포함)값을 반환한다. 
    innerHeight = 브라우저의 콘텐츠 영역의 높이(스크롤 포함)값을 반환한다. 
    outerWidth = 브라우저의 툴바/스크롤바를 포함한 바깥 영역의 너비를 반환한다. 
    outerHeight = 브라우저의 툴바/스크롤바를 포함한 바깥 영역의 높이를 반환한다. 

    Math.max() = 주어진 수 중에서 가장 큰 값을 반환한다. 
    Math.min() = 주어진 수 중에서 가장 작은 값을 반환한다. 
    Math.ceil() = 숫자 보다 크거나 같은 수 중에서 가장 작은 정수를 반환한다. (올림) 
    Math.floor() = 제공된 숫자보다 작거나 같은 가장 큰 정수를 반환한다. (내림)
    Math.round() = 제공된 숫자를 반올림하여 가장 가까운 정수를 반환한다. (반올림)
    Math.random() = 0과 1사이의 난수 값을 반환한다. 
*/

let x = 0,
    y = 0,
    mouseX = 0,
    mouseY = 0,
    angleX = 0,
    angleY = 0,
    fmouseX = 0,
    fmouseY = 0;

document.addEventListener("mousemove", function(e){
    x = e.pageX;
    y = e.pageY;

    // 커서
    gsap.to(".cursor", {duration: 0.4, left: x, top: y});

    // 범위 설정(여기서 제일 중요한 것.)
    mouseX = Math.max(-50, Math.min(50, window.innerWidth/2 - x));
    mouseY = Math.max(-50, Math.min(50, window.innerHeight/2 - y));

    angleX = mouseX *12 /100;
    angleY = mouseY *12 /100;

    fmouseX += (angleX - fmouseX) * 1/10;
    fmouseY += (angleY - fmouseY) * 1/10;

    // 움직임
    let move = document.querySelector(".move-image");

    move.style.transform = "translate(-50%, -50%) perspective(600px) rotateX("+ fmouseY +"deg) rotateY("+ fmouseX +"deg)";
});

// 출력용
document.addEventListener("mousemove", function(){
    document.querySelector(".pageX").textContent = x;
    document.querySelector(".pageY").textContent = y;
    document.querySelector(".mouseX").textContent = mouseX;
    document.querySelector(".mouseY").textContent = mouseY;
    document.querySelector(".angleX").textContent = angleX;
    document.querySelector(".angleY").textContent = angleY;
    document.querySelector(".fmouseX").textContent = Math.round(fmouseX);
    document.querySelector(".fmouseY").textContent = Math.round(fmouseY);
});