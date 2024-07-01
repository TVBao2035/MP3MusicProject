

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


export const handleRenderItemsTop = (flexData_Top) => {
    const itemTop = document.querySelector('#list_top');
    
    // Cập nhật nội dung:
    itemTop.innerHTML += flexData_Top.map((data) => `
        <div class="col p-0 ps-3 item_list_top">
            <a href="" class="list_top_item_img">
                <img src="${data.img}" alt="">
                <div class="list_top_item_icon">
                    <i class='bx bx-heart text-white' style="font-size: 26px;"></i>
                    <i class='bx bx-play-circle text-white' style="font-size: 46px; margin-left:10px;"></i>
                    <i class='bx bx-dots-horizontal-rounded text-white' style="font-size: 26px; margin-left:10px;"></i>
                </div>
            </a>
            <div class="d-flex flex-column justify-content-center" style="height: 100%; margin-top: 30px;">
                <p class="list_top_item_title fw-bolder mb-1">${data.title}</p>
                <p class="list_top_item_actor">${data.actor}</p>
            </div>
        </div>
    `).join('');

    // Xử lý tách diễn viên thành các phần tử <span> riêng biệt
    document.querySelectorAll('.list_top_item_actor').forEach(actorElement => {
        const actors = actorElement.innerText.split(',').map(actor => actor.trim());
        actorElement.innerHTML = actors.map(actor => `<span>${actor}</span>`).join(', ');
    });
};



export const handleRenderItemsAlbum = (flexData_Album) => {
    const itemAlbum = document.querySelector('#list_album');
    itemAlbum.innerHTML += flexData_Album.map((data) => `
        <div class="col p-0 ps-3 item_list_top">
            <a href="" class="list_top_item_img">
                <img src="${data.img}" alt="">
                <div class="list_top_item_icon">
                    <i class='bx bx-heart text-white' style="font-size: 26px;"></i>
                    <i class='bx bx-play-circle text-white' style="font-size: 46px; margin-left:10px;"></i>
                    <i class='bx bx-dots-horizontal-rounded text-white' style="font-size: 26px; margin-left:10px;"></i>
                </div>
            </a>
            <div class="d-flex flex-column justify-content-center" style="height: 100%; margin-top: 20px;">
                <p class="list_top_item_title fw-bolder mb-1">${data.title}</p>
                <p class="list_top_item_actor">${data.actor}</p>
            </div>
        </div>
    `).join('');

    // Xử lý tách diễn viên thành các phần tử <span> riêng biệt
    document.querySelectorAll('.list_top_item_actor').forEach(actorElement => {
        const actors = actorElement.innerText.split(',').map(actor => actor.trim());
        actorElement.innerHTML = actors.map(actor => `<span>${actor}</span>`).join(', ');
    });              
    
};