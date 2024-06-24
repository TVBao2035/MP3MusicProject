// Lấy phần tử hình ảnh
const imgUser = document.querySelector('.img_user');

// Thêm sự kiện click cho hình ảnh
imgUser.addEventListener('click', () => {
  // Tìm phần tử dropdown-menu và thêm/xóa class 'show'
  const dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.classList.toggle('show');
});