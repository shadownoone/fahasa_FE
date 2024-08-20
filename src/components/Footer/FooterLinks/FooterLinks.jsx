import "./FooterLinks.css";

function FooterLinks() {
    return (
        <div className="footer-help">
            <ul className="col-md-4">
                <h3>DỊCH VỤ</h3>
                <li>
                    <a href={"/notfound"}>Điều khoản sử dụng</a>
                </li>
                <li>
                    <a href={"/notfound"}>Chính sách bảo mật thông tin cá nhân</a>
                </li>
                <li>
                    <a href={"/notfound"}>Chính sách bảo mật thanh toán</a>
                </li>
                <li>
                    <a href={"/notfound"}>Giới thiệu Fahasa</a>
                </li>
            </ul>
            <ul className="col-md-4">
                <h3>HỖ TRỢ</h3>
                <li>
                    <a href={"/notfound"}>Chính sách đổi - trả - hoàn tiền</a>
                </li>
                <li>
                    <a href={"/notfound"}>Chính sách bảo hành - bồi hoàn</a>
                </li>
                <li>
                    <a href={"/notfound"}>Chính sách vận chuyển</a>
                </li>
                <li>
                    <a href={"/notfound"}>Chính sách khách sỉ</a>
                </li>
            </ul>
            <ul className="col-md-4">
                <h3>TÀI KHOẢN CỦA TÔI</h3>
                <li>
                    <a href={"/notfound"}>Đăng nhập/Tạo mới tài khoản</a>
                </li>
                <li>
                    <a href={"/notfound"}>Chính sách bảo hành - bồi hoàn</a>
                </li>
                <li>
                    <a href={"/notfound"}>Chi tiết tài khoản</a>
                </li>
                <li>
                    <a href={"/notfound"}>Lịch sử mua hàng</a>
                </li>
            </ul>
        </div>
    );
}

export default FooterLinks;
