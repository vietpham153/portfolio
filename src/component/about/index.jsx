import "./About.css"
import ABOUT from "../../assets/about.png"
import MagicButton from "../../commons/MagicButton"
import {IoIosContact} from "react-icons/io"
import { FaAward } from "react-icons/fa6"
import useScrool from "../../hooks/useScroll"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () =>{
    const {scrollTo} = useScrool();
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__boxes">
                    <div className="box intro">
                        <div className="image__box">
                            <img src={ABOUT} alt="" />
                        </div>
                        <div className="content">
                            <h2>Crafting Digital Experiences That Inspire</h2>
                            <p>Turning visionary concepts into intuitive, high-performing web
                            applications that blend design and functionality seamlessly.</p>
                        </div>
                    </div>
                    <div className="box contact">
                        <h2>Have an idea? Let's connect and make it happen!</h2>
                        <MagicButton title={"Contact me"} 
                        icon={<IoIosContact />}
                        position={"left"}
                        isSpinning={true}
                        onClick={()=>scrollTo("contact")}
                        />
                    </div>
                </div>
                <div className="about__content">
                    <p>
                    As a Fullstack Developer, I specialize in turning innovative ideas
                    into functional, intuitive web applications. With a deep
                    understanding of both front-end aesthetics and back-end efficiency,
                    I craft solutions that not only meet technical requirements but also
                    enhance user satisfaction. My passion lies in blending design with
                    logic, ensuring every project delivers a seamless experience for
                    users while maintaining scalability and performance under the hood.
                    </p>
                    <div className="about__cards">
                        {/* about card start */}
                        <div className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>Nothing</small>
                        </div>
                        {/* {About card end} */}

                        {/* about card start */}
                        <div className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>+</small>
                        </div>
                        {/* {About card end} */}

                        {/* about card start */}
                        <div className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>5</small>
                        </div>
                        {/* {About card end} */}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About