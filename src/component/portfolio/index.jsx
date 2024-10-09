import "./Portfolio.css"
import { portfolio } from "../../data"
import MagicButton from "../../commons/MagicButton"

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolios">
                {portfolio.map(({image, title, description, github, demo}, index)=>(
                    <div className="portfolio" key={index}>
                        <div className="portfolio__image">
                            <img src={image} alt="" />
                        </div>
                        <div className="portfolio__content">
                            <h4>{title}</h4>
                            <p className="description">
                                {description}
                            </p>
                        </div>
                        <div className="portfolio__bottom">
                            <MagicButton 
                            title={"Github"}
                            onClick={()=>window.open(github,"_blank")}
                            className={"portfolio-btn"}
                            />
                            <MagicButton 
                            title={"Live Demo"}
                            onClick={()=>window.open(demo,"_blank")}
                            className={"portfolio-btn"}
                            />
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
export default Portfolio