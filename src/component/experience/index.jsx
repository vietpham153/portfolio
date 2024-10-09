import "./Experience.css"
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
    return(
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                {/* Frontend Start */}
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        {/* details start */}
                        <div className="experience_details">
                            <BsPatchCheckFill className="experience__details__icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        {/* details end */}

                         {/* details start */}
                         <div className="experience_details">
                            <BsPatchCheckFill className="experience__details__icon"/>
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </div>
                        {/* details end */}

                         {/* details start */}
                         <div className="experience_details">
                            <BsPatchCheckFill className="experience__details__icon"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </div>
                        {/* details end */}

                         {/* details start */}
                         <div className="experience_details">
                            <BsPatchCheckFill className="experience__details__icon"/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </div>
                        {/* details end */}

                         {/* details start */}
                         <div className="experience_details">
                            <BsPatchCheckFill className="experience__details__icon"/>
                            <div>
                                <h4>Tailwind</h4>
                                <small className="text-light">Low Intermediate</small>
                            </div>
                        </div>
                        {/* details end */}

                         {/* details start */}
                         <div className="experience_details">
                            <BsPatchCheckFill className="experience__details__icon"/>
                            <div>
                                <h4>ReactJS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </div>
                        {/* details end */}

                    </div>
                </div>
                {/* Frontend end */}


                {/* Backend start */}

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        {/* details start */}
                        <div className="experience_details">
                            <BsPatchCheckFill className="experience__details__icon"/>
                            <div>
                                <h4>NodeJS</h4>
                                <small className="text-light">Low Intermediate</small>
                            </div>
                        </div>
                        {/* details end */}

                        {/* details start */}
                        <div className="experience_details">
                            <BsPatchCheckFill className="experience__details__icon"/>
                            <div>
                                <h4>PostgraSQL</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </div>
                        {/* details end */}

                        {/* details start */}
                        <div className="experience_details">
                            <BsPatchCheckFill className="experience__details__icon"/>
                            <div>
                                <h4>PHP</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </div>
                        {/* details end */}

                        {/* details start */}
                        <div className="experience_details">
                            <BsPatchCheckFill className="experience__details__icon"/>
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </div>
                        {/* details end */}

                        {/* details start */}
                        <div className="experience_details">
                            <BsPatchCheckFill className="experience__details__icon"/>
                            <div>
                                <h4>Ruby on Rails</h4>
                                <small className="text-light">Low Intermediate</small>
                            </div>
                        </div>
                        {/* details end */}
                    </div>
                </div>

                {/* Backend end */}
            </div>
        </section>
    )
}
export default Experience