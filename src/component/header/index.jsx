import "./Header.css"
import Grid from "../../assets/grid.svg"
import MagicButton from "../../commons/MagicButton"
import { FaDownload } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import BlobSvg from "../../assets/blob.svg"
import Viet from "../../assets/Viet.png"
import useScrool from "../../hooks/useScroll";

import cv from "../../assets/cv.pdf"

const Header = () =>{
    const {scrollTo} = useScrool();
    return (
        <header>
        <div className="grid-kit">
            <img src={Grid} alt="" />
        </div>
        <div className="container header__container">
            <div>
                <h3>Hello 👋 I'm</h3>
                <h1>Hoang Viet</h1>
                <h5 className="text-light">👨‍💻 Front-end Developer 🌐</h5>
                <p className="description">
                    {""}
                    I’m a 👨‍💻🚀 Fullstack Developer with expertise in building dynamic,
                    responsive, and scalable web applications. With a passion for both
                    🎨 front-end design and ⚙️ back-end logic, I craft seamless user
                    experiences and robust functionality. Explore my projects, skills,
                    and what I bring to the table 💼.
                </p>
                <MagicButton 
                title={"Download CV"} 
                icon={<FaDownload />} 
                position={"right"}
                isSpinning={true}
                onClick={()=>window.open(cv, "_blank")}
                />
                <MagicButton 
                title={"Let's talk"}
                icon={<FiSend />}
                position={"right"}
                onClick={()=>scrollTo("contact")}
                />
            </div>
            <div className="me">
                <div className="blob">
                    <img src={BlobSvg} alt="" />
                </div>
                <img src={Viet} alt="" />
            </div>
        </div>
        </header>
    )
}
export default Header