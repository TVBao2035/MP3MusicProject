export const handleRenderThemeKind = (containerID, NB_QG) => {
    const itemKind = document.querySelector(containerID);
    itemKind.innerHTML += NB_QG.map((data) =>  `
        <div class="cart_NB_QG overflow-hidden mb-1 d-flex flex-column gap-2">
            <div class="container-image-NB_QG position-relative">
                <div class="image-NB_QG position-relative">
                    <img  src=${data.img} alt="">
                    <div class="title-NB_QG">
                        <p class="text-white fw-bolder m-0">${data.title}</p>
                    </div>
                </div>
            </div>
        </div>
    `)
}

export const handleRenderMood = (containerID, NB_QG) => {
    const itemKind = document.querySelector(containerID);
    // Render các phần tử ban đầu
    itemKind.innerHTML = NB_QG.map((data) =>  
        `<div class="cart_TT overflow-hidden mb-1 d-flex flex-column gap-2 align-items-center justify-content-center ">
            <div class="container-image-TT position-relative">
                <p class="text-white fw-bolder fs-5 position-absolute title-TT">${data.title}</p>
                <div class="img-litle-TT position-absolute">
                    <img src="${data.img2}" alt="">
                    <img src="${data.img3}" alt="">
                    <img src="${data.img4}" alt="">
                </div>
                <div class="image-TT">
                    <img src="${data.img}" alt="">
                </div>
            </div>
        </div>`
    ).join('');
    // Thêm phần "TẤT CẢ" vào cuối danh sách hình ảnh
    itemKind.innerHTML += `
        <div class="all-TT text-white" id="show-all-button">
            <p>TẤT CẢ</p>
        </div>
    `;
    // Xử lý sự kiện click vào nút "TẤT CẢ"
    document.getElementById('show-all-button').addEventListener('click', () => {
        // Hiển thị thêm hình ảnh
        const additionalImages = [
            // Thêm các đối tượng hình ảnh mới vào đây
            {
                img: "https://wallpapercave.com/wp/wp11937579.png",
                img2: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/0/9/8309cbe078ac096917f0a0e61bfdbfd7.jpg",
                img3: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg",
                img4: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/3/d/8/e3d8e5b02fbb8c04ae2f4e8e96a3f2a1.jpg",
                title: "LOFI",
            },
            {
                img: "https://vinmec-prod.s3.amazonaws.com/images/20210202_125120_968911_ngu-ngon.max-1800x1800.jpg",
                img2: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/0/3/9/d0396a14b69a81d3be14837218a36cbf.jpg",
                img3: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/a/b/b/dabbdb6a883c2e806ca2122c180bf9ac.jpg",
                img4: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/0/4/3/1043b3622eee1ce5b33baea27c13c19a.jpg",
                title: "NGỦ NGON",
            }
        ];
        // Tạo HTML cho các hình ảnh mới
        const newContent = additionalImages.map((data) =>  
            `<div class="cart_TT overflow-hidden mb-1 d-flex align-items-center justify-content-center">
                <div class="container-image-TT position-relative">
                    <p class="text-white fw-bolder fs-5 position-absolute title-TT">${data.title}</p>
                    <div class="img-litle-TT position-absolute">
                        <img src="${data.img2}" alt="">
                        <img src="${data.img3}" alt="">
                        <img src="${data.img4}" alt="">
                    </div>
                    <div class="image-TT">
                        <img src="${data.img}" alt="">
                    </div>
                </div>
            </div>`
        ).join('');
        // Chèn nội dung mới vào ngay trước nút "TẤT CẢ"
        const showAllButton = document.getElementById('show-all-button');
        showAllButton.insertAdjacentHTML('beforebegin', newContent);
        // Ẩn nút "TẤT CẢ" sau khi nhấn
        showAllButton.style.display = 'none';
    });
}


export const handleRenderListTheme = (containerID, NB_QG) => {
    const itemKind = document.querySelector(containerID);
    itemKind.innerHTML += NB_QG.map((data) =>  ` 
        <div class="cart-List overflow-hidden mb-2 d-flex flex-column gap-2">
            <div class="container-img-List position-relative">
                <div class="image-List position-relative">
                    <img src=${data.img} alt="">
                    <div class="modal-cart-List position-absolute top-0 gap-3">
                        <div class="d-flex align-items-center h-100 fs-1 text-white justify-center gap-3">
                            <div><i class='bx bx-heart'></i></div>
                            <div><i class='bx bx-play-circle'></i></div>
                            <div><i class='bx bx-dots-horizontal-rounded'></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=''>
                <p class=" fw-bolder fs-6 m-0 title-List">${data.title}</p>
                <p class="m-0 artist-name flex-wrap overflow-hidden d-flex w-75">${data.artist}</p>
            </div>
        </div>
    `).join('');
    document.querySelectorAll('.artist-name').forEach(actorElement => {
        const actors = actorElement.innerText.split(',').map(actor => actor.trim());
        actorElement.innerHTML = actors.map(actor => `<span>${actor}</span>`).join(' , ');
    });
}