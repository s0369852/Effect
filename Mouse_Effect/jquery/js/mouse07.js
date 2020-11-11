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

// 약간의 버그가 있어서 브라우저가 안받아주면 잔상같이 흔들리는 현상이 생긴다. 
// 그것을 막기 위해서 svg를 이용해서 다른 방법이 있는데, 그것은 복잡하다. 

// / 2를 해주는 이유는 기준점을 좌측 상단에서 가운데로 주기 위한 값이다. 
const width = $(".cursor").outerWidth() / 2;
const height = $(".cursor").outerHeight() / 2;

/*
    console.log(width);
    width값은 패딩, 마진, 보더값이 불포함된 값이므로 만약 width값이 200px에 border값이 5px가 들어갔다면 결과적으로 width값을 2로 나누게 되면 100이 아닌 95가 나온다는 것을 볼 수 있다. 

    width = 패딩, 마진, 보더를 불포함 한다. 
    innerWidth = 패딩을 포함하고 마진과 보더를 불포함 한다. 
    outerWidth = 패딩과 보더를 포함하고 마진을 불포함 한다.

    따라서 보더 값까지 포함된 값을 가져오고 싶다면 outerWidth를 사용하면된다.
*/


$(window).mousemove(function(e){
    
    gsap.to(".cursor", {duration: 0.5, left: e.pageX - width, top: e.pageY - height});
    
    //  gsap.to(".cursor", {duration: 0.5, left: e.pageX - 100, top: e.pageY - 100});
    // 크기의 값을 픽셀이 아닌 vw로 준다면 화면의 크기에 따라 그 값이 달라질텐데 그렇다면 일정한 값이 아닌, 화면에 따라 다른 값을 들고와야 한다. 그렇게 하기 위해서는 값을 단정시키지 않고 값을 가져오면 된다.  
});