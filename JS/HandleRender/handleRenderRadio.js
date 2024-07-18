export const handleRenderRadio = (radioData) => {
    const radioChannel = document.querySelector('.radio_channel');
    radioChannel.innerHTML += radioData.map((data, index) => `
                        <div class="radio_chanel_item">
                        <div class="radio_channel_item_top w-108 h-108">
                            <div class="radio_channel_item_top-main w-108 h-108">
                                <img src="${data.img}" alt="">
                            </div>
                            <div class="radio_channel_item_top-mini">
                                <img src="${data.img2}" alt="">
                            </div>
                            <div class="radio_channel_item_top-like">
                                <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg" alt="">
                            </div>
                            <div class="radio_channel_item_top-play">
                                <i class="fa-solid fa-play"></i>
                            </div>
                        </div>
                        <div class="radio_channel_item_bot mt-4">
                            <h3 class="">${data.title}</h3>
                            <h3 class="viewer" style="color: rgb(184, 183, 181); font-size: 10px;">${data.view}</h3>
                        </div>
                    </div>
                        ` )
}

//Time
export const handleTime = (radioData) => {
    const radioStream = document.querySelector('.radio_stream_time');
    radioStream.innerHTML += radioData.map((data) => `
                        <div class="radio_stream_time_hour">${data.time}</div>
                        ` ).join("")
}

export const handleRenderRadioCalender = (radioData, idStream) => {
    const radioStream = document.getElementById(idStream);
    radioStream.innerHTML += radioData.map((data) => `
                        <div class="radio_stream_calendar_item" style="width:${data.width}px">
                                <img src="${data.img}" alt="">
                                <div class="radio_stream_calendar_item_title">
                                    <h3 style="font-size: 15px; font-weight: bold;">${data.title}</h3>
                                    <p style="font-size: 12px;">${data.time}</p>
                                </div>
                            </div>
                        ` ).join("")
}
