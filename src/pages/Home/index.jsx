import "./styles.css";
import BannerList from "./BannerList";
import IconList from "./IconList";
import CategoryTab from "../../components/Categorytab";
import FlashSale from "../../components/FlashSale";

function Home() {
    return (
        <div className="page">
            <div className="main-container">
                <div className="main">
                    {/* Home-Banner */}
                    <div className="container">
                        <BannerList />
                    </div>

                    {/* Home-Icon */}
                    <div className="container">
                        <IconList />
                    </div>

                    {/* Flash Sale */}
                    <div style={{ backgroundColor: "#ff6b6c" }}>
                        <div className="container">
                            <FlashSale />
                        </div>
                    </div>

                    {/* CategoryTab */}
                    <div className="container">
                        <CategoryTab />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
