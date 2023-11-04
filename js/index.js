// Sửa lỗi khi nhập mật khẩu tự động zoom lại làm lệch web
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
});

