
export const handleRenderItemsSlide = (slideData) => {
    const itemSlide = document.querySelector('.list_image');
    itemSlide.innerHTML += slideData.map((data, index) => `
                        <div class="d-flex item_slide align-items-center">
                            <div class="image">
                                <img src="${data.img}" alt="">
                            </div>
                            <div class="content w-100 ms-2">
                                <div class="d-flex flex-column ">
                                    <h6 class="text-white">${data.title}</h6>
                                    <p class="text_content">${data.actor}</p>
                                </div>
                                <div class="rank_number w-100 d-flex justify-content-between align-items-end">
                                    <p class="font_style_number mb-0 text-white">#${++index}</p>
                                    <p class="date_rank mb-0 fw-bolder">${data.date}</p>
                                </div>
                            </div>
                         </div>
                        ` )
}

// Chill  + Nhạc Remix cực bốc + mưa tháng sáu
export const handleRenderItemsFlex = (containerID,flexData) => {
    const itemFlex  = document.getElementById(containerID);
    itemFlex.innerHTML += flexData.map((data) =>      `
            <div class="col p-0 ps-4 item_list_sing">
                        <a href="" class="list_item_img">
                            <img src="${data.img}" alt="">
                            <div class="list_item_icon">
                                <i class="fa-regular fa-heart"></i>
                                <i class="fa-solid fa-play"></i>
                                <i class="fa-solid fa-ellipsis"></i>
                            </div>
                        </a> 
                         
                        <p class="list_item_title">${data.title}</p>
                    </div>
        ` )
}