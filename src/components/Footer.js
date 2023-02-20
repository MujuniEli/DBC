
import twitter from "../images/twitter-icon.png"
import facebook from "../images/facebook-Icon.png"
import insta from "../images/Instagram-Icon.png"
import github from "../images/GitHub-Icon.png"

export default function Footer() {
    return (
            <div className="footer container">
                <a href="https://twitter.com/zona_Jr" target="_blank" rel="noreferrer"><img src={twitter} alt="#" /></a>
                <a href="github.com/MujuniEli"><img src={facebook} alt="#" /></a>
                <a href="https://www.instagram.com/senpai_muju/" target="_blank" rel="noreferrer"><img src={insta} alt="#" /></a>
                <a href="https://github.com/MujuniEli" target="_blank" rel="noreferrer"><img src={github} alt="#" /></a>
            </div>
    )
}