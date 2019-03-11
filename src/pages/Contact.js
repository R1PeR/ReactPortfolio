import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import BlackDiv from '../custom/BlackDiv'
class Contact extends Component{
    render(){
        return(
            <Container className="container-page">
                <h3>CONTACT ME</h3>
                <hr/>
                <Row>
                    <Col className="column-contact">
                        <BlackDiv top={"10px"} right={"10px"} bottom={"10px"} left={"10px"}/>
                        <i className="fas fa-arrow-left" onClick={() => this.props.handle("previous")}></i>
                    </Col>
                    <Col className="column-contact">
                        <BlackDiv top={"10px"} right={"10px"} bottom={"10px"} left={"10px"}/>
                        <a href="https://www.linkedin.com/in/sebastian-waluś-a58455144"><i className="fab fa-linkedin-in"></i></a>
                    </Col>
                    <Col className="column-contact">
                        <BlackDiv top={"10px"} right={"10px"} bottom={"10px"} left={"10px"}/>
                        <a href="https://github.com/R1PeR"><i className="fab fa-github"></i></a>
                    </Col>
                    <Col className="column-contact">
                        <BlackDiv top={"10px"} right={"10px"} bottom={"10px"} left={"10px"}/>
                        <a href="mailto:sebastian.walus@op.pl"><i className="fas fa-envelope"></i></a>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Contact;