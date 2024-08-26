export const handleRenderBXH = (bxhData) => {
    const bxh  = document.querySelector('.bxh');
    bxh.innerHTML += bxhData.map((data, index) => {
        let colorClass = '';
        if (index === 0) {
            colorClass = 'color-top1'; // Màu cho hạng 1
        } else if (index === 1) {
            colorClass = 'color-top2'; // Màu cho hạng 2
        } else if (index === 2) {
            colorClass = 'color-top3'; // Màu cho hạng 3
        }

        return `
            <div class="bxh-li row align-items-center">
                <div class="bxh-li-left col-12 col-md-6 d-flex">
                    <h3 class="mx-4 bxh-li-left-top ${colorClass}">${++index}</h3>
                    <div class="bxh-li-status">
                        <i class="fa-solid ${data.statusName}"></i>
                        <p>${data.statusNumber}</p>
                    </div>
                    <div class="bxh-li-song d-flex">
                        <div class="bxh-li-song-img">
                            <img class="w-4 h-4" src="${data.img}" alt="">
                            <div class="bxh-li-icon">
                                <i class="fa-solid fa-play ml-4 mt-1"></i>
                            </div>
                        </div>
                            
                        <div class="bxh-li-song-info">
                            <h4>${data.song}</h4>
                            <p>${data.singer}</p>
                        </div>
                    </div>
                </div>
                <div class="bxh-li-center col-12 col-md-4">
                    <p class="bxh-li-name">${data.song2}</p>
                </div>
                <div class="bxh-li-right col-12 col-md-2">
                    <p class="bxh-li-time">${data.time}</p>
                    <div class="bxh-li-right-icon">
                        <i class="fa-solid fa-microphone"></i>
                        <i class='bx bx-heart text-white'></i>
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}
