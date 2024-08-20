import { useState } from "react";
import { BellIcon, CartIcon, UserIcon } from "../../Icons/icons";
import Login from "../../../pages/Login"; // Import component Login
import "./UserSection.css";

function UserSection() {
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleCloseLogin = () => {
        setShowLogin(false);
    };

    return (
        <div className="user-section">
            <div className="notification">
                <BellIcon style={{ width: 20, height: 20 }} />
                <span>Thông báo</span>
                <div className="notification-dropdown">
                    <div className="notification-item">
                        <img
                            src="https://i.pinimg.com/236x/e3/35/84/e33584737e528b95f30a4ba7129cf115.jpg"
                            className="notification-image"
                        />
                        <div className="notification-content">
                            <h4 className="notification-title">Tiêu đề 1</h4>
                            <p className="notification-note">Ghi chú 1</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart-user">
                <a href={"/cart"}>
                    <CartIcon style={{ width: 20, height: 20 }} />
                    <span>Giỏ hàng</span>
                </a>
            </div>
            <div className="account">
                <UserIcon style={{ width: 20, height: 20 }} />
                <span>Tài khoản</span>
                <div className="account-dropdown">
                    <a onClick={handleLoginClick} className="login">
                        Đăng nhập
                    </a>
                    <a href="#" className="signup">
                        Đăng ký
                    </a>
                </div>
            </div>

            {showLogin && (
                <>
                    <div className="overlay" onClick={handleCloseLogin}></div>
                    <Login />
                </>
            )}
        </div>
    );
}

export default UserSection;
