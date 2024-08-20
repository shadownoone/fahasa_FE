import "./product.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { useState } from "react";
import { LikeIcon, ReportIcon, CartIcon } from "../../components/Icons/icons";

function Product() {
    const [quantity, setQuantity] = useState(1);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const increaseQuantity = (event) => {
        event.preventDefault();
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decreaseQuantity = (event) => {
        event.preventDefault();
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    return (
        <div className="main">
            <div className="">
                {/* Title */}
                <div className="container">
                    <div className="container-inner breadcrumbs">
                        <ol className="breadcrumb">
                            <li>
                                <a href="">Sách tiếng Việt</a>
                            </li>

                            <li>
                                <a href="">Sách tiếng Việt</a>
                            </li>
                            <li>
                                <a href="">Sách tiếng Việt</a>
                            </li>
                        </ol>
                    </div>
                </div>
                {/* Product view */}
                <div className="product">
                    <div className="">
                        <div className="container-inner">
                            <form>
                                <div className="product-view kasitoo">
                                    <div className="product-essential">
                                        {/*  */}
                                        <div className="product-essential-media-parent">
                                            <div className="product-essential-media">
                                                <div className="product_view_media_fk_addtocart">
                                                    <div className="product-view-image">
                                                        <div className="product-view-thumbnail">
                                                            <div className="lightgallery">
                                                                <a
                                                                    href="/"
                                                                    className="include-in-gallery"
                                                                >
                                                                    <img src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_217480.jpg" />
                                                                </a>
                                                                <a
                                                                    href="/"
                                                                    className="include-in-gallery"
                                                                >
                                                                    <img src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_217480.jpg" />
                                                                </a>
                                                                <a
                                                                    href="/"
                                                                    className="include-in-gallery"
                                                                >
                                                                    <img src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_217480.jpg" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="product-view-image-product fhs_img_frame_container">
                                                            <img
                                                                src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_217480.jpg"
                                                                className="fhs-p-img fhs_img_frame"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="product_view_add_box">
                                                        <button className="btn-cart-to-cart">
                                                            <span className="icon-cart-to-cart">
                                                                <CartIcon />
                                                            </span>

                                                            <span>Thêm vào giỏ hàng</span>
                                                        </button>
                                                        <button className="btn-buy-now">
                                                            <span>Mua ngay</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="product_view_policy_left">
                                                    <div className="product_view_policy_content_left">
                                                        <div className="product_view_policy_title">
                                                            Chính sách ưu đãi của Fahasa
                                                        </div>
                                                        <div className="product-attribute">
                                                            <div className="product_view_item_note">
                                                                <div
                                                                    className="product_view_item_icon"
                                                                    style={{
                                                                        background:
                                                                            "url(https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_truck_v2.png) no-repeat center center",
                                                                        backgroundSize: "18px ",
                                                                    }}
                                                                ></div>
                                                                <div className="product_view_item_title">
                                                                    Thời gian giao hàng
                                                                </div>
                                                                <div className="product_view_item_special_char">
                                                                    :
                                                                </div>
                                                                <div className="product_view_item_content_container">
                                                                    <div className="product_view_item_content">
                                                                        Giao nhanh và uy tín
                                                                    </div>
                                                                    <div className="product_view_item_icon_more"></div>
                                                                </div>
                                                            </div>
                                                            <div className="product_view_item_note">
                                                                <div
                                                                    className="product_view_item_icon"
                                                                    style={{
                                                                        background:
                                                                            "url(https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_transfer_v2.png) no-repeat center center",
                                                                        backgroundSize: "18px ",
                                                                    }}
                                                                ></div>
                                                                <div className="product_view_item_title">
                                                                    Chính sách đổi trả
                                                                </div>
                                                                <div className="product_view_item_special_char">
                                                                    :
                                                                </div>
                                                                <div className="product_view_item_content_container">
                                                                    <div className="product_view_item_content">
                                                                        Đổi trả miễn phí toàn quốc
                                                                    </div>
                                                                    <div className="product_view_item_icon_more"></div>
                                                                </div>
                                                            </div>
                                                            <div className="product_view_item_note">
                                                                <div
                                                                    className="product_view_item_icon"
                                                                    style={{
                                                                        background:
                                                                            "url(https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_shop_v2.png) no-repeat center center",
                                                                        backgroundSize: "18px ",
                                                                    }}
                                                                ></div>
                                                                <div className="product_view_item_title">
                                                                    Chính sách khách sỉ
                                                                </div>
                                                                <div className="product_view_item_special_char">
                                                                    :
                                                                </div>
                                                                <div className="product_view_item_content_container">
                                                                    <div className="product_view_item_content">
                                                                        Ưu đãi khi mua số lượng lớn
                                                                    </div>
                                                                    <div className="product_view_item_icon_more"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  */}
                                        </div>
                                        {/*  */}
                                        <div className="product-essential-detail-parent">
                                            <div className="product-essential-detail">
                                                <div className="block-content-product-detail block-product-view-mobile">
                                                    {/* Name */}
                                                    <h1>Cây Cam Ngọt Của Tôi</h1>
                                                    {/* Info */}
                                                    <div className="product-view-sa">
                                                        <div className="product-view-sa_one">
                                                            <div className="product-view-sa-supplier">
                                                                <span>Nhà cung cấp:</span>
                                                                <a href="/">Nhã Nam</a>
                                                            </div>
                                                            <div className="product-view-sa-author">
                                                                <span>Tác giả:</span>
                                                                <span>
                                                                    José Mauro de Vasconcelos
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="product-view-sa_two">
                                                            <div className="product-view-sa-supplier">
                                                                <span>Nhà xuất bản:</span>
                                                                <span>NXB Hội Nhà Văn</span>
                                                            </div>
                                                            <div className="product-view-sa-author">
                                                                <span>Hình thức bìa:</span>
                                                                <span>Bìa Mềm</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* View-rate */}
                                                    <div className="view-rate">
                                                        <div className="view-rate-left">
                                                            <div className="ratings">
                                                                <div className="rating-content"></div>
                                                            </div>
                                                            <div className="product-view-sold-qty">
                                                                <span className="product-view-space-sold-qty">
                                                                    |
                                                                </span>
                                                                <div className="product-view-qty-num">
                                                                    <span>Đã bán</span>1000
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Price */}
                                                    <div className="col-md-12 price-block">
                                                        <div className="product_price price-block-left">
                                                            <div className="price-box">
                                                                <p className="special-price">
                                                                    <span className="price-label"></span>
                                                                    <span className="price">
                                                                        86.400 đ
                                                                    </span>
                                                                </p>
                                                                <p className="old-price">
                                                                    <span className="price-label"></span>
                                                                    <span className="price">
                                                                        108.000 đ
                                                                    </span>
                                                                    <span className="discount-percent">
                                                                        -20%
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Quantity */}
                                                    <div className="product-quantity">
                                                        <div className="quantity">
                                                            <div className="product-view-quantity-box">
                                                                <label>Số lượng:</label>
                                                                <div className="product-view-quantity-box-block">
                                                                    <button
                                                                        className="quantity-btn"
                                                                        onClick={decreaseQuantity}
                                                                    >
                                                                        -
                                                                    </button>
                                                                    <span>{quantity}</span>
                                                                    <button
                                                                        className="quantity-btn"
                                                                        onClick={increaseQuantity}
                                                                    >
                                                                        +
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* ProductDetail */}
                                            <div className="block-content-product-detail block-info-detail-mobile">
                                                <div className="block-content-product-detail-title">
                                                    Thông tin chi tiết
                                                </div>
                                                <div className="content product_view_content">
                                                    <div className="product_view_tab_content_ad">
                                                        <div className="product_view_tab_content_additional">
                                                            <table className="data-table table-additional">
                                                                <colgroup>
                                                                    <col style={{ width: "25%" }} />
                                                                    <col />
                                                                </colgroup>
                                                                <tbody>
                                                                    <tr>
                                                                        <th className="table-label">
                                                                            Mã hàng
                                                                        </th>
                                                                        <td className="data_sku">
                                                                            8935086858318
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="table-label">
                                                                            Tên Nhà Cung Cấp
                                                                        </th>
                                                                        <td className="data_supplier">
                                                                            <a href="/">
                                                                                FIRST NEWS
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="table-label">
                                                                            Tác giả
                                                                        </th>
                                                                        <td className="data_author">
                                                                            Thích Pháp Hòa
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="table-label">
                                                                            NXB
                                                                        </th>
                                                                        <td className="data_publisher">
                                                                            Dân Trí
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="table-label">
                                                                            Năm XB
                                                                        </th>
                                                                        <td className="data_publish_year">
                                                                            14/04/2003
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="table-label">
                                                                            Ngôn Ngữ
                                                                        </th>
                                                                        <td className="data_languages">
                                                                            Tiếng Việt
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="table-label">
                                                                            Trọng lượng (gr)
                                                                        </th>
                                                                        <td className="data_weight">
                                                                            377
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="table-label">
                                                                            Kích Thước Bao Bì
                                                                        </th>
                                                                        <td className="data_size">
                                                                            20.5 x 14.5 x 1.6 cm
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="table-label">
                                                                            Số trang
                                                                        </th>
                                                                        <td className="data_size">
                                                                            328
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="table-label">
                                                                            Hình thức
                                                                        </th>
                                                                        <td className="data_book_layout">
                                                                            Bìa Mềm
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td
                                                                            colSpan="2"
                                                                            style={{
                                                                                padding: "0px",
                                                                            }}
                                                                        >
                                                                            <div>
                                                                                Giá sản phẩm trên
                                                                                Fahasa.com đã bao
                                                                                gồm thuế theo luật
                                                                                hiện hành. Bên cạnh
                                                                                đó, tuỳ vào loại sản
                                                                                phẩm, hình thức và
                                                                                địa chỉ giao hàng mà
                                                                                có thể phát sinh
                                                                                thêm chi phí khác
                                                                                như Phụ phí đóng
                                                                                gói, phí vận chuyển,
                                                                                phụ phí hàng cồng
                                                                                kềnh,...
                                                                            </div>
                                                                            <div
                                                                                style={{
                                                                                    color: "#c92127",
                                                                                }}
                                                                            >
                                                                                Chính sách khuyến
                                                                                mãi trên Fahasa.com
                                                                                không áp dụng cho Hệ
                                                                                thống Nhà sách
                                                                                Fahasa trên toàn
                                                                                quốc
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Description */}
                                            <div className="block-content-product-detail block-info-detail-2-mobile">
                                                <div className="block-content-product-detail-title">
                                                    Mô tả sản phẩm
                                                </div>
                                                <div
                                                    className="product_tabs_description_contents"
                                                    style={{
                                                        maxHeight: isExpanded ? "none" : "300px",
                                                        height: "auto",
                                                    }}
                                                >
                                                    <div className="desc_content">
                                                        <p>
                                                            <strong>Lén Nhặt Chuyện Đời</strong>
                                                        </p>
                                                        <p>
                                                            Tại vùng ngoại ô xứ Đan Mạch xưa, người
                                                            thợ kim hoàn Per Enevoldsen đã cho ra
                                                            mắt một món đồ trang sức lấy ý tưởng từ
                                                            Pandora - người phụ nữ đầu tiên của nhân
                                                            loại mang vẻ đẹp như một ngọc nữ phù
                                                            dung, kiêu sa và bí ẩn trong Thần thoại
                                                            Hy Lạp. Vòng Pandora được kết hợp từ một
                                                            sợi dây bằng vàng, bạc hoặc bằng da cùng
                                                            với những viên charm được chế tác đa
                                                            dạng, tỉ mỉ. Ý tưởng của ông, mỗi viên
                                                            charm như một câu chuyện, một kỷ niệm
                                                            đáng nhớ của người sở hữu chiếc vòng.
                                                            Khi một viên charm được thêm vào sợi
                                                            Pandora là cuộc đời lại có thêm một ký
                                                            ức cần lưu lại để nhớ, để thương, để
                                                            trân trọng. Lén nhặt chuyện đời ra mắt
                                                            trong khoảng thời gian chông chênh nhất
                                                            của bản thân, hay nói cách khác là một
                                                            cậu bé mới lớn, vừa bước ra khỏi cái vỏ
                                                            bọc vốn an toàn của mình. Những câu
                                                            chuyện trong Lén nhặt chuyện đời là
                                                            những câu chuyện tôi được nghe kể lại,
                                                            hoặc vô tình bắt gặp, hoặc nhặt nhạnh ở
                                                            đâu đó trong miền ký ức rời rạc của quá
                                                            khứ, không theo một trình tự hay một
                                                            thời gian nào nhất định.
                                                        </p>
                                                        <p>
                                                            Tại vùng ngoại ô xứ Đan Mạch xưa, người
                                                            thợ kim hoàn Per Enevoldsen đã cho ra
                                                            mắt một món đồ trang sức lấy ý tưởng từ
                                                            Pandora - người phụ nữ đầu tiên của nhân
                                                            loại mang vẻ đẹp như một ngọc nữ phù
                                                            dung, kiêu sa và bí ẩn trong Thần thoại
                                                            Hy Lạp. Vòng Pandora được kết hợp từ một
                                                            sợi dây bằng vàng, bạc hoặc bằng da cùng
                                                            với những viên charm được chế tác đa
                                                            dạng, tỉ mỉ. Ý tưởng của ông, mỗi viên
                                                            charm như một câu chuyện, một kỷ niệm
                                                            đáng nhớ của người sở hữu chiếc vòng.
                                                            Khi một viên charm được thêm vào sợi
                                                            Pandora là cuộc đời lại có thêm một ký
                                                            ức cần lưu lại để nhớ, để thương, để
                                                            trân trọng. Lén nhặt chuyện đời ra mắt
                                                            trong khoảng thời gian chông chênh nhất
                                                            của bản thân, hay nói cách khác là một
                                                            cậu bé mới lớn, vừa bước ra khỏi cái vỏ
                                                            bọc vốn an toàn của mình. Những câu
                                                            chuyện trong Lén nhặt chuyện đời là
                                                            những câu chuyện tôi được nghe kể lại,
                                                            hoặc vô tình bắt gặp, hoặc nhặt nhạnh ở
                                                            đâu đó trong miền ký ức rời rạc của quá
                                                            khứ, không theo một trình tự hay một
                                                            thời gian nào nhất định.
                                                        </p>
                                                    </div>
                                                    {!isExpanded && (
                                                        <div className="product_tabs_description_contents_gradient"></div>
                                                    )}
                                                </div>
                                                <div
                                                    className="desc_viewmore"
                                                    onClick={toggleExpand}
                                                >
                                                    <div className="fhs_center_center">
                                                        {isExpanded ? "Thu gọn" : "Xem thêm"}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* review */}
                        <div className="content product_view_content">
                            <div className="product_view_content-title">Đánh giá sản phẩm</div>
                            <div className="product_view_tab_content_review">
                                {/* Rating */}
                                <div className="product-view-tab-content-rating">
                                    <div className="product-view-tab-content-rating-chart">
                                        <div>
                                            <div>
                                                <div>
                                                    <div>
                                                        0<span>/5</span>
                                                    </div>
                                                    <div></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="review-nologged">
                                                Chỉ có thành viên mới có thể viết nhận xét. Vui lòng
                                                <a href=""> đăng nhập </a> hoặc
                                                <a href="/"> đăng ký </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Comment */}
                                <div className="product-view-tab-content-review-comment">
                                    <div className="product-view-tab-content-review-comment_sort review_comment_tabs_swiper_container swiper-container-horizontal">
                                        <ul className="fhs-tabs review_comment_tabs swiper-wrapper">
                                            <li>
                                                <a>Mới nhất</a>
                                            </li>
                                            <li>
                                                <a>Mới nhất</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="comment_content">
                                        <ul className="comment_list">
                                            {/* User Comment */}
                                            <li>
                                                <div>
                                                    <div>u***123</div>
                                                    <div>12/07/2024</div>
                                                </div>
                                                <div>
                                                    <div className="fhs_center_left">
                                                        <div className="rating-box">
                                                            <div className="rating"></div>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        Sách chuẩn , bìa dày đẹp , bao bọc cẩn thận
                                                        rất uy tín sách dày có kèm bookmark ưng lắm
                                                        ạ
                                                    </div>
                                                    <div className="fhs_center_left flex">
                                                        <div
                                                            className="review_like fhs_center_left fhs_mouse_point"
                                                            style={{ marginRight: "20px" }}
                                                        >
                                                            <span>
                                                                <LikeIcon className="like-icon" />
                                                            </span>
                                                            <span className="review_like_txt">
                                                                Thích
                                                            </span>
                                                            <span className="review_like_count">
                                                                (2)
                                                            </span>
                                                        </div>
                                                        <div className="review_report fhs_center_left fhs_mouse_point">
                                                            <span>
                                                                <ReportIcon className="icon_review_report" />
                                                            </span>
                                                            <span className="review_like_txt">
                                                                Báo cáo
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <div>u***123</div>
                                                    <div>12/07/2024</div>
                                                </div>
                                                <div>
                                                    <div className="fhs_center_left">
                                                        <div className="rating-box">
                                                            <div className="rating"></div>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        Sách chuẩn , bìa dày đẹp , bao bọc cẩn thận
                                                        rất uy tín sách dày có kèm bookmark ưng lắm
                                                        ạ
                                                    </div>
                                                    <div className="fhs_center_left flex">
                                                        <div
                                                            className="review_like fhs_center_left fhs_mouse_point"
                                                            style={{ marginRight: "20px" }}
                                                        >
                                                            <span>
                                                                <LikeIcon className="like-icon" />
                                                            </span>
                                                            <span className="review_like_txt">
                                                                Thích
                                                            </span>
                                                            <span className="review_like_count">
                                                                (2)
                                                            </span>
                                                        </div>
                                                        <div className="review_report fhs_center_left fhs_mouse_point">
                                                            <span>
                                                                <ReportIcon className="icon_review_report" />
                                                            </span>
                                                            <span className="review_like_txt">
                                                                Báo cáo
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
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

export default Product;
