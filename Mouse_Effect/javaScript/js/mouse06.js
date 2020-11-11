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

const word = document.querySelector(".word");

// mouseeffect 기존의 javascript방식
// document.addEventListener("mousemove", function(){});

// 다른 방식은 함수를 따로 빼내는 것. 빼낸 함수의 이름을 다시 넣어주는 것. (소스가 복잡해지니까 따로 빼줘서 작업을 해주는 것.)

// 선언적 함수 -> 그냥 함수를 선언해서 기본으로 사용하는것.
//  function shadow(e){};

// 익명 힘수 -> 변수를 이용해서 작업해주는 것, 이것은 함수 이름이 없다. 
//  const shadow = function(e){};

// 화살표 함수 -> 익명 함수를 화살표함수로 바꿀수 있다. 'function'을 없애버리고 () = > {} 로 만든다. 
//  const shadow = (e) => {}
// 화살표 함수 -> 한번 더 생략이 가능하다. (파라미터가 1개 일 때.)
//  const shadow = e => {}

// 여기서 중요한 것은 보이는 화살표 함수 부터, 익명 함수, 선언적 함수가 모두 동일하다라는 것을 알아야 한다. 

const shadow = e => {
    // let x = e.x;    // pageX 와 x라는 값은 동일하다. 
    // let y = e.y;

    // 구조 분해 할당. = 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 javascript 표현식. 
    const { x, y } = e;     
    // 상수 안에 객체를 만든다. 속성값은 들어가지 않았다. -> 위의 let x, y를 간단하게 나타낸 것.
    // x의 값은 e.x; y의 값은 e.y를 나타낸 것이다.  
    const rect = word.getBoundingClientRect();
    // console.log(rect);
    const mouseX = (x - rect.left - rect.width/2) / rect.width * 5;
    const mouseY = (y - rect.top - rect.height/2) / rect.height * 5; 
    // rect.width * 5; 이런 값들은 x의 범위가 너무 커져서 범위를 조정하기 위해 직접만든 식. 이런 것들은 내가 만들어줘야 한다. 

    word.style.textShadow = `${mouseX}px ${-mouseY}px 0px rgba(255, 165, 9, 0.4), 
                            ${-mouseX}px ${mouseY}px 0px rgba(255, 35, 251, 0.4),
                            ${mouseY}px ${-mouseX}px 0px rgba(255, 255, 73, 0.4),
                            ${-mouseY}px ${mouseX}px 0px rgba(102, 249, 255, 0.4)`;

    //document.write("자바스크립트를"+ mouseX +" 실행했습니다. ")
    // 탬플릿 리터럴 (" 백틱 => ` " 을 사용한 문자표시. 문자열을 쉽게 결합하는 방법. 새로운 문자열을 삽입할 수 있는 기능을 제공한다. 이를 문자열 인터폴레이션(string interpolation)이라 한다.)
    //document.write(`자바스크립트를 ${mouseX} 실행했습니다.`)

    // 출력
    document.querySelector(".mouseX").textContent = Math.round(mouseX);
    document.querySelector(".mouseY").textContent = Math.round(mouseY);
    document.querySelector(".mouseX2").textContent = Math.round(-mouseX);
    document.querySelector(".mouseY2").textContent = Math.round(-mouseY);
};

document.addEventListener("mousemove", shadow);
// 마우스가 움직이는 이벤트가 발생할 때마다 shadow함수가 출력이 된다. 

/*
    변수 : 하나의 데이터를 저장하는 저장소
    배열 : 두개 이상의 데이터를 저장하는 저장소
    객체 : 데이터(속성(key), 속성값(value))를 저장하는 저장소 -> 변수, 배열, 함수 저장가능
    함수 : 실행 데이터를 저장하는 저장소. -> 변수, 배열, 객체 다 들어갈 수 있다. 

    함수의 종류는 굉장히 많다. (가장 기본적으로 사용하는 것은 선언적 함수.)
*/
