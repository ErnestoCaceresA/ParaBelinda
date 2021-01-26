const translate = document.querySelectorAll(".translate");
const translateRigth = document.querySelectorAll(".translateRigth");
const translateLeft = document.querySelectorAll(".translateLeft");

window.addEventListener(`scroll`, () => {
    let scroll = window.pageYOffset;
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })

    translateRigth.forEach(element => {
        let speed = 1.1;
        element.style.transform = `translateX(${scroll * speed}px)`;
    })

    translateLeft.forEach(element => {
        let speed = 1.1;
        element.style.transform = `translateX(${-scroll * speed}px)`;
    })


})


