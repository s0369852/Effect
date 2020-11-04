const cursor = document.querySelector(".cursor");

// 움직임 효과
document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {duration: 0.5, left: e.pageX - 5, top: e.pageY - 5});
});

// 오버 효과
document.querySelectorAll(".contents em").forEach(elem => {
    elem.addEventListener("mouseenter", () => {
        document.querySelector(".cursor").classList.add("active");
    });
    elem.addEventListener("mouseleave", () => {
        document.querySelector(".cursor").classList.remove("active");
    });
});

// 블렌드 효과 주기 
document.querySelectorAll(".info.bottom li").forEach(info => {
    info.addEventListener("click", function(){
        const text = this.textContent;          // = const text = this.innerHTML; (구버전용)
        //  const text = this.textContent || this.innerHTML -> 2개다 사용을 해야할 경우. (호환성을 생각해야하는 경우)

        document.querySelector(".cursor").style.mixBlendMode = text;
        // info.classList.remove("active");         -> info라는 값이 여기서는 안먹힌다.
        // 쉽게 해주기 위해선 다시, 선택자를 골라주고 forEach로 각각 적용시켜준다. (=> 코드낭비가 있는것이지만 일단은 이렇게. 나중에 Class를 배우면 된다.)
        document.querySelectorAll(".info.bottom li").forEach(li => {
            li.classList.remove("active");
            this.classList.add("active");
        });
    });
    //  info.classList.remove("active");            -> 밖에서는 먹힌다.
});