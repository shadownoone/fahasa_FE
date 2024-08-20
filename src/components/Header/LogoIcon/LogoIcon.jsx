import "./LogoIcon.css";

function LogoIcon() {
    return (
        <div className="logo_icon">
            <div
                className="fhs_mouse_point"
                onClick={() => {
                    window.location.href = "/";
                }}
            >
                <img
                    src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png"
                    alt="Logo"
                    className="logo"
                />
            </div>
        </div>
    );
}

export default LogoIcon;
