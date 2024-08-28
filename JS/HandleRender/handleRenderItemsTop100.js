export const handleRenderItemsTop100 = (data, container)=>{
    let contain = document.querySelector(container);
    contain.innerHTML += data.map(d => `
        <div class="cart_top_100 overflow-hidden mb-2 d-flex flex-column gap-2">
                        <div class="container-image-top-100 position-relative">
                            <div class="image-top_100 position-relative ">
                                <img src=${d.link} alt="">
                                <div class="modal-cart-top-100 position-absolute top-0">
                                    <div class="d-flex align-items-center h-100 fs-1 text-white justify-content-lg-around">
                                        <div><i class='bx bx-heart'></i></div>
                                        <div><i class='bx bx-play-circle'></i></div>
                                        <div><i class='bx bx-dots-horizontal-rounded'></i></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class=''>
                            <p class="text-white fw-bolder  fs-6 m-0">${d.title}</p>
                            <p class="m-0 atrist-name flex-warp overflow-hidden d-flex w-75">${d.artist}</p>
                        </div>
                    </div>
    `).join('')
}