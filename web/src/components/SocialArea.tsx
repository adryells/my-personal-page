import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import styles from "./SocialArea.module.css";

interface SocialAreaProps {
    className?: string;
}

const SocialArea: React.FC<SocialAreaProps> = ({ className }) => {
    return (
        <ul className={`${styles.socialArea} ${className || ''}`}>            <li>
                <a href="https://github.com/adryells" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub size={30} />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/pauloadryell/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin size={30} />
                </a>
            </li>
            <li>
                <a href="mailto:adryellpaulo@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                    <FaEnvelope size={30} />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/adryell.sh/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram size={30} />
                </a>
            </li>
        </ul>
    );
}

export default SocialArea;
