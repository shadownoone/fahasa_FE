import FooterCertification from "./FooterCertification/FooterCertification";
import FooterContact from "./FooterContact/FooterContact";
import FooterInfo from "./FooterInfo/FooterInfo";
import FooterLinks from "./FooterLinks/FooterLinks";
import FooterLogos from "./FooterLogos/FooterLogos";

import "./styles.css";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row" style={{ background: "white", padding: "16px" }}>
                    <FooterInfo />
                    <div className="col-md-8">
                        <div className="row">
                            <FooterLinks />

                            <FooterContact />

                            <FooterLogos />
                        </div>
                    </div>
                </div>
            </div>

            <FooterCertification />
        </div>
    );
}

export default Footer;
