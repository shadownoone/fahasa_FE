import { useState, useRef, useEffect } from "react";
import {
    GridIcon,
    DownIcon,
    BellIcon,
    CartIcon,
    UserIcon,
    VNIcon,
    GBIcon,
    LanguageIcon,
} from "../Icons/icons";
import "./styles.css";
import Search from "../Search";

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState("VN");
    const dropdownRef = useRef(null);
    const categoryRef = useRef(null);

    const handleToggle = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleMouseEnterCategory = () => {
        setIsCategoryOpen(true);
    };

    const handleMouseLeaveCategory = () => {
        setIsCategoryOpen(false);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsDropdownOpen(false);
        }
        if (
            categoryRef.current &&
            !categoryRef.current.contains(event.target)
        ) {
            setIsCategoryOpen(false);
        }
    };

    const handleLanguageChange = (language) => {
        setCurrentLanguage(language);
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="header">
            <div className="header-top-banner">
                <div className="top-banner-block">
                    <a href="https://www.fahasa.com/vpp-plus">
                        <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2024/NCCPlus_T07_Header_1263x60.jpg" />
                    </a>
                </div>
            </div>
            <div style={{ backgroundColor: "#fff" }}>
                <div className="container">
                    <div className="logo_icon">
                        <div className="mouse_point">
                            <img
                                src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png"
                                alt="Logo"
                                className="logo"
                            />
                        </div>
                    </div>
                    <div className="header-items">
                        <div
                            className="menu-category"
                            onMouseEnter={handleMouseEnterCategory}
                            onMouseLeave={handleMouseLeaveCategory}
                        >
                            <span className="icon_menu">
                                <GridIcon style={{ width: 36, height: 36 }} />
                            </span>
                            <span className="icon_seemore_gray">
                                <DownIcon style={{ width: 16, height: 16 }} />
                            </span>
                            {isCategoryOpen && (
                                <div className="overlay">
                                    <div
                                        className="category-list"
                                        ref={categoryRef}
                                    >
                                        <div className="category-notifi">
                                            <div className="category-title">
                                                <h1>Product Category</h1>
                                                <ul>
                                                    <li>
                                                        <a href="/">
                                                            Sách trong nước
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            FOREIGN BOOKS
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            VPP - Dụng Cụ Học
                                                            Sinh
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">Đồ Chơi</a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            Làm Đẹp - Sức Khỏe
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            Hành Trang Đến
                                                            Trường
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="menu-container">
                                                <div className="category-menu-title">
                                                    <LanguageIcon className="language-icon" />
                                                    <span>FOREIGN BOOKS</span>
                                                </div>

                                                <div className="menu-content">
                                                    <div className="column">
                                                        <ul>
                                                            <h3>Item title</h3>
                                                            <li>Item 1</li>
                                                            <li>Item 2</li>
                                                            <li>Item 3</li>
                                                        </ul>
                                                    </div>
                                                    <div className="column">
                                                        <ul>
                                                            <h3>Item title</h3>
                                                            <li>Item 4</li>
                                                            <li>Item 5</li>
                                                            <li>Item 6</li>
                                                        </ul>
                                                    </div>
                                                    <div className="column">
                                                        <ul>
                                                            <h3>Item title</h3>
                                                            <li>Item 7</li>
                                                            <li>Item 8</li>
                                                            <li>Item 9</li>
                                                        </ul>
                                                    </div>
                                                    <div className="column">
                                                        <ul>
                                                            <h3>Item title</h3>
                                                            <li>Item 10</li>
                                                            <li>Item 11</li>
                                                            <li>Item 12</li>
                                                        </ul>
                                                    </div>
                                                    <div className="column">
                                                        <ul>
                                                            <h3>Item title</h3>
                                                            <li>Item 13</li>
                                                            <li>Item 14</li>
                                                            <li>Item 15</li>
                                                        </ul>
                                                    </div>
                                                    <div className="column">
                                                        <ul>
                                                            <h3>Item title</h3>
                                                            <li>Item 16</li>
                                                            <li>Item 17</li>
                                                            <li>Item 18</li>
                                                        </ul>
                                                    </div>
                                                    <div className="column">
                                                        <ul>
                                                            <h3>Item title</h3>
                                                            <li>Item 19</li>
                                                            <li>Item 20</li>
                                                            <li>Item 21</li>
                                                        </ul>
                                                    </div>
                                                    <div className="column">
                                                        <ul>
                                                            <h3>Item title</h3>
                                                            <li>Item 22</li>
                                                            <li>Item 23</li>
                                                            <li>Item 24</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Search />

                        <div className="user-section">
                            <a href="#" className="notification">
                                <BellIcon style={{ width: 20, height: 20 }} />
                                <span>Thông báo</span>
                                <div className="notification-dropdown">
                                    <div className="notification-item">
                                        <img
                                            src="https://i.pinimg.com/236x/e3/35/84/e33584737e528b95f30a4ba7129cf115.jpg"
                                            className="notification-image"
                                        />
                                        <div className="notification-content">
                                            <h4 className="notification-title">
                                                Tiêu đề 1
                                            </h4>
                                            <p className="notification-note">
                                                Ghi chú 1
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div className="cart">
                                <a href="#">
                                    <CartIcon
                                        style={{ width: 20, height: 20 }}
                                    />
                                    <span>Giỏ hàng</span>
                                </a>
                            </div>
                            <div className="account">
                                <UserIcon style={{ width: 20, height: 20 }} />
                                <span>Tài khoản</span>
                                <div className="account-dropdown">
                                    <a href="#" className="login">
                                        Đăng nhập
                                    </a>
                                    <a href="#" className="signup">
                                        Đăng ký
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="language-section">
                        <button
                            className="language-button"
                            onClick={handleToggle}
                        >
                            {currentLanguage === "VN" ? (
                                <VNIcon className="flag-icon" />
                            ) : (
                                <GBIcon className="flag-icon" />
                            )}

                            <DownIcon style={{ width: 16, height: 16 }} />
                        </button>
                        {isDropdownOpen && (
                            <div className="language-options" ref={dropdownRef}>
                                <a
                                    href="#"
                                    className="language-option"
                                    onClick={() => handleLanguageChange("GB")}
                                >
                                    <GBIcon className="flag-icon" />
                                    EN
                                </a>
                                <a
                                    href="#"
                                    className="language-option"
                                    onClick={() => handleLanguageChange("VN")}
                                >
                                    <VNIcon className="flag-icon" />
                                    VN
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
