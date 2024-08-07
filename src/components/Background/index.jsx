import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RightIcon, LeftIcon } from "../Icons/icons";

import "./styles.css";

function Background() {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="container">
            <div className="slider-container">
                <Slider
                    ref={(slider) => {
                        sliderRef = slider;
                    }}
                    {...settings}
                >
                    <div className="slider-onl">
                        <a href="/">
                            <img src="https://cdn0.fahasa.com/media/magentothem/banner7/TrangDoChoiThang7_Resize_SlideBanner_T7_840x320_2.jpg" />
                        </a>
                    </div>
                    <div className="slider-onl">
                        <a href="/">
                            <img src="https://cdn0.fahasa.com/media/magentothem/banner7/Diamond_T07_ThienLong_Slide_840x320_1.jpg" />
                        </a>
                    </div>
                    <div className="slider-onl">
                        <a href="/">
                            <img src="https://cdn0.fahasa.com/media/magentothem/banner7/NCC_0724_MCBOOKS_Slide_840x320.jpg" />
                        </a>
                    </div>
                    <div className="slider-onl">
                        <a href="/">
                            <img src="https://cdn0.fahasa.com/media/magentothem/banner7/Laprap_Slide_T7_840x320.jpg" />
                        </a>
                    </div>
                    <div className="slider-onl">
                        <a href="/">
                            <img src="https://cdn0.fahasa.com/media/magentothem/banner7/Trang_baloMrVui_0724_Slidebanner_840x320-20.jpg" />
                        </a>
                    </div>
                </Slider>
                <button className="button previous" onClick={previous}>
                    <LeftIcon className="icon" />
                </button>
                <button className="button next" onClick={next}>
                    <RightIcon className="icon" />
                </button>
            </div>
            <div className="slider-main">
                <div>
                    <a href="/">
                        <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-07-2024/DoiTac_SubBanner_392x156_2.jpg" />
                    </a>
                </div>
                <div>
                    <a href="/">
                        <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-08-2024/VPbank392x156.png " />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Background;
