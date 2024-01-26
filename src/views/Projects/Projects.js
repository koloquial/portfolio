import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaReact } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { SiGooglefonts } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { FaCalendarAlt } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import { MdLocalMovies } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import chatgpt from '../../images/chatgpt.png';
import { GiCardRandom } from "react-icons/gi";
import { FaBook } from "react-icons/fa";

import hoa1 from '../../images/wallethoa/wallethoa1.png'
import hoa2 from '../../images/wallethoa/wallethoa2.png'
import hoa3 from '../../images/wallethoa/wallethoa3.png'
import hoa4 from '../../images/wallethoa/wallethoa4.png'
import hoa5 from '../../images/wallethoa/wallethoa5.png'
import hoa6 from '../../images/wallethoa/wallethoa6.png'
import hoa7 from '../../images/wallethoa/wallethoa7.png'
import hoa8 from '../../images/wallethoa/wallethoa8.png'
import hoa9 from '../../images/wallethoa/wallethoa9.png'

import cine1 from '../../images/cinerate/cinerate1.png'
import cine2 from '../../images/cinerate/cinerate2.png'
import cine3 from '../../images/cinerate/cinerate3.png'
import cine4 from '../../images/cinerate/cinerate4.png'
import cine5 from '../../images/cinerate/cinerate5.png'
import cine6 from '../../images/cinerate/cinerate6.png'

const Projects = () => {

    const getIcon = (icon) => {
        switch(icon){
            case 'React': return <FaReact />
            case 'react-router': return <SiReactrouter />
            case 'react-bootstrap': return <SiBootstrap />
            case 'react-icons': return <FaReact />
            case 'react-datepicker': return <FaCalendarAlt />
            case 'Chart.js': return <FaChartPie />
            case 'Google Fonts': return <SiGooglefonts />
            case 'Google Firebase': return <SiFirebase />
            case 'Node.js': return <FaNodeJs />
            case 'Express.js': return <SiExpress />
            case 'Mongoose': return <SiMongoose />
            case 'MongoDB Atlas': return <SiMongodb />
            case 'Socket.io': return <SiSocketdotio />
            case 'OMDb API': return <MdLocalMovies />
            case 'MD5': return <FaLock />
            case 'Angular 16': return <FaAngular/>
            case 'Stable Diffusion 1.5': return <IoIosColorPalette />
            case 'Chat GPT 3.5': return <img src={chatgpt} className='small-icon' />
            case 'react-card-flip': return <FaReact />
            case 'Free Dictionary API': return <FaBook />
            case 'Random Word API': return <GiCardRandom />
            default: return <FaReact />
        }
    }

    const walletHOA = {
        title: 'Wallet HOA',
        screenshots: [hoa1, hoa2, hoa3, hoa4, hoa5, hoa6, hoa7, hoa8, hoa9],
        technology: [
            'React', 
            'react-router', 
            'react-bootstrap', 
            'react-icons', 
            'react-datepicker', 
            'Chart.js', 
            'Google Fonts', 
            'Google Firebase', 
            'Node.js', 
            'Express.js', 
            'Mongoose', 
            'MongoDB Atlas'
        ],
        description: 'A simple solution to record income and expenses, generate reports, and manage home owners.',
        url: '',
        demo: '',
        github: 'https://github.com/koloquial/wallethoa',
        palette: ['rgb(18, 41, 23)', 'rgb(67, 98, 75)', 'rgb(250, 221, 0)']
    }

    const cineRate = {
        title: 'CineRate',
        screenshots: [cine1, cine2, cine3, cine4, cine5, cine6],
        technology: [
            'React', 
            'react-bootstrap', 
            'react-icons', 
            'Google Fonts', 
            'Node.js', 
            'Express.js', 
            'Socket.io',
            'OMDb API',
            'MD5'
        ],
        description: 'Guess movie ratings with friends.',
        url: '',
        github: 'https://github.com/koloquial/cinerate',
        palette: ['#292929', '#fd5757', '#fa7878']
    }

    const gardenOfMirrors = {
        title: 'Garden of Mirrors',
        screenshots: [hoa1],
        technology: [
            'Angular 16', 
            'Chat GPT 3.5', 
            'Stable Diffusion 1.5', 
            'Google Fonts', 
        ],
        description: 'Garden of Mirrors is an aesthetic-driven non-linear story about introspective statues.',
        url: '',
        github: '',
        palette: ['#000', 'whitesmoke', '#313D2A']
    }

    const parlorGames = {
        title: 'Parlor Games',
        screenshots: [hoa1],
        technology: [
            'React', 
            'react-router', 
            'react-bootstrap', 
            'react-icons', 
            'Google Fonts',
            'react-card-flip', 
            'Free Dictionary API',
            'Random Word API'
        ],
        description: 'Simple games.',
        url: '',
        github: '',
        palette: ['rgb(18, 41, 23)', 'rgb(67, 98, 75)', 'rgb(250, 221, 0)']
    }

    const projects = [walletHOA, cineRate, gardenOfMirrors, parlorGames];

    return (
        <div className='projects'>
            <h1 className='title'>Nicholas R. Kolodziej</h1>
            <p><Link to='/'>Home</Link> / Projects</p>

            <Container>
                {projects.map((project, index) => {
                    return (
                        <Card style={{marginBottom: '10px'}}>
                            <Card.Header>
                                {project.title}

                                {project.palette.map(color => {
                                    return (
                                        <div style={{backgroundColor: color, width: '25px', height: '25px', borderRadius: '50%', border: '1px solid black', display: 'inline-block', float: 'right', marginRight: '2px'}}></div> 
                                    )
                                })}
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Carousel>
                                            {project.screenshots.map((image, index) => {
                                                return (
                                                    <Carousel.Item>
                                                        <img className='image-thumb' src={image} />
                                                    </Carousel.Item>
                                                )
                                            })}
                                        </Carousel>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <h5>Description</h5>
                                        <p>{project.description}</p>
                                    </Col>
                                    <Col>
                                    <h5>View</h5>
                                        <ul>
                                            <li>{project.url ? <a href={project.url}>View</a> : <i>Offline</i>}</li>
                                            <li><a href={project.demo} target='_blank'>Demo</a></li>
                                            <li><a href={project.github} target='_blank'><p>Github</p></a></li>
                                        </ul>
                                    </Col>
                                </Row>
                                <br />
                                <h5>Technology</h5>
                                <Row>
                                    {project.technology.map((tech, index) => {
                                        if(index < 3){
                                            return(
                                                <Col style={{textAlign: 'center'}}>
                                                    {getIcon(tech)} <p>{tech}</p>
                                                </Col>
                                            )
                                        }
                                    })}
                                </Row>
                                <Row>
                                {project.technology.map((tech, index) => {
                                        if(index >= 3 && index < 6){
                                            return(
                                                <Col style={{textAlign: 'center'}}>
                                                    {getIcon(tech)} <p>{tech}</p>
                                                </Col>
                                            )
                                        }
                                    })}
                                </Row>
                                <Row>
                                {project.technology.map((tech, index) => {
                                        if(index >= 6 && index < 9){
                                            return(
                                                <Col style={{textAlign: 'center'}}>
                                                    {getIcon(tech)} <p>{tech}</p>
                                                </Col>
                                            )
                                        }
                                    })}
                                </Row>
                                <Row>
                                {project.technology.map((tech, index) => {
                                        if(index >= 9 && index < 12){
                                            return(
                                                <Col style={{textAlign: 'center'}}>
                                                    {getIcon(tech)} <p>{tech}</p>
                                                </Col>
                                            )
                                        }
                                    })}
                                </Row>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Container>
        </div>
    )
}

export default Projects;