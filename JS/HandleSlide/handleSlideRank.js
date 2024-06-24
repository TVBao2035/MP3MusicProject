export const handleSlideRank = () => {
    const listItems = document.querySelectorAll(".item_slide");
    const widthSlide = document.querySelector(".slide").offsetWidth;
    const slide = document.querySelector('.list_image');
    const tabs = (listItems.length / 3).toFixed();
    console.log(tabs);
    let index = 0;
    var timerId 
    const startSlide = () => {
        timerId = setInterval(() => {
            console.log(index);
            if(index >= tabs) index = 0;
            if(index === -1) index = tabs -1;
            slide.style.transform = `translateX(${widthSlide*-1 * index++}px)`;
        }, 2000);
    }
    startSlide();
    const rightBtn = document.querySelector('.btn_right--slide');
    const leftBtn = document.querySelector('.btn_left--slide');

    rightBtn.onclick = () => {
        clearInterval(timerId);
        if(index >= tabs) index = 0;
        slide.style.transform = `translateX(${widthSlide*-1 * index++}px)`;
        startSlide();
    };
    leftBtn.onclick = () => {
        clearInterval(timerId);
        console.log(index);
        if(index === -1) index = tabs-1;
        slide.style.transform = `translateX(${widthSlide* -1 * index--}px)`;
        startSlide();
    }
}