import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { useState } from 'react';
import Popup from "../../components/Popup";

const Splash = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='splash'>
            <h2 className='title'>Nicholas R. Kolodziej</h2>
            <h4 className='subtitle highlight'>Application Developer</h4>

            <br />

            <div>
                <Link to='/projects'><button>Projects</button></Link>
                <button onClick={() => setShow(true)}>Contact</button>
                <Link to='/cv'><button>CV</button></Link>
            </div>

            <br />
            <div>
                <span className='large-icon' onClick={() => window.open(`https://www.linkedin.com/in/koloquial/`)}><FaLinkedin /></span>
                <span className='large-icon' onClick={() => window.open(`https://github.com/koloquial`)}><FaGithub /></span>
                <span className='large-icon' onClick={() => window.open(`https://koloquial.medium.com`)}><FaMedium /></span>
                <span className='large-icon' onClick={() => window.open(`https://www.youtube.com/@createthroughintention`)}><FaYoutube /></span>
            </div>

            <Popup show={show} setShow={setShow} />
        </div>
    )
}

export default Splash;