import { FacebookIcon, YoutubeIcon, PinterestIcon, InstagramIcon } from "../../Icons/icons";
import "./FooterInfo.css";

function FooterInfo() {
    return (
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
                    <p>Công Ty Cổ Phần Phát Hành Sách TP HCM - FAHASA</p>
                    <p>60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam</p>
                    <p>
                        Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt
                        mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống Fahasa
                        trên toàn quốc.
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
                    <a href="/notfound" className="media-link">
                        <FacebookIcon className="media-icon" />
                    </a>
                    <a href="/notfound" className="media-link">
                        <YoutubeIcon className="media-icon" />
                    </a>
                    <a href="/notfound" className="media-link">
                        <InstagramIcon className="media-icon" />
                    </a>
                    <a href="/notfound" className="media-link">
                        <PinterestIcon className="media-icon" />
                    </a>
                </div>

                <div className="footer-app">
                    <div className="footer-dow">
                        <a target="_blank" href="https://itunes.apple.com/app/id1227597830?mt=8">
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
    );
}

export default FooterInfo;
