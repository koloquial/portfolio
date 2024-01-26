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

import hoa1 from '../../images/wallethoa/wallethoa1.png'
import hoa2 from '../../images/wallethoa/wallethoa2.png'
import hoa3 from '../../images/wallethoa/wallethoa3.png'
import hoa4 from '../../images/wallethoa/wallethoa4.png'
import hoa5 from '../../images/wallethoa/wallethoa5.png'
import hoa6 from '../../images/wallethoa/wallethoa6.png'
import hoa7 from '../../images/wallethoa/wallethoa7.png'
import hoa8 from '../../images/wallethoa/wallethoa8.png'
import hoa9 from '../../images/wallethoa/wallethoa9.png'

const Projects = () => {
    return (
        <div className='projects'>
            <h1 className='title'>Create Through Fascination</h1>
            <p><Link to='/'>Home</Link> / Projects</p>

            <Container>
                <Card>
                    <Card.Header>Wallet HOA</Card.Header>
                    <Card.Body>
                <Row>
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa1} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa2} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa3} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa4} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa5} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa6} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa7} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa8} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa9} />
                            </Carousel.Item>
                        </Carousel>
                        <br />

                        <Row>
                            <Col>
                                <h5>Description</h5>
                                <p> A simple solution to record income and expenses, generate reports, and manage home owners.</p>
                            </Col>
                            <Col>
                                <h5>View</h5>
                                <ul>
                                    <li>Screenshots</li>
                                    <li>Video Demo</li>
                                </ul>
                            </Col>
                        </Row>

                        <h5>Technology</h5>
                        <Row>
                            <Col><FaReact /> React</Col>
                            <Col><SiReactrouter /> react-router</Col>
                            <Col><SiBootstrap /> react-bootstrap</Col>
                        </Row>
                        <Row>
                            <Col><FaReact /> react-icons</Col>
                            <Col><FaCalendarAlt /> react-datepicker</Col>
                            <Col><FaChartPie /> Chart.js</Col>
                        </Row>
                        <Row>
                            <Col><SiGooglefonts /> Google Fonts</Col>
                            <Col><SiFirebase /> Google Firebase</Col>
                            <Col><FaNodeJs /> Node.js</Col>
                        </Row>
                        <Row>
                            <Col><SiExpress /> Express.js</Col>
                            <Col><SiMongoose /> Mongoose</Col>
                            <Col><SiMongodb /> MongoDB Atlas</Col>
                        </Row>
                    </Col>
                </Row>
                </Card.Body>
                </Card>

                <br />

                <Card>
                    <Card.Header>CineRate</Card.Header>
                    <Card.Body>
                <Row>
                    <Col>
                    
                        <Carousel>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa1} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa2} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa3} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa4} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa5} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa6} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa7} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa8} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa9} />
                            </Carousel.Item>
                        </Carousel>
                        <br />

                        <Row>
                            <Col>
                                <h5>Description</h5>
                                <p>Guess movie ratings with friends.</p>
                            </Col>
                            <Col>
                                <h5>View</h5>
                                <ul>
                                    <li>Screenshots</li>
                                    <li>Video Demo</li>
                                </ul>
                            </Col>
                        </Row>

                        <h5>Technology</h5>
                        <Row>
                            <Col><FaReact /> React</Col>
                            <Col><SiBootstrap /> react-bootstrap</Col>
                            <Col><FaReact /> react-icons</Col>
                        </Row>
                        <Row>
                            <Col><SiGooglefonts /> Google Fonts</Col>
                            <Col><SiSocketdotio /> Socket.io</Col>
                            <Col><MdLocalMovies /> OMDb API</Col>
                        </Row>
                        <Row>
                            <Col><FaNodeJs /> Node.js</Col>
                            <Col><SiExpress /> Express.js</Col>
                            <Col><FaLock /> MD5</Col>
                        </Row>
                    </Col>
                </Row>
                </Card.Body>
                </Card>

                <br />

                <Card>
                    <Card.Header>Garden of Mirrors</Card.Header>
                    <Card.Body>
                <Row>
                    <Col>
                    
                        <Carousel>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa1} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa2} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa3} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa4} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa5} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa6} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa7} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa8} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='image-thumb' src={hoa9} />
                            </Carousel.Item>
                        </Carousel>
                        <br />

                        <Row>
                            <Col>
                                <h5>Description</h5>
                                <p>Garden of Mirrors is an aesthetic-driven non-linear story about introspective statues.</p>
                            </Col>
                            <Col>
                                <h5>View</h5>
                                <ul>
                                    <li>Screenshots</li>
                                    <li>Video Demo</li>
                                </ul>
                            </Col>
                        </Row>

                        <h5>Technology</h5>
                        <Row>
                            <Col><FaAngular/> Angular 16</Col>
                            <Col><IoIosColorPalette /> Stable Diffusion 1.5</Col>
                            <Col><img src={chatgpt} className='small-icon' /> ChatGPT 3.5</Col>
                        </Row>
                        <Row>
                            <Col><SiGooglefonts /> Google Fonts</Col>
                            <Col><SiSocketdotio /> Socket.io</Col>
                            <Col><MdLocalMovies /> OMDb API</Col>
                        </Row>
                        <Row>
                            <Col><FaNodeJs /> Node.js</Col>
                            <Col><SiExpress /> Express.js</Col>
                            <Col><FaLock /> MD5</Col>
                        </Row>
                    </Col>
                </Row>
                </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Projects;