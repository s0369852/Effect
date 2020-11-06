// 원리는 왼쪽 오른쪽 똑같은 글씨를 2개씩 써주고 중앙을 기준으로 반대편이 overflow:hidden으로 가려주고, skew로 기울기 작업을 한 것이다. 

// 다중 선택 -> querySelectorAll , forEach
const spanSlow = document.querySelectorAll(".spanSlow");
const spanFast = document.querySelectorAll(".spanFast");

// 익명 함수 
// const mouseMove = function(e){};

// 화살표 함수 
const mouseMove = e => {
    // 가운데 기준점 구하기. 
    let positionSlow = (e.pageX - (window.innerWidth/2)) * 0.1;
    let positionFast = (e.pageX - (window.innerWidth/2)) * 0.2;

    // 다중 선택으로 해야하기 때문에 이렇게 하면 오류가 난다.
    //  spanSlow.style.transform = `trnaslateX(${positionSlow})`;
    //  spnaFast.style.transform = `trnaslateX(${positionFast})`;

    // 다중 선택
    //  spanSlow.forEach(function(){});
    spanSlow.forEach( elem => {        // 변수 elem은 .spanSlow 각각의 원소들이다. 
        elem.style.transform = `translateX(${positionSlow}px)`;
    });
    spanFast.forEach( elem => {        // 변수 elem은 .spanFast 각각의 원소들이다. 
        elem.style.transform = `translateX(${positionFast}px)`;
    });

    // 출력용
    document.querySelector(".pageX").textContent = e.pageX;
    document.querySelector(".pageY").textContent = e.pageY;
    document.querySelector(".positionSlow").textContent = Math.round(positionSlow);
    document.querySelector(".positionFast").textContent = Math.round(positionFast);

};

window.addEventListener("mousemove", mouseMove);    // ->  mouseMove함수의 호출은 이곳에서 하고 있다. 
