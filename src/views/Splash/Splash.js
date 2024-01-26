import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";

const Splash = () => {
    return (
        <div className='splash'>
            <h2 className='title'>Nicholas R. Kolodziej</h2>
            <h4 className='subtitle highlight'>Software Engineer</h4>

            <br />

            <div>
                <Link to='/projects'><button>Projects</button></Link>
                <Link to='/contact'><button>Contact</button></Link>
                <Link to='/cv'><button>CV</button></Link>
            </div>

            <br />
            <div>
                <span className='large-icon'><FaLinkedin /></span>
                <span className='large-icon' onClick={() => window.open(`https://github.com/koloquial`, '_blank')}><FaGithub /></span>
                <span className='large-icon'><FaMedium /></span>
                <span className='large-icon'><FaYoutube /></span>
            </div>
        </div>
    )
}

export default Splash;