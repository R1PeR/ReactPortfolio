import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import BlackDiv from '../custom/BlackDiv'
class About extends Component{
    render(){
        return(
            <Container className="container-page">
                <h3>ABOUT ME</h3>
                <hr/>
                <Row>
                <Col xs={12} className="column-text">
                    <BlackDiv top={"10px"} right={"10px"} bottom={"10px"} left={"10px"}/>
                    <p>I'm a developer, now focusing on Front End, but I'm also interested in Back End and desktop software engineering. Main languages that I know are: JavaScript with React.js Framework, also for the Back End I am familiar with Java, epecially Spring framework.</p>
                </Col>
                </Row>
                <Row>
                    <Col className="column-about">
                        <BlackDiv top={"10px"} right={"10px"} bottom={"10px"} left={"10px"}/>
                        <i className="fas fa-arrow-left" onClick={() => this.props.handle("previous")}></i>
                    </Col>
                    <Col className="column-about">
                        <BlackDiv top={"10px"} right={"10px"} bottom={"10px"} left={"10px"}/>
                        <i className="fas fa-arrow-right" onClick={() => this.props.handle("next")}></i>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default About;