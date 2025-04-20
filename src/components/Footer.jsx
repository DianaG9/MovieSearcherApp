import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container"> 
                <p className="footer__text">
                        Designed and developed by Diana Gómez
                    </p>
                    <div className="footer__socials">
                        <a
                            href="https://github.com/DianaG9"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="footer__icon"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/diana-gomez-avendano/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="footer__icon"
                        >
                        <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                            className="footer__icon"
                        >
                        <FontAwesomeIcon icon={faTwitter} />
                        </a>
            </div> 
        </div>
        
        </footer>
    );
};

export default Footer;