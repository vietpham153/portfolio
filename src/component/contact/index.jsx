import { MdOutlineAlternateEmail } from "react-icons/md"
import "./Contact.css"
import { IoCallOutline, IoLocationOutline } from "react-icons/io5"
import MagicButton from "../../commons/MagicButton"
import { useState, useRef } from "react"
import { FiSend } from "react-icons/fi"
import { toast } from "react-toastify"
import emailjs from "emailjs-com"
const contactOptions = [
    {
        title: "Email Support",
        value:"vietpham111102@gmail.com",
        description: "I can respond in real time",
        icon: <MdOutlineAlternateEmail />,
    },
    {
        title: "Call me Directly",
        value:"0369143238",
        description: "I'm available during working hours",
        icon: <IoCallOutline />,
    },
    {
        title: "Location",
        value:"Binh Thanh District, Ho Chi Minh City",
        description: "It's my location",
        icon: <IoLocationOutline />,
    },
]

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef();
    const trimer = value => value.trim()
    const submitFrom = () =>{
        const {firstname, lastname, email, phoneNumber, message} = form.current;
        if(
            !trimer(firstname.value) || 
            !trimer(lastname.value) || 
            !trimer(email.value) || 
            !trimer(phoneNumber.value) || 
            !trimer(message.value)
        )
        {
            return toast.error("All fields are required", {position: "bottom-center"})
        }
        setIsLoading(true);
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current,process.env.REACT_APP_API_KEY).then((respone)=>{
            setIsLoading(false);
            toast.success("Message sent successfully", {position: "bottom-center"})
            form.current.reset();
        })
        .catch((error)=>{
            setIsLoading(false);
            console.error(error);
        })
    
    }
    return (
        <section id="contact">
            <div className="container">
                <div className="options">
                    {contactOptions.map((option, index)=>(
                        <div className="option" key={index}>
                            <div className="icon">{option.icon}</div>
                            <h3 className="name">{option.title}</h3>
                            <p className="description">{option.description}</p>
                            <p className="primary-variant">{option.value}</p>
                        </div>
                    ))}
                </div>
                <form className="contact-form" ref={form}>
                    <h2>
                        Let's work <span className="primary"> together!</span>
                    </h2>
                    <div className="row">
                        <input 
                        type="text"
                        placeholder="First name"
                        name="firstname"
                        className="control"
                         />
                         <input 
                        type="text"
                        placeholder="Last name"
                        name="lastname"
                        className="control"
                         />
                    </div>
                    <div className="row">
                        <input 
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        className="control"
                         />
                         <input 
                        type="tel"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        className="control"
                         />
                         
                        
                    </div>
                    <textarea 
                         name="message" 
                         placeholder="Message"
                         className="control"
                         >
                         </textarea>
                     <MagicButton 
                         title={isLoading ? "Please wait..." : "Send Now"}
                         onClick={() => submitFrom()}
                         isSpinning={isLoading}
                         icon={<FiSend />}
                         position={"right"}
                         className={"submit-btn"}
                         />
                </form>
            </div>
        </section>
    )
}
export default Contact