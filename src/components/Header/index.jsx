import { useState, useRef, useEffect } from "react";
import { GridIcon, DownIcon, LanguageIcon } from "../Icons/icons";
import "./styles.css";
import Search from "../Search";
import HeaderTopBanner from "./HeaderTopBanner/HeaderTopBanner";
import LogoIcon from "./LogoIcon/LogoIcon";
import LanguageSection from "./LanguageSection/LanguageSection";
import UserSection from "./UserSection/UserSection";

function Header() {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    const categoryRef = useRef(null);

    const handleMouseEnterCategory = () => {
        setIsCategoryOpen(true);
    };

    const handleMouseLeaveCategory = () => {
        setIsCategoryOpen(false);
    };

    const handleClickOutside = (event) => {
        if (categoryRef.current && !categoryRef.current.contains(event.target)) {
            setIsCategoryOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="header">
            <HeaderTopBanner />

            <div style={{ backgroundColor: "#fff" }}>
                <div className="container">
                    <LogoIcon />

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
                                    <div className="category-list" ref={categoryRef}>
                                        <div className="category-notifi">
                                            <div className="category-title">
                                                <h1>Product Category</h1>
                                                <ul>
                                                    <li>
                                                        <a href="/">Sách trong nước</a>
                                                    </li>
                                                    <li>
                                                        <a href="/">FOREIGN BOOKS</a>
                                                    </li>
                                                    <li>
                                                        <a href="/">VPP - Dụng Cụ Học Sinh</a>
                                                    </li>
                                                    <li>
                                                        <a href="/">Đồ Chơi</a>
                                                    </li>
                                                    <li>
                                                        <a href="/">Làm Đẹp - Sức Khỏe</a>
                                                    </li>
                                                    <li>
                                                        <a href="/">Hành Trang Đến Trường</a>
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

                        <UserSection />
                    </div>
                    <LanguageSection />
                </div>
            </div>
        </div>
    );
}

export default Header;
