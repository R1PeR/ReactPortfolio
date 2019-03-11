import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import BlackDiv from '../custom/BlackDiv'
class Home extends Component{
    render(){
        return(
            <Container className="container-page">
                <h3>SEBASTIAN WALUŚ</h3>
                <hr/>
                <Row>
                    <Col xs={6} sm={4} className="column">
                    <BlackDiv top={"10px"} right={"10px"} bottom={"10px"} left={"10px"}/>
                    <i className="fab fa-html5"></i>  
                    </Col>
                    <Col xs={6} sm={4} className="column">
                    <BlackDiv top={"10px"} right={"10px"} bottom={"10px"} left={"10px"}/>
                    <i className="fab fa-css3-alt"></i>
                    </Col>
                    <Col xs={6} sm={4} className="column">
                    <BlackDiv top={"10px"} right={"10px"} bottom={"10px"} left={"10px"}/>
                    <i className="fab fa-js"></i>
                    </Col>
                    <Col xs={6} sm={4} className="column">
                    <BlackDiv top={"10px"} right={"10px"} bottom={"10px"} left={"10px"}/>
                    <i className="fab fa-react"></i>
                    </Col>
                    <Col xs={6} sm={4} className="column">
                    <BlackDiv top={"10px"} right={"10px"} bottom={"10px"} left={"10px"}/>
                    <i className="fab fa-java"></i>
                    </Col>
                    <Col xs={6} sm={4} className="column">
                    <BlackDiv top={"10px"} right={"10px"} bottom={"10px"} left={"10px"}/>
                    <i className="fas fa-arrow-right" onClick={() => this.props.handle("next")}></i>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Home;