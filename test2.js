

document.addEventListener('DOMContentLoaded', function() {
    // Lấy danh sách tất cả các phần tử mũi tên và nội dung cần hiển thị/ẩn
    var arrowIcons = document.querySelectorAll('.icon');
    var text2s = document.querySelectorAll('.text2');

    // Lặp qua mỗi phần tử mũi tên
    arrowIcons.forEach(function(arrowIcon, index) {
        // Lấy phần tử nội dung tương ứng
        var text2 = text2s[index];

        // Thêm sự kiện click cho mỗi mũi tên
        arrowIcon.addEventListener('click', function() {
            // Toggle class 'active' cho phần tử nội dung tương ứng
            text2.classList.toggle('active');
        });
    });
});

