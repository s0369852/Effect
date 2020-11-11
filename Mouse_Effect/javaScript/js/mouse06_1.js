// 다중 선택
// forEach문을 사용해야 한다.


window.addEventListener("mousemove", function(e){
    document.querySelectorAll(".word").forEach(elem => {    //elem은 querySelectorAll(".word"). 즉, .word의 각각의 원소들을 말한다.
        const { x ,y } = e;
        const rect = elem.getBoundingClientRect();
        const mouseX = (x - rect.left - rect.width/2) / rect.width * 2;
        const mouseY = (y - rect.top - rect.height/2) / rect.height *2; 

        elem.style.textShadow = `${mouseX}px ${-mouseY}px 0px rgba(255, 165, 9, 0.4), 
                                ${-mouseX}px ${mouseY}px 0px rgba(255, 35, 251, 0.4),
                                ${mouseY}px ${-mouseX}px 0px rgba(255, 255, 73, 0.4),
                                ${-mouseY}px ${mouseX}px 0px rgba(102, 249, 255, 0.4)`;
    
    // 출력용
    document.querySelector(".mouseX").textContent = Math.round(mouseX);
    document.querySelector(".mouseY").textContent = Math.round(mouseY);
    document.querySelector(".mouseX2").textContent = Math.round(-mouseX);
    document.querySelector(".mouseY2").textContent = Math.round(-mouseY);

    });
});

//  -----------------------------------------------------------------------------------------------------