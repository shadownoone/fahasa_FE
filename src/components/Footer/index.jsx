import {
    FacebookIcon,
    YoutubeIcon,
    PinterestIcon,
    InstagramIcon,
    PhoneIcon,
    MailIcon,
    LocationIcon,
} from "../Icons/icons";

import "./styles.css";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 pr16">
                        <div className="footer-info">
                            <div className="footer-img">
                                <img
                                    src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png"
                                    alt="Logo"
                                    className="logo"
                                />
                            </div>
                            <div className="footer-text">
                                <p>Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM</p>
                                <p>
                                    Công Ty Cổ Phần Phát Hành Sách TP HCM -
                                    FAHASA
                                </p>
                                <p>60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam</p>
                                <p>
                                    Fahasa.com nhận đặt hàng trực tuyến và giao
                                    hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận
                                    hàng trực tiếp tại văn phòng cũng như tất cả
                                    Hệ Thống Fahasa trên toàn quốc.
                                </p>
                            </div>
                            <div className="footer-pass">
                                <a
                                    target="_blank"
                                    href="http://online.gov.vn/CustomWebsiteDisplay.aspx?DocId=19176"
                                >
                                    <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/logo-bo-cong-thuong-da-thong-bao1.png" />
                                </a>
                            </div>
                            <div className="footer-media">
                                <a href="/" className="media-link">
                                    <FacebookIcon className="media-icon" />
                                </a>
                                <a href="" className="media-link">
                                    <YoutubeIcon className="media-icon" />
                                </a>
                                <a href="" className="media-link">
                                    <InstagramIcon className="media-icon" />
                                </a>
                                <a href="" className="media-link">
                                    <PinterestIcon className="media-icon" />
                                </a>
                            </div>

                            <div className="footer-app">
                                <div className="footer-dow">
                                    <a
                                        target="_blank"
                                        href="https://itunes.apple.com/app/id1227597830?mt=8"
                                    >
                                        <img
                                            src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/appstore1.png"
                                            width="110px"
                                        />
                                    </a>
                                </div>
                                <div className="footer-dow">
                                    <a
                                        target="_blank"
                                        href="https://play.google.com/store/apps/details?id=com.fahasa.android.fahasa"
                                    >
                                        <img
                                            src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/android1.png"
                                            width="110px"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="footer-help">
                                <ul className="col-md-4">
                                    <h3>DỊCH VỤ</h3>
                                    <li>
                                        <a href="/">Điều khoản sử dụng</a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Chính sách bảo mật thông tin cá nhân
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Chính sách bảo mật thanh toán
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">Giới thiệu Fahasa</a>
                                    </li>
                                </ul>
                                <ul className="col-md-4">
                                    <h3>HỖ TRỢ</h3>
                                    <li>
                                        <a href="/">
                                            Chính sách đổi - trả - hoàn tiền
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Chính sách bảo hành - bồi hoàn
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">Chính sách vận chuyển</a>
                                    </li>
                                    <li>
                                        <a href="/">Chính sách khách sỉ</a>
                                    </li>
                                </ul>
                                <ul className="col-md-4">
                                    <h3>TÀI KHOẢN CỦA TÔI</h3>
                                    <li>
                                        <a href="/">
                                            Đăng nhập/Tạo mới tài khoản
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            Chính sách bảo hành - bồi hoàn
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">Chi tiết tài khoản</a>
                                    </li>
                                    <li>
                                        <a href="/">Lịch sử mua hàng</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-title">
                                <h3>LIÊN HỆ</h3>
                                <div className="footer-contact">
                                    <div className="contact-item  col-md-4">
                                        <LocationIcon className="icon" />
                                        <span>60-62 Lê Lợi, Q.1, TP. HCM</span>
                                    </div>
                                    <div className="contact-item  col-md-4">
                                        <MailIcon className="icon" />
                                        <span>cskh@fahasa.com.vn</span>
                                    </div>
                                    <div className="contact-item  col-md-4">
                                        <PhoneIcon className="icon" />
                                        <span>1900636467</span>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-image-container">
                                <div className="">
                                    <img
                                        src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/vnpost1.png"
                                        width="100px"
                                    />
                                </div>
                                <div className="">
                                    <img
                                        src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/ahamove_logo3.png"
                                        width="160px"
                                    />
                                </div>
                                <div className="">
                                    <img
                                        src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/icon_snappy1.png"
                                        width="150px"
                                    />
                                </div>
                                <div className="">
                                    <img
                                        src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/Logo_ninjavan.png"
                                        width="150px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <span className="certification">
                    Giấy chứng nhận Đăng ký Kinh doanh số 0304132047 do Sở Kế
                    hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 20/12/2005,
                    đăng ký thay đổi lần thứ 10, ngày 20/05/2022.
                </span>
            </div>
        </div>
    );
}

export default Footer;
