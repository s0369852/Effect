const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

// 움직임 효과
document.addEventListener("mousemove", (e) => {
    // cursor.style.left = e.pageX;
    // cursor.style.top = e.pageY;
    // 자바스크립트의 단점은 다중선택이 안된다는 것이다. 
    // 순수하게 자바스크립트로도 짤 수 있지만, 그렇게 되면, 계속 값을 인지하게 해야하고 소스가 계속 들어간다. 복잡해진다. 

    gsap.to(cursor, {duratioin: 0.3, left: e.pageX - 5, top: e.pageY - 5});
    gsap.to(follower, {duration: 1, left: e.pageX - 15, top: e.pageY - 15});
});

// 오버 효과
// document.querySelector(".contents em").style.color = "darkgreen";        -> 하나는 작동이 잘된다.
// document.querySelectorAll(".contents em").style.color = "darkgreen";     -> 두개 부터는 작동이 안된다.
//  let darkGreen = document.querySelectorAll(".contents em");

/*
for(let i = 0; i <= darkGreen.length; i++){
    // darkGreen[i].style.color = "darkgreen";      -> 작동이 되긴하는데 error가 뜬다.
    /
        darkGreen[0].style.color = "darkgreen";
        darkGreen[1].style.color = "darkgreen";     -> em이 2개 밖에 없으니까 이렇게 각각 넣어주면 error가 뜨지 않는다. 
        여기서,
        darkGreen[i].style.color = "darkgreen";     -> i값을 넣어주게 되면, 0부터 시작을 하고 darkGreen.length가 2니까, 0,1,2 총 3번이 반복이 되어버린다. 그래서 error가 뜨는 것. 
        i <= darkGreen.length; 여기서 =를 빼주면 된다. -> i < darkGreen.length;
    /
    
};

// console.log(darkGreen.length);       -> 2
*/

// 다중선택을 할때에는 querySelctorAll과 함께 forEach를 사용한다. 
document.querySelectorAll(".contents em").forEach(elem => {
    elem.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
        follower.classList.add("active");
    });
    elem.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
        follower.classList.remove("active");
    });
});

// 출력용
document.addEventListener("mousemove", (e) => {
    document.querySelector(".pageX").textContent = e.pageX;
    document.querySelector(".pageY").textContent = e.pageY;
});