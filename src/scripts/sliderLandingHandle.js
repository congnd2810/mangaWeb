// Lấy danh sách tất cả các nút
const buttons = document.querySelectorAll('[aria-current]');

// Lặp qua từng nút và kiểm tra giá trị của aria-current
buttons.forEach(button => {
  const ariaCurrent = button.getAttribute('aria-current');
  
  // Nếu aria-current là "true", thì đặt màu đen, ngược lại đặt màu hồng
  if (ariaCurrent === "true") {
    button.classList.add('text-black'); // Thay đổi màu đen
  } else {
    button.classList.add('text-pink-500'); // Thay đổi màu hồng
  }
});
