
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