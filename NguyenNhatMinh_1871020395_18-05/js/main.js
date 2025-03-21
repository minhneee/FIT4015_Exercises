
$(document).ready(function() {
    // Hàm này đảm bảo rằng code bên trong chỉ chạy sau khi DOM đã tải xong.
    $('#buy-btn').click(function() {
        // Gắn một trình xử lý sự kiện click cho phần tử có ID là "buy-btn".
        alert('Đã thêm sản phẩm vào giỏ hàng!');
        // Hiển thị một hộp thoại thông báo (alert) khi nút được click.
    });
});

const loginForm = document.getElementById('loginForm');
// Lấy phần tử HTML có ID là "loginForm" (form đăng nhập) và lưu vào biến loginForm.
const errorDiv = document.getElementById('error');
// Lấy phần tử HTML có ID là "error" (thường là một div để hiển thị lỗi) và lưu vào biến errorDiv.
const adminUsername = "admin";
// Khai báo hằng số adminUsername với giá trị "admin".
const adminPassword = "123456";
// Khai báo hằng số adminPassword với giá trị "123456".

loginForm.addEventListener('submit', function(e) {
    // Gắn một trình xử lý sự kiện submit cho form đăng nhập (loginForm).
    e.preventDefault();
    // Ngăn chặn hành vi mặc định của form (gửi form đến server), để xử lý đăng nhập bằng JavaScript.
    const username = document.getElementById('username').value;
    // Lấy giá trị của trường username từ form và lưu vào biến username.
    const password = document.getElementById('password').value;
    // Lấy giá trị của trường password từ form và lưu vào biến password.
    if (username === adminUsername && password === adminPassword) {
        // Kiểm tra xem username và password có khớp với thông tin admin không.
        window.location.href = "admin.html";
        // Nếu khớp, chuyển hướng trình duyệt đến trang admin.html.
    } else {
        // Nếu không khớp, hiển thị thông báo lỗi.
        errorDiv.textContent = "Invalid username or password!";
        // Thiết lập nội dung của errorDiv thành thông báo lỗi.
    }
});