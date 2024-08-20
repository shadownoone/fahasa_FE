import "./styles.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FlashSale() {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };
    return (
        <div style={{ width: "100%" }}>
            <div className="flashsale_header fhs_center_space">
                <div className="fhs_center_left">
                    <a href="/" className="flashsale-slider-title">
                        <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/flashsale/label-flashsale.svg?q=" />
                        <div className="margin_left_big">
                            <span className="flashsale-page-countdown-label">Kết thúc trong</span>
                        </div>
                        <div className="flashsale-countdown margin_left_normal">
                            <span className="flashsale-countdown-temp"></span>
                            <span className="flashsale-countdown-number">12</span>
                            <span>:</span>
                            <span className="flashsale-countdown-number">12</span>
                            <span>:</span>
                            <span className="flashsale-countdown-number">12</span>
                        </div>
                    </a>
                </div>
                <a
                    href="/"
                    style={{ position: "relative" }}
                    className="fs_hcenter_right flex-jus-text  padding_left_big"
                >
                    <span className="fhs_btn_default_text blue desktop_only">Xem tất cả</span>
                </a>
            </div>
            <div className="fhs-product-slider-content">
                <div className="">
                    <Slider {...settings}>
                        <div className="fhs_product_basic swiper-slide">
                            <div className="item-inner">
                                <div className="ma-box-content">
                                    <div className="products clear">
                                        <div className="product images-container">
                                            <a href={"/product/"} className="product-image">
                                                <div className="product-image">
                                                    <img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8936146680467.jpg" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="product-name-no-ellipsis">
                                            <a href={"/product/"}>Cờ Vua Nam Châm - Sato 046</a>
                                        </h2>
                                        <div className="price-label">
                                            <p className="special-price">
                                                <span className="price m-price-font ">
                                                    164.050 đ
                                                </span>
                                                <span className="discount-percent">-15%</span>
                                            </p>
                                            <p className="old-price">
                                                <span className="price"> 193.000 đ</span>
                                            </p>
                                        </div>
                                        <div className="fhs-rating-container">
                                            <div className="fhs-container-sold-qty">
                                                <div className="fhs-sold-qty-num">
                                                    <span>Đã bán </span> 87
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fhs_product_basic swiper-slide">
                            <div className="item-inner">
                                <div className="ma-box-content">
                                    <div className="products clear">
                                        <div className="product images-container">
                                            <a href="/" className="product-image">
                                                <div className="product-image">
                                                    <img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8936146680467.jpg" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="product-name-no-ellipsis">
                                            <a href="/">Cờ Vua Nam Châm - Sato 046</a>
                                        </h2>
                                        <div className="price-label">
                                            <p className="special-price">
                                                <span className="price m-price-font ">
                                                    164.050 đ
                                                </span>
                                                <span className="discount-percent">-15%</span>
                                            </p>
                                            <p className="old-price">
                                                <span className="price"> 193.000 đ</span>
                                            </p>
                                        </div>
                                        <div className="fhs-rating-container">
                                            <div className="fhs-container-sold-qty">
                                                <div className="fhs-sold-qty-num">
                                                    <span>Đã bán </span> 87
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fhs_product_basic swiper-slide">
                            <div className="item-inner">
                                <div className="ma-box-content">
                                    <div className="products clear">
                                        <div className="product images-container">
                                            <a href="/" className="product-image">
                                                <div className="product-image">
                                                    <img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8936146680467.jpg" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="product-name-no-ellipsis">
                                            <a href="/">Cờ Vua Nam Châm - Sato 046</a>
                                        </h2>
                                        <div className="price-label">
                                            <p className="special-price">
                                                <span className="price m-price-font ">
                                                    164.050 đ
                                                </span>
                                                <span className="discount-percent">-15%</span>
                                            </p>
                                            <p className="old-price">
                                                <span className="price"> 193.000 đ</span>
                                            </p>
                                        </div>
                                        <div className="fhs-rating-container">
                                            <div className="fhs-container-sold-qty">
                                                <div className="fhs-sold-qty-num">
                                                    <span>Đã bán </span> 87
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fhs_product_basic swiper-slide">
                            <div className="item-inner">
                                <div className="ma-box-content">
                                    <div className="products clear">
                                        <div className="product images-container">
                                            <a href="/" className="product-image">
                                                <div className="product-image">
                                                    <img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8936146680467.jpg" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="product-name-no-ellipsis">
                                            <a href="/">Cờ Vua Nam Châm - Sato 046</a>
                                        </h2>
                                        <div className="price-label">
                                            <p className="special-price">
                                                <span className="price m-price-font ">
                                                    164.050 đ
                                                </span>
                                                <span className="discount-percent">-15%</span>
                                            </p>
                                            <p className="old-price">
                                                <span className="price"> 193.000 đ</span>
                                            </p>
                                        </div>
                                        <div className="fhs-rating-container">
                                            <div className="fhs-container-sold-qty">
                                                <div className="fhs-sold-qty-num">
                                                    <span>Đã bán </span> 87
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fhs_product_basic swiper-slide">
                            <div className="item-inner">
                                <div className="ma-box-content">
                                    <div className="products clear">
                                        <div className="product images-container">
                                            <a href="/" className="product-image">
                                                <div className="product-image">
                                                    <img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8936146680467.jpg" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="product-name-no-ellipsis">
                                            <a href="/">Cờ Vua Nam Châm - Sato 046</a>
                                        </h2>
                                        <div className="price-label">
                                            <p className="special-price">
                                                <span className="price m-price-font ">
                                                    164.050 đ
                                                </span>
                                                <span className="discount-percent">-15%</span>
                                            </p>
                                            <p className="old-price">
                                                <span className="price"> 193.000 đ</span>
                                            </p>
                                        </div>
                                        <div className="fhs-rating-container">
                                            <div className="fhs-container-sold-qty">
                                                <div className="fhs-sold-qty-num">
                                                    <span>Đã bán </span> 87
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default FlashSale;
