import "./CategorySearch.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
function CategorySearch() {
    return (
        <div className="main">
            <div className="col-main">
                <div>
                    <div className="mb-breadcrumbs">
                        <div className="breadcrumbs hidden-xs">
                            <div className="container-inner breadcrumbs">
                                <ol className="breadcrumb">
                                    <li>
                                        <a>HOME</a>
                                    </li>
                                    <li>
                                        <a>All Category</a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-main">
                    <div className="container-inner">
                        <div className="d-flex justify-content-center">
                            {/* Sidebar */}
                            <div
                                className="col-left sidebar col-lg-3 col-md-3 col-sm-12 col-xs-12"
                                style={{ paddingLeft: "0px" }}
                            >
                                <div className="mb-left">
                                    <div className="mb-mana-catalog-leftnav">
                                        <div className="mb-mana-catalog-leftnav">
                                            <div className="block block-layered-nav">
                                                <div className="block-content">
                                                    <dl className="narrow-by-list">
                                                        <dt className="odd">Nhóm sản phẩm</dt>
                                                        <dd className="odd">
                                                            <div className="m-current-category  parent-current-category">
                                                                <span className="m-selected-filter-item">
                                                                    All Category
                                                                </span>
                                                            </div>
                                                            <ol className="m-child-category-list">
                                                                <li>
                                                                    <a href="/">Sách tiếng Việt</a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">Sách tiếng Việt</a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">Sách tiếng Việt</a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">Sách tiếng Việt</a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">Sách tiếng Việt</a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">Sách tiếng Việt</a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">Sách tiếng Việt</a>
                                                                </li>
                                                            </ol>
                                                        </dd>

                                                        {/* Price */}
                                                        <dt className="even">Giá</dt>
                                                        <dd className="even">
                                                            <ol className="m-filter-css-checkboxes">
                                                                <li>
                                                                    <label className="price-label">
                                                                        <input
                                                                            type="checkbox"
                                                                            className="price-checkbox"
                                                                        />
                                                                        <span>0đ - 150,000đ</span>
                                                                    </label>
                                                                </li>
                                                            </ol>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            <div className="col-main col-lg-9 col-md-9 col-sm-12 col-xs-12 col-fhs-main-body">
                                <div className="mb-content">
                                    <div className="mb-category-products">
                                        <div className="category-products">
                                            <div className="toolbar-top">
                                                <div className="toolbar  col-sm-12 col-xs-12 col-md-12 ">
                                                    <div className="sorter col-sm-4 col-xs-6 col-md-4 ">
                                                        <div className="abc-xyz">
                                                            <div className="dropdownfhs-text hidden-xs">
                                                                <p>Sắp xếp theo :</p>
                                                            </div>
                                                            <div className="sort-by dropdownfhs dropdownfhs-select">
                                                                <div className="selectBox selectBox-order">
                                                                    <select className="select-order">
                                                                        <option value="week">
                                                                            Bán Chạy Tuần
                                                                        </option>
                                                                        <option value="month">
                                                                            Bán Chạy Tháng
                                                                        </option>
                                                                        <option value="year">
                                                                            Bán Chạy Năm
                                                                        </option>
                                                                        <option value="price-asc">
                                                                            Giá Tăng Dần
                                                                        </option>
                                                                        <option value="price-desc">
                                                                            Giá Giảm Dần
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className=""></div>
                                                </div>
                                            </div>
                                            <div className="products-grid fhs-top">
                                                <div className="">
                                                    <div className="item-inner">
                                                        <div className="label-pro-sale m-label-pro-sale">
                                                            <span className="p-sale-label discount-l-fs">
                                                                15%
                                                            </span>
                                                        </div>
                                                        <div className="ma-box-content">
                                                            <div className="products clearfix">
                                                                <div className="product images-container">
                                                                    <a href="/">
                                                                        <span className="product-image">
                                                                            <img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244826487.jpg" />
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <h2 className="product-name-no-ellipsis p-name-list">
                                                                <a href="/">
                                                                    Búp Sen Xanh (Tái Bản 2020)
                                                                </a>
                                                            </h2>
                                                            <div className="price-label">
                                                                <div className="price-box">
                                                                    <div className="price-box">
                                                                        <span className="price">
                                                                            <p className="special-price">
                                                                                <span className="price">
                                                                                    61.200 đ
                                                                                </span>
                                                                            </p>
                                                                            <p className="old-price bg-white">
                                                                                <span className="price">
                                                                                    72.000 đ
                                                                                </span>
                                                                            </p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="item-inner">
                                                        <div className="label-pro-sale m-label-pro-sale">
                                                            <span className="p-sale-label discount-l-fs">
                                                                15%
                                                            </span>
                                                        </div>
                                                        <div className="ma-box-content">
                                                            <div className="products clearfix">
                                                                <div className="product images-container">
                                                                    <a href="/">
                                                                        <span className="product-image">
                                                                            <img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244826487.jpg" />
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <h2 className="product-name-no-ellipsis p-name-list">
                                                                <a href="/">
                                                                    Búp Sen Xanh (Tái Bản 2020)
                                                                </a>
                                                            </h2>
                                                            <div className="price-label">
                                                                <div className="price-box">
                                                                    <div className="price-box">
                                                                        <span className="price">
                                                                            <p className="special-price">
                                                                                <span className="price">
                                                                                    61.200 đ
                                                                                </span>
                                                                            </p>
                                                                            <p className="old-price bg-white">
                                                                                <span className="price">
                                                                                    72.000 đ
                                                                                </span>
                                                                            </p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="item-inner">
                                                        <div className="label-pro-sale m-label-pro-sale">
                                                            <span className="p-sale-label discount-l-fs">
                                                                15%
                                                            </span>
                                                        </div>
                                                        <div className="ma-box-content">
                                                            <div className="products clearfix">
                                                                <div className="product images-container">
                                                                    <a href="/">
                                                                        <span className="product-image">
                                                                            <img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244826487.jpg" />
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <h2 className="product-name-no-ellipsis p-name-list">
                                                                <a href="/">
                                                                    Búp Sen Xanh (Tái Bản 2020)
                                                                </a>
                                                            </h2>
                                                            <div className="price-label">
                                                                <div className="price-box">
                                                                    <div className="price-box">
                                                                        <span className="price">
                                                                            <p className="special-price">
                                                                                <span className="price">
                                                                                    61.200 đ
                                                                                </span>
                                                                            </p>
                                                                            <p className="old-price bg-white">
                                                                                <span className="price">
                                                                                    72.000 đ
                                                                                </span>
                                                                            </p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="item-inner">
                                                        <div className="label-pro-sale m-label-pro-sale">
                                                            <span className="p-sale-label discount-l-fs">
                                                                15%
                                                            </span>
                                                        </div>
                                                        <div className="ma-box-content">
                                                            <div className="products clearfix">
                                                                <div className="product images-container">
                                                                    <a href="/">
                                                                        <span className="product-image">
                                                                            <img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244826487.jpg" />
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <h2 className="product-name-no-ellipsis p-name-list">
                                                                <a href="/">
                                                                    Búp Sen Xanh (Tái Bản 2020)
                                                                </a>
                                                            </h2>
                                                            <div className="price-label">
                                                                <div className="price-box">
                                                                    <div className="price-box">
                                                                        <span className="price">
                                                                            <p className="special-price">
                                                                                <span className="price">
                                                                                    61.200 đ
                                                                                </span>
                                                                            </p>
                                                                            <p className="old-price bg-white">
                                                                                <span className="price">
                                                                                    72.000 đ
                                                                                </span>
                                                                            </p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="item-inner">
                                                        <div className="label-pro-sale m-label-pro-sale">
                                                            <span className="p-sale-label discount-l-fs">
                                                                15%
                                                            </span>
                                                        </div>
                                                        <div className="ma-box-content">
                                                            <div className="products clearfix">
                                                                <div className="product images-container">
                                                                    <a href="/">
                                                                        <span className="product-image">
                                                                            <img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935244826487.jpg" />
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <h2 className="product-name-no-ellipsis p-name-list">
                                                                <a href="/">
                                                                    Búp Sen Xanh (Tái Bản 2020)
                                                                </a>
                                                            </h2>
                                                            <div className="price-label">
                                                                <div className="price-box">
                                                                    <div className="price-box">
                                                                        <span className="price">
                                                                            <p className="special-price">
                                                                                <span className="price">
                                                                                    61.200 đ
                                                                                </span>
                                                                            </p>
                                                                            <p className="old-price bg-white">
                                                                                <span className="price">
                                                                                    72.000 đ
                                                                                </span>
                                                                            </p>
                                                                        </span>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategorySearch;
