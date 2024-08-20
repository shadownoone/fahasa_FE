import { PhoneIcon, MailIcon, LocationIcon } from "../../Icons/icons";
import "./FooterContact.css";

function FooterContact() {
    return (
        <div className="footer-title">
            <h3>LIÊN HỆ</h3>
            <div className="footer-contact">
                <div className="contact-item col-md-4">
                    <LocationIcon className="icon" />
                    <span>60-62 Lê Lợi, Q.1, TP. HCM</span>
                </div>
                <div className="contact-item col-md-4">
                    <MailIcon className="icon" />
                    <span>cskh@fahasa.com.vn</span>
                </div>
                <div className="contact-item col-md-4">
                    <PhoneIcon className="icon" />
                    <span>1900636467</span>
                </div>
            </div>
        </div>
    );
}

export default FooterContact;
