import "./cart.css";
import { useState } from "react";
import { RemoveIcon } from "../../components/Icons/icons";

import { useNavigate } from "react-router-dom";

function Cart() {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleCheckout = () => {
        navigate("/checkout"); // Thay đổi đường dẫn thành trang checkout của bạn
    };
    return (
        <div className="main">
            <div className="container-main cart">
                <div className="page-title title-buttons">
                    <div className="page-title-container">
                        <h1>Giỏ Hàng</h1>
                        <span className="cart-title-num-items">(1 sản phẩm)</span>
                    </div>
                </div>
                {/* Cart */}
                <div className="list-cart">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 cart-page">
                        <div className="cart-content">
                            <div className="cart-product">
                                {/* List Items */}
                                <div className="col-sm-8 col-xs-12">
                                    <div className="header-cart-item">
                                        <div className="checkbox-all-product">
                                            <input type="checkbox" className="checkbox-add-cart" />
                                        </div>
                                        <div className="">
                                            <span className="">
                                                Chọn tất cả(
                                                <span className="num-items-checkbox">1</span> sản
                                                phẩm)
                                            </span>
                                        </div>
                                        <div>Số lượng</div>
                                        <div>Thành tiền</div>
                                    </div>
                                    <div className="product-cart-left">
                                        <div className="item-product-cart">
                                            <div className="checked-product-cart">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox-add-cart"
                                                />
                                            </div>
                                            <div className="img-product-cart">
                                                <a href="/" className="product-image">
                                                    <img
                                                        className=""
                                                        src="https://cdn0.fahasa.com/media/catalog/product//c/h/chiasetutraitim-bia.jpg"
                                                    />
                                                </a>
                                            </div>
                                            <div className="group-product-info">
                                                <div className="info-product-cart">
                                                    <div>
                                                        <h2 className="product-name-full-text">
                                                            <a href="/">
                                                                Chia Sẻ Từ Trái Tim (Thích Pháp Hòa)
                                                            </a>
                                                        </h2>
                                                    </div>
                                                    <div className="price-original">
                                                        <div className="cart-price">
                                                            <div className="cart-fhsItem-price">
                                                                <div>
                                                                    <span className="price">
                                                                        126.000 đ
                                                                    </span>
                                                                </div>
                                                                <div className="fhsItem-price-old">
                                                                    <span className="price">
                                                                        168.000 đ
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="number-product-cart">
                                                    <div className="product-view-quantity-box">
                                                        <button
                                                            className="quantity-btn"
                                                            onClick={handleDecrease}
                                                        >
                                                            -
                                                        </button>
                                                        <span className="quantity">{quantity}</span>
                                                        <button
                                                            className="quantity-btn"
                                                            onClick={handleIncrease}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <div className="cart-price-total">
                                                        <span className="cart-price">
                                                            <span className="price">378.000 đ</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="div-of-btn-remove-cart">
                                                <span>
                                                    <RemoveIcon className="remove-icon" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="border-product"></div>
                                        <div className="item-product-cart">
                                            <div className="checked-product-cart">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox-add-cart"
                                                />
                                            </div>
                                            <div className="img-product-cart">
                                                <a href="/" className="product-image">
                                                    <img
                                                        className=""
                                                        src="https://cdn0.fahasa.com/media/catalog/product//c/h/chiasetutraitim-bia.jpg"
                                                    />
                                                </a>
                                            </div>
                                            <div className="group-product-info">
                                                <div className="info-product-cart">
                                                    <div>
                                                        <h2 className="product-name-full-text">
                                                            <a href="/">
                                                                Chia Sẻ Từ Trái Tim (Thích Pháp Hòa)
                                                            </a>
                                                        </h2>
                                                    </div>
                                                    <div className="price-original">
                                                        <div className="cart-price">
                                                            <div className="cart-fhsItem-price">
                                                                <div>
                                                                    <span className="price">
                                                                        126.000 đ
                                                                    </span>
                                                                </div>
                                                                <div className="fhsItem-price-old">
                                                                    <span className="price">
                                                                        168.000 đ
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="number-product-cart">
                                                    <div className="product-view-quantity-box">
                                                        <button
                                                            className="quantity-btn"
                                                            onClick={handleDecrease}
                                                        >
                                                            -
                                                        </button>
                                                        <span className="quantity">{quantity}</span>
                                                        <button
                                                            className="quantity-btn"
                                                            onClick={handleIncrease}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <div className="cart-price-total">
                                                        <span className="cart-price">
                                                            <span className="price">378.000 đ</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="div-of-btn-remove-cart">
                                                <span>
                                                    <RemoveIcon className="remove-icon" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="border-product"></div>
                                    </div>
                                </div>
                                {/* Total */}
                                <div
                                    className="col-sm-4 hidden-max-width-992"
                                    style={{ paddingLeft: "15px" }}
                                >
                                    <div className="total-cart-right">
                                        <div className="effect-scroll-cart-right">
                                            <div className="block-total-cart">
                                                <div className="block-totals-cart-page">
                                                    <div className="total-cart-page ">
                                                        <div className="title-cart-page-left">
                                                            Thành tiền
                                                        </div>
                                                        <div className="number-cart-page-right">
                                                            <span className="price">136.000 đ</span>
                                                        </div>
                                                    </div>
                                                    <div className="border-product"></div>
                                                    <div className="total-cart-page title-final-total">
                                                        <div className="title-cart-page-left">
                                                            Tổng Số Tiền (gồm VAT)
                                                        </div>
                                                        <div className="number-cart-page-right">
                                                            <span className="price">136.000 đ</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="checkout-type-button-cart"
                                                    style={{ textAlign: "center" }}
                                                >
                                                    <div className="method-button-cart">
                                                        <button
                                                            onClick={handleCheckout}
                                                            className="button btn-proceed-checkout btn-checkout"
                                                        >
                                                            <span>
                                                                <span>Thanh Toán</span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
