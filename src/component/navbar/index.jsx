import "./Navbar.css"
import { navTabs } from "../../data"
import { useState } from "react"

const Navbar = () => {
    const [activeTab, setActiveTab] = useState("#")
    return (
        <nav>
            {navTabs.map(({icon,id}, index) => (
                <a 
                href={"#"+id}
                className={activeTab === "#"+id ? "active" : ""}
                key = {index}
                onClick={() => setActiveTab("#"+id)}
                >
                    {icon}
                </a>
            ))}
        </nav>
    )
}
export default Navbar