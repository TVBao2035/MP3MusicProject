

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


// TOP 100 & Album Hot
export const handleRenderItemsTopAlbum = (containerID,flexData_Top_Album) => {
    const itemData = document.querySelector(containerID);
    
    // Cập nhật nội dung:
    itemData.innerHTML += flexData_Top_Album.map((data) => `
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



//  BXH Nhạc Mới
export const handleRenderItemsRowImage = (containerID, RowData) => {
    const itemRowImage = document.querySelector(containerID);
    itemRowImage.innerHTML += RowData.map((data) => `
        <div class="row row-img--one">
            <div class="col col-img--one">
                <div class="box">
                    <div class="img-container">
                        <img class="img-item" src="${data.img}">
                        <i class='bx bx-play play-icon'></i>
                    </div>
                    <div class="img-details">
                        <p class="img-title">${data.title}</p>
                        <div class="tt">
                            <p class="img-actor">${data.actor}</p>
                            <i class='bx bx-dots-horizontal-rounded icon-dots'>
                                <span class="tooltip">Khác</span>
                            </i>
                        </div>
                        <p class="img-date">${data.date}</p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.img-actor').forEach(actorElement => {
        const actors = actorElement.innerText.split(',').map(actor => actor.trim());
        actorElement.innerHTML = actors.map(actor => `<span>${actor}</span>`).join(', ');
    });              
    
};


export function showAll() {
    document.getElementById('row_img_all').style.display = 'block';
    document.getElementById('row_img_vn').style.display = 'none';
    document.getElementById('row_img_internat').style.display = 'none';
}

export function showVn() {
    document.getElementById('row_img_all').style.display = 'none';
    document.getElementById('row_img_vn').style.display = 'block';
    document.getElementById('row_img_internat').style.display = 'none';
}

export function showInternat() {
    document.getElementById('row_img_all').style.display = 'none';
    document.getElementById('row_img_vn').style.display = 'none';
    document.getElementById('row_img_internat').style.display = 'block';
}

// Chill  + Nhạc Remix cực bốc + mưa tháng sáu
export const handleRenderItemsFlex = (containerID,flexData) => {
    const itemFlex  = document.getElementById(containerID);
    itemFlex.innerHTML += flexData.map((data) =>      `
            <div class="col p-0 item_list_sing ">
                        <a href="" class="list_item_img d-flex  justify-content-center">
                            <img src="${data.img}" alt="">
                            <div class="list_item_icon">
                                <i class="fa-regular fa-heart"></i>
                                <i class="fa-solid fa-play"></i>
                                <i class="fa-solid fa-ellipsis"></i>
                            </div>
                        </a> 
                         
                        <p class="list_item_title">${data.title}</p>
                    </div>
        ` ).join("");
}

