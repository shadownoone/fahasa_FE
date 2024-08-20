import { useState, useRef } from "react";
import { VNIcon, GBIcon, DownIcon } from "../../Icons/icons";
import "./LanguageSection.css";

function LanguageSection() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState("VN");
    const dropdownRef = useRef(null);

    const handleToggle = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleLanguageChange = (language) => {
        setCurrentLanguage(language);
        setIsDropdownOpen(false);
    };

    return (
        <div className="language-section">
            <button className="language-button" onClick={handleToggle}>
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
    );
}

export default LanguageSection;
