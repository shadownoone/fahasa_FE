import { useState, useEffect } from "react";
import "./styles.css";

function Login() {
    const [isLogin, setIsLogin] = useState(true); // true for login, false for register
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        if (isLogin) {
            setIsFormValid(username !== "" && password !== "");
        } else {
            setIsFormValid(username !== "" && password !== "" && confirmPassword === password);
        }
    }, [username, password, confirmPassword, isLogin]);

    const handleTabClick = (isLoginTab) => {
        setIsLogin(isLoginTab);
        setUsername("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <>
            <div className="overlay"></div>
            <div className="main">
                <div className="col-main">
                    <div className="container-main">
                        <div className="container-inner">
                            <div className="youama-login-window fhs_popup_show">
                                <div>
                                    <ul className="popup-login-tab">
                                        <li
                                            className={`popup-login-tab-item ${
                                                isLogin ? "active" : ""
                                            }`}
                                            onClick={() => handleTabClick(true)}
                                        >
                                            <a>Đăng nhập</a>
                                            <hr />
                                        </li>
                                        <li
                                            className={`popup-login-tab-item ${
                                                !isLogin ? "active" : ""
                                            }`}
                                            onClick={() => handleTabClick(false)}
                                        >
                                            <a>Đăng ký</a>
                                            <hr />
                                        </li>
                                    </ul>
                                </div>
                                <div className="popup-login-content">
                                    <form>
                                        <div className="fhs-input-box">
                                            <label>Số điện thoại/Email</label>
                                            <div className="fhs-input-group">
                                                <input
                                                    type="text"
                                                    placeholder="Nhập số điện thoại hoặc email"
                                                    className="fhs-textbox"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="fhs-input-box fhs-input-display">
                                            <label>Mật khẩu</label>
                                            <div className="fhs-input-group">
                                                <input
                                                    className="fhs-textbox"
                                                    type="password"
                                                    placeholder="Nhập mật khẩu"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        {isLogin && (
                                            <div className="fhs-input-box">
                                                <div className="fhs-forget-pass">
                                                    <span>Quên mật khẩu?</span>
                                                </div>
                                            </div>
                                        )}
                                        {!isLogin && (
                                            <div className="fhs-input-box fhs-input-display">
                                                <label>Nhập lại mật khẩu</label>
                                                <div className="fhs-input-group">
                                                    <input
                                                        className="fhs-textbox"
                                                        type="password"
                                                        placeholder="Nhập lại mật khẩu"
                                                        value={confirmPassword}
                                                        onChange={(e) =>
                                                            setConfirmPassword(e.target.value)
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        )}
                                        <div className="fhs-input-box">
                                            <div className="fhs-btn-box">
                                                <button
                                                    className="fhs-btn-login"
                                                    type="submit"
                                                    disabled={!isFormValid}
                                                >
                                                    <span>{isLogin ? "Đăng nhập" : "Đăng ký"}</span>
                                                </button>
                                                <button className="fhs-btn-cancel lg-close">
                                                    <span>Bỏ qua</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
