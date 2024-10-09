import "./Testimonials.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { testimonials } from "../../data"
import "swiper/css"
import { Autoplay } from "swiper/modules"
import { FaStar } from "react-icons/fa6"

const Testimonial = () => {
    return (
        <section id="testimonials">
            <h5>Testimonials</h5>
            <h2>What My Clients Says</h2>
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={true}
            loop={true}
            speed={5000}
            centeredSlides={true}
            modules={[Autoplay]}
            breakpoints={{
                600:{slidesPerView: "auto"},
            }}
            className="testimonials"
            >
                {testimonials.map((list, index)=>(
                    <SwiperSlide className="testimonial" key={index}>
                        <div className="user">
                            <div className="circle-container">
                                <div className="outer-circle">
                                    <div className="middle-circle">
                                        <div className="inner-circle">
                                            <img src={list.profile} className="icon" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="details">
                                <h2>{list.name}</h2>
                                <p>{list.position}</p>
                                <p className="primary-variant">{list.company}</p>
                            </div>
                        </div>
                        <div className="content">
                            <p className="description">{list.content}</p>
                        </div>
                        <div className="stars__container">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
export default Testimonial