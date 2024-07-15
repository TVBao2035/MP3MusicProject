export const handleSlideRadio = () => {
    const radioItems = document.querySelectorAll(".radio_chanel_item");
    const radioChannel = document.querySelector('.radio_channel');
    const widthSlide = document.querySelector(".radio_channel_wrapper").offsetWidth;
    const tabs = Math.ceil(radioItems.length / 5);
    let index = 0;
    let timerId;

    const rightBtn = document.querySelector('.next_btn');
    const leftBtn = document.querySelector('.prev_btn');

    const startSlide = () => {
        timerId = setInterval(() => {
            if (index >= tabs - 1) {
                index = 0;
            } else {
                index++;
            }
            radioChannel.style.transform = `translateX(${widthSlide * -1 * index}px)`;
        }, 5000);
    };

    rightBtn.onclick = () => {
        clearInterval(timerId);
        if (index >= tabs - 1) {
            index = 0;
        } else {
            index++;
        }
        radioChannel.style.transform = `translateX(${widthSlide * -1 * index}px)`;
        startSlide();
    };

    leftBtn.onclick = () => {
        clearInterval(timerId);
        if (index <= 0) {
            index = tabs - 1;
        } else {
            index--;
        }
        radioChannel.style.transform = `translateX(${widthSlide * -1 * index}px)`;
        startSlide();
    };

    startSlide();
};

export const handleSlideRadioCalendar = () => {
    const calendarTop = document.querySelector('#radio_stream_calendar_top');
    const calendarBot = document.querySelector('#radio_stream_calendar_bot');
    const calendarTime = document.querySelector('#radio_stream_time');
    const widthSlide = 400;
    const rightBtn = document.querySelector('.calendar_next_btn');
    const leftBtn = document.querySelector('.calendar_prev_btn');
    
    let index = 0;
    let timerId;

    const startSlide = () => {
        timerId = setInterval(() => {
            if (index >= calendarTop.children.length - 1) {
                index = 0;
            } else {
                index++;
            }
            calendarTime.style.transform = `translateX(${widthSlide * -1 * index}px)`;
            calendarTop.style.transform = `translateX(${widthSlide * -1 * index}px)`;
            calendarBot.style.transform = `translateX(${widthSlide * -1 * index}px)`;
        }, 5000);
    };
    

    rightBtn.onclick = () => {
        clearInterval(timerId);
        if (index >= calendarTop.children.length - 1) {
            index = 0;
        } else {
            index++;
        }
        calendarTime.style.transform = `translateX(${widthSlide * -1 * index}px)`;
        calendarTop.style.transform = `translateX(${widthSlide * -1 * index}px)`;
        calendarBot.style.transform = `translateX(${widthSlide * -1 * index}px)`;
        startSlide();
    };

    leftBtn.onclick = () => {
        clearInterval(timerId);
        if (index <= 0) {
            index = calendarTop.children.length - 1;
        } else {
            index--;
        }
        calendarTime.style.transform = `translateX(${widthSlide * -1 * index}px)`;
        calendarTop.style.transform = `translateX(${widthSlide * -1 * index}px)`;
        calendarBot.style.transform = `translateX(${widthSlide * -1 * index}px)`;
        startSlide();
    };

    startSlide();
};
