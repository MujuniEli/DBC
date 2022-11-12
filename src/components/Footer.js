
import twitter from "../images/twitter-icon.png"
import facebook from "../images/facebook-Icon.png"
import insta from "../images/Instagram-Icon.png"
import github from "../images/GitHub-Icon.png"

export default function Footer() {
    return (
            <div className="footer container">
                <img src={twitter} alt="#" />
                <img src={facebook} alt="#" />
                <img src={insta} alt="#" />
                <img src={github} alt="#" />
            </div>
    )
}