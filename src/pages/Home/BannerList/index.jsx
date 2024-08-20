// components/BannerList.js

import "./BannerList.css";

function BannerList() {
    return (
        <div className="home-banner">
            <div className="banner-list">
                <div className="banner-img">
                    <a href={"/product/"}>
                        <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-08-2024/NCCTanViet_KC_0824_SmallBanner_310x210.png" />
                    </a>
                </div>
                <div className="banner-img">
                    <a href={"/product/"}>
                        <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-08-2024/BannerHomePage_TrangBalo_Smallbanner_310x210.png" />
                    </a>
                </div>
                <div className="banner-img">
                    <a href={"/product/"}>
                        <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-08-2024/Backtoschool_mainbannerT8_resize_MainBanner_310x210_2.png" />
                    </a>
                </div>
                <div className="banner-img">
                    <a href={"/product/"}>
                        <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-08-2024/NCCSaigonbooks_Kc_0824_SmallBanner_310x210.png" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default BannerList;
