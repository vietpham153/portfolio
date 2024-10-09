import "./MagicButton.css"

const MagicButton = ({
    title, 
    icon, 
    position,
    isSpinning, 
    type, 
    onClick, 
    className,
}) => {
    return (
        <button className={`magic-button ${isSpinning && "is-spinning"} ${className}`}
        type={type || "button"}
        onClick={onClick}
        >
            <span className="magic-button-background" />
            <span className="magic-button-content">
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </button>
    )
}
export default MagicButton