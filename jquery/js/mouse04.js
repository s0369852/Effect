/*
    여기서 포인트는 pageX, pageY값을 가지고 가공을 계속해서, fmouseX, fmouseY값을 끌어내는 것이다. 

*/


// 전역 변수
let x = 0, 
    y = 0,
    mouseX = 0,
    mouseY = 0,
    angleX = 0,
    angleY = 0,
    fmouseX = 0,
    fmouseY = 0;

$(window).mousemove(function(e){
    x = e.pageX;        // 마우스 X축 좌표값
    y = e.pageY;        // 마우스 Y축 좌표값
    // let x = e.pageX;
    // let을 지정해주면 함수안에서만 사용이 되는 지역변수가 되고 let없이 변수를 지정하면 전역변수가 된다. 그래서 전역변수의 값을 바꿔준다.

    // 문제는 움직일때마다, x좌표와 y좌표를 빼줘야 한다는 것이다. 그러면 내가 있는 값을 기준으로 해서 바뀌어 버린다. 
    // 이때 mouseX,mouseY를 0으로 맞춰주면 정면으로 보이게 된디.
    //  mouseX = $(window).width()/2 - x;             // 전체 화면의 반값, 마우스 X축 좌표값을 가운데로 설정.
    //  mouseY = $(window).height()/2 - y;           // 전체 높이의 반값, 마우스 Y축의 좌표값을 가운데로 설정. 

    // ,마우스의 X축과 Y축의 최소값 -50, 최대값 50
    mouseX = Math.max(-50, Math.min(50, $(window).width()/2 - x));
    mouseY = Math.max(-50, Math.min(50, $(window).height()/2 - y));
    /* 
    mouseX = Math.max(-50, Math.min(50, $(window).width()/2 - x)); -> $(window).width()/2 - x는 가운데 설정이기 때문에 0이다. 그렇기 때문에 min으로 봤을때 50과 0 중에서는 0이 선택이 된다. Y값도 마찬가지.
    mouseX = Math.max(-50, 0);
    mouseY = Math.max(-50, 0);
    */    

    //  -50, 50을 설정해줬어도 값이 너무 많기 때문에 angle을 이용해서 각도를 설정해준다. (조금 더 완화.)
    angleX = (12 * mouseX) / 100;
    angleY = (12 * mouseY) / 100;

    fmouseX += (angleX - fmouseX) * 1/10; 
    fmouseY += (angleY - fmouseY) * 1/10;

    /*
    fmouseX = 100;
    fmouseY = 100;

    fmouseX += 200;     // +를 넣어주면 대입연산자, 기존의 값에 다가 계속해서 더해준다. 
    fmouseY += 200;

    console.log(fmouseX);           // 300
    console.log(fmouseY);           // 300
    */

    // 커서
    gsap.to(".cursor", {duration: 0.3, left: x, top: y});

    // 움직임
    //  $(".move-image").css("width","300px")                           => 속성이 1개일때.
    //  $(".move-image").css({"width":"300px", "height":"400px"})       => 속성이 2개 이상일때.
    $(".move-image").css({"transform": "translate(-50%, -50%) perspective(600px) rotateX("+ fmouseY +"deg) rotateY("+ fmouseX +"deg)"});
    /*
        움직임이 내 생각과는 다르게 마음대로 움직인다. 
        그렇다면 마우스를 이동할때 어느정도의 각도까지만 움직이게끔 설정을 해줘야 한다.
        우선은 쉽게 하기 위해서 기준점을 화면 한가운데로 잡아줘야 한다.
        기준점의 기본값은 좌측 상단이다. (0,0)
        여기서 화면 한가운데로 기준점을 이동하고 싶다면, 
        전체 너비를 구한다음 그 값의 반을 기준점에 더해주고,
        전체 높이를 구한다음 그 값의 반을 기준점에 더해주면 된다. 
    */
});

// 출력
$(window).mousemove(function(e){
    $(".pageX").text(x);
    $(".pageY").text(y);
    $(".mouseX").text(mouseX);
    $(".mouseY").text(mouseY);
    $(".angleX").text(angleX);
    $(".angleY").text(angleY);
    $(".fmouseX").text(Math.round(fmouseX));
    $(".fmouseY").text(Math.round(fmouseY));
});


/*
    .addClass() = 선택한 요소에 클래스를 추가하는 메서드.
    .removeClass() = 선택한 요소에 클래스를 삭제하는 메서드.
    .text() = 선택한 요소에 텍스트를 가져오거나 변경하는 메서드.
    .mousemove() = 선택한 요소 범위 내에서 마우스를 움직였을 때 이벤트가 발생한다. 
    .hover() = 선택한 요소에서 마우스를 올렸을 때와 벗어 났을 때 각각 이벤트가 발생한다. 

    pageX = 브라우저 페이지를 기준으로 X좌표의 위치를 반환한다. 
    pageY = 브라우저 페이지를 기준으로 Y좌표의 위치를 반환한다. 
    Math.max() = 주어진 수 중에서 가장 큰 값을 반환한다. 
    Math.min() = 주어진 수 중에서 가장 작은 값을 반환한다. 
    Math.ceil() = 숫자 보다 크거나 같은 수 중에서 가장 작은 정수를 반환한다. 
    Math.floor() = 제공된 숫자 보다 작거나 같은 가장 큰 정수를 반환한다. 
    Math.round() = 제공된 숫자를 반올림하여 가장 가까운 정수를 반환한다. 
    Math.random() = 0과 1사이의 난수 값을 반환한다. 
*/

/*
let max = Math.max(100, 200);       //  200
let min = Math.min(100, 200);       //  100

let xx = 100;
let yy = -200;
let zz = Math.min(xx, yy);          //  -200

let arr = [100, 200, 300];
let max = Math.max(...arr);         
console.log(max);                   //  300


// 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자.  (올림)
let ceil = Math.ceil(0.95);          // 1
let ceil = Math.ceil(4);             // 4
let ceil = Math.ceil(6.00005);       // 7
let ceil = Math.ceil(-0.95);         // -0
let ceil = Math.ceil(-4);            // -4

// 주어진 수 이하의 가장 큰 정수                        (내림)
let floor = Math.floor(39.35);       // 39
let floor = Math.floor(39.85);       // 39
let floor = Math.floor(4);           // 4

// 입력값을 반올림한 값과 가장 가까운 정수를 출력       (반올림)
let round = Math.round(20.49);       // 20
let round = Math.round(20.5);        // 21
let round = Math.round(20)           // 20

// random => 0~1사이의 난수 값
let random = Math.round(Math.random()*10);      // *10을 해준뒤 round(반올림)을 해주면 정수를 뽑아낼 수 있다. 
console.log(random);
*/