const cursor = document.querySelector(".cursor");
const circle = cursor.getBoundingClientRect();

// cursor의 width값만을 가져올 수 있다. (예전 방식) 
//  const width = cursor.offsetWidth;
//  const height = cursor.offsetHeight;

//  console.log(width);
//  console.log(circle.width);

function follow(e){
    gsap.to(cursor, {duration: 0.5, left:e.pageX - circle.width, top: e.pageY - circle.height});
};

document.addEventListener("mousemove", follow);

// 똑같은 소스를 짜도 jquery보단 javascript가 좀 더 빠르다. jquery는 버벅이는 현상이 있다. 