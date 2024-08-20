import "./Checkout.css";
import { useState } from "react";
import Select from "react-select";

import { countries } from "../../../locationData";

import { useNavigate } from "react-router-dom";

function Checkout() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);

    const handleSuccess = () => {
        navigate("/success");
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        let errorMessage = "";

        if (name === "name" && !/^[a-zA-Z\s]+$/.test(value.trim())) {
            errorMessage = "Tên chỉ được phép chứa ký tự chữ cái.";
        }
        if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
            errorMessage = "Email không đúng định dạng.";
        }
        if (name === "phone" && !/^\d{10}$/.test(value.trim())) {
            errorMessage = "Số điện thoại phải là 10 chữ số.";
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage,
        }));
    };

    const handleFocus = (e) => {
        const { name } = e.target;
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    // Cập nhật tỉnh/thành phố khi chọn quốc gia
    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
        setSelectedState(null);
        setSelectedDistrict(null);
    };

    // Cập nhật quận/huyện khi chọn tỉnh/thành phố
    const handleStateChange = (selectedOption) => {
        setSelectedState(selectedOption);
        setSelectedDistrict(null);
    };

    // Cập nhật phường/xã khi chọn quận/huyện
    const handleDistrictChange = (selectedOption) => {
        setSelectedDistrict(selectedOption);
    };

    return (
        <div className="main">
            <div className="col-main">
                <div className="container-main">
                    <div className="container-inner">
                        <div className="fhs-co-banner"></div>
                        <div className="fhs_checkout_alert">
                            <div>
                                <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_warning_white.svg?q=105873" />
                            </div>
                            <div>
                                Bạn đã là thành viên? <span>Đăng nhập ngay</span>
                            </div>
                        </div>
                        {/* Shipping address start */}
                        <div className="fhs_checkout_block">
                            <div className="fhs_checkout_block_title">Địa chỉ giao hàng</div>
                            <div className="fhs_checkout_block_content">
                                {/* Họ và tên người nhận */}
                                <div
                                    className={`fhs-input-box fhs-input-group-horizontal-shippingaddress ${
                                        errors.name ? "checked-error" : ""
                                    }`}
                                >
                                    <label>Họ và tên người nhận</label>
                                    <div className="fhs-input-item">
                                        <div className="fhs-input-group">
                                            <input
                                                name="name"
                                                className="fhs-textbox require_check check_shipping_address"
                                                type="text"
                                                placeholder="Nhập họ và tên người nhận"
                                                onBlur={handleBlur}
                                                onFocus={handleFocus}
                                            />
                                        </div>
                                    </div>
                                    {errors.name && (
                                        <div className="fhs-input-alert">{errors.name}</div>
                                    )}
                                </div>

                                {/* Email */}
                                <div
                                    className={`fhs-input-box fhs-input-group-horizontal-shippingaddress ${
                                        errors.email ? "checked-error" : ""
                                    }`}
                                >
                                    <label>Email</label>
                                    <div className="fhs-input-item">
                                        <div className="fhs-input-group">
                                            <input
                                                name="email"
                                                className="fhs-textbox require_check check_shipping_address"
                                                type="email"
                                                placeholder="Nhập Email"
                                                onBlur={handleBlur}
                                                onFocus={handleFocus}
                                            />
                                        </div>
                                    </div>
                                    {errors.email && (
                                        <div className="fhs-input-alert">{errors.email}</div>
                                    )}
                                </div>

                                {/* Số điện thoại */}
                                <div
                                    className={`fhs-input-box fhs-input-group-horizontal-shippingaddress ${
                                        errors.phone ? "checked-error" : ""
                                    }`}
                                >
                                    <label>Số điện thoại</label>
                                    <div className="fhs-input-item">
                                        <div className="fhs-input-group">
                                            <input
                                                name="phone"
                                                className="fhs-textbox require_check check_shipping_address"
                                                type="tel"
                                                placeholder="Nhập số điện thoại (10 số)"
                                                onBlur={handleBlur}
                                                onFocus={handleFocus}
                                            />
                                        </div>
                                    </div>
                                    {errors.phone && (
                                        <div className="fhs-input-alert">{errors.phone}</div>
                                    )}
                                </div>

                                {/* Quốc gia */}
                                <div className="fhs-input-box fhs-input-group-horizontal-shippingaddress">
                                    <label>Quốc gia</label>
                                    <div className="fhs-input-item">
                                        <div className="fhs-input-group">
                                            <Select
                                                options={countries.map((country) => ({
                                                    value: country.value,
                                                    label: country.label,
                                                }))}
                                                value={selectedCountry}
                                                onChange={handleCountryChange}
                                                placeholder="Chọn quốc gia"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Tỉnh/Thành phố */}
                                <div className="fhs-input-box fhs-input-group-horizontal-shippingaddress">
                                    <label>Tỉnh/Thành phố</label>
                                    <div className="fhs-input-item">
                                        <div className="fhs-input-group">
                                            <Select
                                                options={
                                                    selectedCountry
                                                        ? countries
                                                              .find(
                                                                  (country) =>
                                                                      country.value ===
                                                                      selectedCountry.value
                                                              )
                                                              ?.states.map((state) => ({
                                                                  value: state.value,
                                                                  label: state.label,
                                                              }))
                                                        : []
                                                }
                                                value={selectedState}
                                                onChange={handleStateChange}
                                                placeholder="Chọn tỉnh/thành phố"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Quận/Huyện */}
                                <div className="fhs-input-box fhs-input-group-horizontal-shippingaddress">
                                    <label>Quận/Huyện</label>
                                    <div className="fhs-input-item">
                                        <div className="fhs-input-group">
                                            <Select
                                                options={
                                                    selectedState
                                                        ? countries
                                                              .find(
                                                                  (country) =>
                                                                      country.value ===
                                                                      selectedCountry.value
                                                              )
                                                              ?.states.find(
                                                                  (state) =>
                                                                      state.value ===
                                                                      selectedState.value
                                                              )
                                                              ?.districts.map((district) => ({
                                                                  value: district.value,
                                                                  label: district.label,
                                                              }))
                                                        : []
                                                }
                                                value={selectedDistrict}
                                                onChange={handleDistrictChange}
                                                placeholder="Chọn quận/huyện"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Phường/Xã */}
                                <div className="fhs-input-box fhs-input-group-horizontal-shippingaddress">
                                    <label>Địa chỉ nhận hàng</label>
                                    <div className="fhs-input-item">
                                        <div className="fhs-input-group">
                                            <input
                                                name="name"
                                                className="fhs-textbox require_check check_shipping_address"
                                                type="text"
                                                placeholder="Nhập địa chỉ nhận hàng"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Shipping address end */}

                        {/* Shipping Method start */}
                        <div className="fhs_checkout_block">
                            <div className="fhs_checkout_block_title">Phương thức vận chuyển</div>
                            <div className="fhs_checkout_block_content">
                                <div className="fhs_checkout_block_radio_list">
                                    <div className="fhs_checkout_block_radio_list_title"></div>
                                    <div className="">
                                        <ul className="fhs_checkout_block_radio_list_items">
                                            <li className="fhs_checkout_block_radio_list_item fhs_radio_top">
                                                <div>
                                                    <label className="fhs-radio-big">
                                                        <div
                                                            style={{
                                                                fontWeight: "600",
                                                                color: "#333",
                                                                fontSize: "16px",
                                                            }}
                                                        >
                                                            Giao hàng tiêu chuẩn: 32.000 đ
                                                        </div>
                                                        <div>Dự kiến giao: Thứ Ba - 20/08</div>

                                                        <span className="radiomark-big"></span>
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Shipping Method end */}

                        {/* Payment Method start */}

                        <div className="fhs_checkout_block">
                            <div className="fhs_checkout_block_title">Phương thức thanh toán</div>
                            <div className="fhs_checkout_block_content">
                                <div className="fhs_checkout_block_radio_list">
                                    <div>
                                        <ul className="fhs_checkout_block_radio_list_items">
                                            <li className="fhs_checkout_block_radio_list_item zalopayapp">
                                                <div className="fhs_checkout_paymentmethod_with_tutorial">
                                                    <div className="fhs-radio-big-with-icon-container">
                                                        <label className="fhs-radio-big fhs-raido-big-with-icon">
                                                            <div className="fhs-payment-name-with-icon-container">
                                                                <div
                                                                    style={{
                                                                        background:
                                                                            "url('https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_zalopayapp.svg?q=105879') no-repeat center center",
                                                                        width: "40px",
                                                                        height: "40px",
                                                                        backgroundSize: "contain",
                                                                    }}
                                                                ></div>

                                                                <div className="fhs-payment-name">
                                                                    Ví ZaloPay
                                                                </div>

                                                                <span className="radiomark-big"></span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className=""></div>
                            </div>
                        </div>
                        {/* Payment Method end */}

                        {/* Checkout start */}
                        <div className="fhs_checkout_block">
                            <div className="fhs_checkout_block_title">Kiểm tra lại đơn hàng</div>
                            <div className="fhs_checkout_block_content">
                                <div className="fhs_checkout_products">
                                    <div className="fhs_checkout_products_item">
                                        <div className="fhs_checkout_products_item_img">
                                            <img src="https://cdn0.fahasa.com/media/catalog/product//i/m/image_195509_1_36793.jpg" />
                                        </div>
                                        <div className="fhs_checkout_products_item_detail">
                                            <div className="fhs_checkout_products_item_name">
                                                <div>Nhà Giả Kim (Tái Bản 2020)</div>
                                            </div>
                                            <div className="fhs_checkout_products_item_price">
                                                <div className="">59.250 đ</div>
                                                <div className="fhs_checkout_products_item_original_price">
                                                    79.000 đ
                                                </div>
                                            </div>
                                            <div className="fhs_checkout_products_item_qty">
                                                <span>Số lượng: </span>1
                                            </div>
                                            <div className="fhs_checkout_products_item_total">
                                                59.250 đ
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=""></div>
                                <div className="fhs-bsidebar">
                                    <div className="fhs-bsidebar-content">
                                        <div className="container-main">
                                            <div className="fhs_checkout_total fhs_checkout_total_desktop">
                                                <div className="fhs_checkout_total_subtotal">
                                                    <div>Thành tiền</div>
                                                    <div>59.250 đ</div>
                                                </div>
                                                <div className="fhs_checkout_total_shipping">
                                                    <div>Phí vận chuyển (Giao hàng tiêu chuẩn)</div>
                                                    <div>32.000 đ</div>
                                                </div>
                                                <div className="fhs_checkout_total_grand_total">
                                                    <div>Tổng Số Tiền (gồm VAT)</div>
                                                    <div>91.250 đ</div>
                                                </div>
                                            </div>
                                            <div className="fhs_checkout_bottom">
                                                <div className="">
                                                    <div className="fhs_checkout_total_grand_total">
                                                        <div>Tổng Số Tiền (gồm VAT)</div>
                                                        <div>91.250 đ</div>
                                                    </div>
                                                    <div className="fhs-input-box fhs-input-group-horizontal-checkbox">
                                                        <div
                                                            className=""
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "center",
                                                            }}
                                                        >
                                                            <img
                                                                style={{
                                                                    marginRight: "10px",
                                                                    cursor: "pointer",
                                                                }}
                                                                src="https://www.fahasa.com/skin/frontend/ma_vanese/fahasa/images/icon_checked_red.svg"
                                                            />
                                                            <label className="fhs_input_checkbox fhs_top_left">
                                                                <span className="fhs_c_silver">
                                                                    Bằng việc tiến hành Mua hàng,
                                                                    Bạn đã đồng ý với
                                                                    <span>
                                                                        <br />
                                                                        <a
                                                                            className="fhs_c_blue"
                                                                            href="/dieu-khoan-fahasa"
                                                                            target="blank"
                                                                        >
                                                                            Điều khoản & Điều kiện
                                                                            của Fahasa.com
                                                                        </a>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ width: "100px" }} className=""></div>
                                                <div className="">
                                                    <div className="fhs-btn-box">
                                                        <button
                                                            onClick={handleSuccess}
                                                            className="fhs-btn-confirm fhs-btn-orderconfirm"
                                                        >
                                                            <span>Xác nhận thanh toán</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=""></div>
                            </div>
                        </div>
                        {/* Checkout end */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
