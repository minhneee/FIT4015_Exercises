$(document).ready(function() {
    // Hàm này được thực thi khi toàn bộ DOM của trang web đã được tải xong.
    // Điều này đảm bảo rằng các phần tử HTML đã sẵn sàng để thao tác.

    $('.thumbnail').click(function() {
        // Gắn một trình xử lý sự kiện click cho tất cả các phần tử có class "thumbnail".
        // Hàm này sẽ được gọi khi người dùng nhấp vào một thumbnail.

        $('.thumbnail').removeClass('active');
        // Loại bỏ class "active" khỏi tất cả các thumbnail.
        // Điều này đảm bảo rằng chỉ có một thumbnail được chọn tại một thời điểm.

        $(this).addClass('active');
        // Thêm class "active" vào thumbnail được nhấp vào.
        // "this" tham chiếu đến phần tử thumbnail cụ thể được nhấp.

        $('.img-fluid').attr('src', $(this).data('src'));
        // Thay đổi thuộc tính "src" của phần tử có class "img-fluid" (giả sử là ảnh lớn).
        // Lấy giá trị của thuộc tính "data-src" từ thumbnail được nhấp,
        // đây thường là URL của ảnh lớn tương ứng.
    });
});