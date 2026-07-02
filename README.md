# MOTOLAB GARAGE V3 – giao diện tiếng Việt, Zalo và ntfy

## Mở website
1. Giải nén thư mục.
2. Nhấp đúp **MO-WEB-V3.html** hoặc **index.html**.
3. Nếu trình duyệt còn giao diện cũ, nhấn **Ctrl + Shift + R**.

## Thay số điện thoại, Zalo, địa chỉ và email
Mở file `config.js`, sửa:
- `PHONE`: số hotline hiển thị.
- `ZALO_PHONE`: số điện thoại đã đăng ký Zalo, viết liền.
- `EMAIL`: email cửa hàng.
- `ADDRESS`: địa chỉ thật.
- `MAP_URL`: liên kết Google Maps.

## Nhận thông báo trên điện thoại bằng ntfy
1. Cài ứng dụng **ntfy** trên điện thoại.
2. Mở ứng dụng, chọn **Theo dõi / Subscribe**.
3. Nhập đúng topic trong `config.js`: `motolab-qn-2026-k9f3x7`.
4. Mở `admin-setup.html` và bấm gửi thử.
5. Khi khách đặt lịch hoặc gửi hỗ trợ, điện thoại admin sẽ nhận thông báo.

Nên đổi `NTFY_TOPIC` thành một chuỗi dài và khó đoán trước khi đăng website công khai. Không dùng biểu mẫu công khai để nhận mật khẩu, số thẻ hoặc dữ liệu nhạy cảm.

## Các chức năng chính
- 16 sản phẩm, tìm kiếm, lọc, xem chi tiết và giỏ hàng.
- Đặt lịch sửa xe gửi thông báo về điện thoại admin.
- Khu hỗ trợ riêng: gọi điện, Zalo, gửi thông báo ntfy.
- Nút Zalo, gọi điện và hỗ trợ luôn nổi trên màn hình.
- Hình ảnh mới lưu trực tiếp trong dự án, không phụ thuộc Internet.
- Giao diện tiếng Việt và cỡ chữ lớn hơn.
