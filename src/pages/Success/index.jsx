import "./Success.css";
import { useNavigate } from "react-router-dom";

function Success() {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/");
    };
    return (
        <div className="main">
            <div className="col-main">
                <div className="container-main">
                    <div className="container-inner">
                        <div className="fhs_order_info">
                            <div>Đơn hàng của bạn đã được tiếp nhận </div>
                            <div>Cảm ơn bạn đã mua hàng tại Fahasa.com</div>
                            <div>
                                Mã đơn hàng của bạn là: <span>#103517756</span>
                            </div>
                            <div>Bạn sẽ sớm nhận được email xác nhận đơn hàng từ chúng tôi.</div>
                            <div>
                                <div className="fhs-btn-box">
                                    <button
                                        onClick={handleHome}
                                        className="fhs-btn-confirm fhs-btn-goto"
                                    >
                                        <span>Tiếp tục mua sắm</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="fhs_registerquick_info">
                            <div className="popup-registerquick-title">
                                Đăng ký nhanh thành viên fahasa.com
                            </div>
                            <div className="popup-change-content-in">
                                <div className="fhs-registerquick-info">
                                    <div>
                                        Thông tin tài khoản sẽ tự động thêm vào tài khoản của bạn:
                                    </div>
                                    <div className="fhs-info-icon fhs-style-bold-600">
                                        <div>
                                            <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_name_orange.svg?q=105879" />
                                        </div>
                                        <div>Đỗ Hiệp</div>
                                    </div>
                                    <div className="fhs-info-icon fhs-style-bold-600">
                                        <div>
                                            <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_address_orange.svg?q=105879" />
                                        </div>
                                        <div>
                                            21 Trương định, Phường Đông Hải, Quận Lê Chân, Hải
                                            Phòng, VN
                                        </div>
                                    </div>
                                </div>
                                <div className="popup-change-content">
                                    <div className="fhs-registerquick-order">
                                        Đơn hàng của bạn trị giá <span>99.200 đ</span>, bạn sẽ nhận
                                        được <span>992 F-Point</span> khi đăng ký làm thành viên của
                                        Fahasa.com
                                    </div>
                                    <div className="fhs-input-box">
                                        <div className="fhs-btn-box">
                                            <button
                                                style={{ width: "300px" }}
                                                className="fhs-btn-confirm fhs-btn-goto lg-close"
                                            >
                                                <span>Đăng ký</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="fhs-popup-msg fhs-registerquick-msg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Success;
