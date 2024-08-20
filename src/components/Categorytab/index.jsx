import { useState } from "react";

import "./styles.css";

function CategoryTab() {
    const [showMore, setShowMore] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="categorytab-slider">
            <div>
                <div className="tabslider-header">
                    <div className="tabslider-title girdslider-title-aaa">
                        <div className="header-icon-gridslider">
                            <img
                                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico-dochoi_1.png"
                                className="center icon-header"
                                alt="icon"
                            />
                        </div>
                        Đồ Chơi
                    </div>
                    <div className="ma-title">
                        <div className="tabslider-tabs tabslider-tabs-gird">
                            <ul className="fhs-tabs swiper-container">
                                <div className="swiper-wrapper ts-header">
                                    {[
                                        "Xếp Hình - Lắp Ghép",
                                        "Xếp Hình - Lắp Ghép",
                                        "Xếp Hình - Lắp Ghép",
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className={`swiper-slide fhs-tabs-item-li ${
                                                activeIndex === index ? "active" : ""
                                            }`}
                                            onClick={() => handleClick(index)}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="tabslider-top-content" style={{ marginBottom: "10px" }}></div>

                <div className="tab_container">
                    <div className={`product_grid ${showMore ? "show-more" : ""}`}>
                        <div className="fhs_product_basic swiper-slide">
                            <div className="item-inner">
                                <div className="ma-box-content">
                                    <div className="products clear">
                                        <div className="product images-container">
                                            <a href={"/product"} className="product-image">
                                                <div className="product-image">
                                                    <img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8936146680467.jpg" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="product-name-no-ellipsis">
                                            <a href={"/product"}>Cờ Vua Nam Châm - Sato 046</a>
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
                                                <span className="price">193.000 đ</span>
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
                                                <span className="price">193.000 đ</span>
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
                                                <span className="price">193.000 đ</span>
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
                                                <span className="price">193.000 đ</span>
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
                                                <span className="price">193.000 đ</span>
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
                                                <span className="price">193.000 đ</span>
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
                    </div>
                    <button onClick={toggleShowMore} className="toggle-button">
                        {showMore ? "Rút gọn" : "Xem thêm"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CategoryTab;
