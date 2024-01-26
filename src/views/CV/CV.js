import { Link } from 'react-router-dom';
import { Container, Row, Col, Tabs, Tab, Table, Card } from 'react-bootstrap';

const CV = () => {
    const keywords = ['Javascript', 'Node.js', 'SQL', 'MongoDB', 'Express.js', 'HTML', 'CSS', 'SASS', 'JQuery', 'ReactJS', 'Angular', 'Vue', 'Bootstrap', 'Redux', 'Socket.io', 'Adobe XD', 'NextJS', 'Firebase', 'Mongoose', 'Chart.js', 'Material UI', 'JIRA'];

    return (
        <div className='cv'>
            <h1 className='title'>Nicholas R. Kolodziej</h1>
            <p><Link to='/'>Home</Link> / CV</p>
            <Container>
                <button>Download CV (PDF)</button>

                <Tabs defaultActiveKey="profile" justify>
                    <Tab eventKey="profile" title="Profile">
                        <h5>Profile</h5>
                        <p>
                            Nicholas Kolodziej is a Full-Stack Developer with strong background in Javascript, HTML and CSS as well as a variety of common web practices and platforms including React, Angular and Vue. He studied Computer Science at Western Michigan University, Telecommunications at Michigan State  University, and Advanced Software Engineering at Operation Spark.
                        </p>
                        <p>
                            Over the last three years he has completed twenty-five educational courses with Learning & Knowledge using Carbon Design System, Gatsby (React) and LK Components UI Kit (Vanilla JS/HTML/CSS). This experience offered many opportunities to innovate and create custom interactions for prospective learners and create dynamic components/templates for future developers to expedite their process.
                        </p>
                    </Tab>
                    <Tab eventKey='skills' title='Skills'>
                        <h5>Skills</h5>
                        <Row>
                            <Col>
                                <ul>
                                    {keywords.map((word, index) => {
                                        if(index < 5){
                                            return <li>{word}</li>
                                        }
                                        
                                    })}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {keywords.map((word, index) => {
                                        if(index >= 5 && index < 10){
                                            return <li>{word}</li>
                                        }
                                    })}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {keywords.map((word, index) => {
                                        if(index >= 10 && index < 15){
                                            return <li>{word}</li>
                                        }
                                    })}
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    {keywords.map((word, index) => {
                                        if(index >= 20 && index < 25){
                                            return <li>{word}</li>
                                        }
                                    })}
                                </ul>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey='history' title='History'>
                    <h5>History</h5>
                        <p><b>IBM</b></p>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Project</th>
                                    <th>Timeframe</th>
                                    <th>Contribution</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Learning and Knowledge</p>
                                    </td>
                                    <td>
                                        <p>May 2020 - Mar 2021</p>
                                    </td>
                                    <td>
                                        <p>My role as UI developer on these (25) projects was to engineer the course based on wireframes/mockups provided by LED/VD using LK Components UI kit (Javascript, HTML, and CSS) or by Gatsby/Carbon framework and ReactJS.
                                        </p>
                                        <p>Courses generally required design and implementation of custom components, module tracking via L&K LT-ID, communicate and offer solutions to discrepancies within design, and implementing updates from variety of sources.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>New York Department of Labor</p>
                                    </td>
                                    <td>
                                        <p>Mar 2021 - Oct 2023</p>
                                    </td>
                                    <td>
                                        <p>Assisted in NY DOL unemployment claims. Processed regular unemployment and pandemic unemployment. Helped claimants resolve problems with claims.</p>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        <p><b>Operation Spark</b></p>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Project</th>
                                    <th>Timeframe</th>
                                    <th>Contribution</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Operation Spark</td>
                                    <td>Oct 2019 - Mar 2020</td>
                                    <td><p>Help guide students towards solutions using Javascript.</p></td>
                                </tr>
                            </tbody>
                        </Table>

                        <p><b>Capstone</b></p>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Project</th>
                                    <th>Timeframe</th>
                                    <th>Contribution</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mise en Place</td>
                                    <td>Oct 2019 - Oct 2019</td>
                                    <td><p>Developed bar inventory PWA using Angular 8, Firebase, Raspberry Pi w/ Python API, OCR, Postgres, and Ignite UI. I completed the front-end aspects as well as implemented the liquid displacement API using Raspberry Pi to obtain weight from a scale and Python to transmit back to client.</p></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey='assessments' title='Assessments'>
                    <h5>Assessments</h5>

                    <Card>
                        <Card.Header>Global Learning Consultant</Card.Header>
                        <Card.Body>
                            <p>
                                Nick is a talented developer who manages his time and tasks very efficiently. He is communicative and raises issue and blockers in a timely fashion. I appreciate his willingness to 'go back to the drawing board' and seek creative solutions and innovative ways of achieving our business objectives. 
                            </p>
                            <p>
                                Our most recent example of his growth mindset and genuine curiosity to explore creative solutions just arose as I was contemplating how to gather meaningful feedback from the pilot participants of this 15 week CS&P Strategy Academy pilot program that he is assisting in developing. Nick has been focused on iSPOs and knows the program well. I approached Nick about the feasibility of creating a 'feedback' iSPO that we could design to gather user feedback, design options, etc. at the end of the program, and which could be a component in the participants gaining program credit. It is ambitious and it hasn't yet been done. Once I had buy-in from our Learning Strategist, who loved the concept, he said, "run it by Nick first" to understand the art of the possible. Nick said, "hey let me look into it..." and started researching and reaching out to folks in key roles that touch learner surveys and tools, think40 credit, etc. and is helping me determine the viability of this concept. He just jumps right in and still balances innovative investigations with his development workload. 
                            </p>
                        </Card.Body>
                        <Card.Footer>
                            <div style={{float: 'right', margin: '0px', padding: '0px'}}>
                                <i>-W.W., Apr 1, 2023 - Sep 14, 2023</i>
                            </div>
                        </Card.Footer>
                    </Card>
                    
                    <br />
                    <Card>
                        <Card.Header>Global Learning Consultant</Card.Header>
                        <Card.Body>
                            <p>
                                Nick is really great to work with. He's flexible, willing to be a team player, and will contribute ideas to make the project better.
                            </p>
                            <p>
                                An "even better if"...if I must say something here, I'd only suggest setting realistic turn-around times. Nick is a talented colleague, and a lot of people want to work with him, so the demands on his time are plenty. If something can be done by the end of the day, great. If though it may take two days, that's fine too (usually of course :) but just set that expectation.
                            </p>
                            <p>
                                I'd be happy to work with Nick again on future projects!
                            </p>
                        </Card.Body>
                        <Card.Footer>
                            <div style={{float: 'right', margin: '0px', padding: '0px'}}>
                                <i>-K.M Mar 31, 2023 - Sep 1, 2023</i>
                            </div>
                        </Card.Footer>
                    </Card>

                    <br />
                    <Card>
                        <Card.Header>IBM Consulting Global L&K, Senior Learning Strategist</Card.Header>
                        <Card.Body>
                            <p>
                                I see Nick's key skills as a UI developer as technical proficiency, adaptability, creative thinking and problem solving.  I feel that Nick should lean more into these as he seeks to grow his career and improve his project performance.  
                            </p>
                            <p>
                                Nick often brings experiential perspective to his assigned work and is often able to solve problems in our education programs that block more junior UI programmers.  He also is keen to share his knowledge with others in a coaching / mentoring capacity to help bring new UI programmers up to speed and value in the organization, often helping them complete their work.
                            </p>
                        </Card.Body>
                        <Card.Footer>
                            <div style={{float: 'right', margin: '0px', padding: '0px'}}>
                                <i>-K.S., Apr 1, 2023 - Sep 14, 2023</i>
                            </div>
                        </Card.Footer>
                    </Card>

                    <br />
                    <Card>
                        <Card.Header>L&K Consultant</Card.Header>
                        <Card.Body>
                            <p>
                                Nick was instrumental in helping to get this course completed and out the door in a timely matter. He is very accommodating to changes and requests based on the request from the LED (myself), SMEs, and other stakeholders.
                            </p>
                            <p>
                                His flexibility and being a team player were needed for this quick-moving project. In the future, I would love to see more of Nick's creative side, but I also understand that time is required for creativity to happen. One area of growth for Nick - and the entire development team- is to communicate realistic timelines based on competing projects. No matter our intent, there is only so much time in a day. We have to be BOLD and force our leaders to make tough decisions about delivery based on the resources available. I hope his team is able to benefit from and leverage the talent he possesses.
                            </p>
                        </Card.Body>
                        <Card.Footer>
                            <div style={{float: 'right', margin: '0px', padding: '0px'}}>
                                <i>-K.C., Apr 1, 2023 - Sep 14, 2023</i>
                            </div>
                        </Card.Footer>
                    </Card>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    )
}

export default CV;

// Education:
// 2006-2007
// Western Michigan University: Area of focus: computer science
// 2007-2010 Michigan State University: Area of focus: Telecommunications
// 2010-2011 Oakland Community College: area of focus: screenwriting
// Operation Spark, US, 2019
// IBC Fundamentals Javascript
// Functional and Web/Dev Level 3 
// in Advanced Software 
// Engineering Immersive Program 