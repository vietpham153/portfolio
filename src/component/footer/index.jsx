import { FaFacebookF, FaInstagram } from "react-icons/fa6"
import "./Footer.css"
import { IoLogoTwitter } from "react-icons/io"

const Footer = () => {
    return(
        <footer>
            <div className="footer__socials">
                <a href="" target="_blank"><FaFacebookF /></a>
                <a href="" target="_blank"><FaInstagram /></a>
                <a href="" target="_blank"><IoLogoTwitter /></a>
            </div>
            <div className="copyright">
                <p>&Copy; HoangViet. All right reserved</p>
            </div>
        </footer>
    )
}
export default Footer