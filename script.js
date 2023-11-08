const Img = document.querySelector("#img");
const ButBack = document.querySelector(".back");
const ButNext = document.querySelector(".next");
const Circle = document.getElementsByClassName("circle");
const BkgoundGrad = document.querySelector(".backgoundGradient");
let indexImg = 1;

function changeCircle(number) {
    for (let i = 0; i < Circle.length; i++) {
        Circle[i].style.backgroundColor = i === number - 1 ? 'rgb(149, 149, 149)' : 'white';
    }
}

function changeImage(direction) {
    switch (indexImg) {
        case 1:
            Img.setAttribute("src", `img/${direction === 'next' ? 2 : 3}.jpeg`);
            BkgoundGrad.style.background = `radial-gradient(circle, rgba(174,238,183,1) 0%, rgba(25,91,170,1) 100%)`;
            changeCircle(direction === 'next' ? 2 : 3);
            indexImg = direction === 'next' ? 2 : 3;
            break;
        case 2:
            Img.setAttribute("src", `img/${direction === 'next' ? 3 : 1}.jpeg`);
            BkgoundGrad.style.background = `radial-gradient(circle, rgba(21,157,170,1) 39%, rgba(0,0,0,1) 100%)`;
            changeCircle(direction === 'next' ? 3 : 1);
            indexImg = direction === 'next' ? 3 : 1;
            break;
        case 3:
            Img.setAttribute("src", `img/${direction === 'next' ? 1 : 2}.jpeg`);
            BkgoundGrad.style.background = `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,17,136,0.9534534534534534) 99%, rgba(0,212,255,1) 100%)`;
            changeCircle(direction === 'next' ? 1 : 2);
            indexImg = direction === 'next' ? 1 : 2;
            break;
    }
}

ButBack.addEventListener("click", () => {
    changeImage('back');
});

ButNext.addEventListener("click", () => {
    changeImage('next');
});
