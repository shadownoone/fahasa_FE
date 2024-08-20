import PropTypes from "prop-types";
import Footer from "../../../Footer";
import Header from "../../../Header";

function DefaultLayout({ children }) {
    return (
        <div>
            <div className="wrapper">
                <Header />

                <div className="content">{children}</div>

                <Footer />
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
