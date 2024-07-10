export const handleSlideRadio = () => {
    const radioItems = document.querySelectorAll(".radio_chanel_item");
    const radioChannel = document.querySelector('.radio_channel');
    const widthSlide = document.querySelector(".radio_channel_wrapper").offsetWidth;
    const tabs = Math.ceil(radioItems.length / 5);
    let index = 0;
    let timerId;

    const rightBtn = document.querySelector('.next_btn');
    const leftBtn = document.querySelector('.prev_btn');

    rightBtn.onclick = () => {
        clearInterval(timerId);
        if (index >= tabs) index = 0;
        radioChannel.style.transform = `translateX(${widthSlide * -1 * index++}px)`;

    };

    leftBtn.onclick = () => {
        clearInterval(timerId);
        if (index === -1) index = tabs - 1;
        radioChannel.style.transform = `translateX(${widthSlide * -1 * index--}px)`;
    };
};