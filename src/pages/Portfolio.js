import React,{Component} from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap'
import BlackDiv from '../custom/BlackDiv'
import portfolio_1 from '../portfolio_1.jpg'
import portfolio_2 from '../portfolio_2.jpg'
import portfolio_3 from '../portfolio_3.jpg'
import portfolio_4 from '../portfolio_4.jpg'
class Portfolio extends Component{
    render(){
        return(
            <Container className="container-page">
                <h3>PORTFOLIO</h3>
                <hr/>
                <Row>
                    <Col xs={12} sm={6} className="column-portfolio">
                        <BlackDiv top={"10px"} right={"10px"} bottom={"10px"} left={"10px"}/>
                        <Image src={portfolio_1} fluid></Image>
                        <Col className="column-item">
                            <p>Rail Cypher - Client</p>
                            <a href="https://github.com/R1PeR/RailCypher_client" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        </Col>
                    </Col>
                    <Col xs={12} sm={6} className="column-portfolio">
                        <BlackDiv top={"10px"} right={"10px"} bottom={"10px"} left={"10px"}/>
                        <Image src={portfolio_2}></Image>
                        <Col className="column-item">
                            <p>Rail Cypher - Server</p>
                            <a href="https://github.com/R1PeR/RailCypher_server" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        </Col>
                    </Col>
                    <Col xs={12} sm={6} className="column-portfolio">
                        <BlackDiv top={"10px"} right={"10px"} bottom={"10px"} left={"10px"}/>
                        <Image src={portfolio_3}></Image>
                        <Col className="column-item">
                            <p>Company homepage</p>
                            <a href="https://github.com/R1PeR/pcc-kosmo" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        </Col>
                    </Col>
                    <Col xs={12} sm={6} className="column-portfolio">
                        <BlackDiv top={"10px"} right={"10px"} bottom={"10px"} left={"10px"}/>
                        <Image src={portfolio_4}></Image>
                        <Col className="column-item">
                            <p>Portfolio page</p>
                            <a href="https://github.com/R1PeR/ReactPortfolio" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        </Col>
                    </Col>
                    <Col className="column-portfolio column-portfolio-arrow">
                        <BlackDiv top={"10px"} right={"10px"} bottom={"10px"} left={"10px"}/>
                        <i className="fas fa-arrow-left" onClick={() => this.props.handle("previous")}></i>
                    </Col>
                    <Col className="column-portfolio column-portfolio-arrow">
                        <BlackDiv top={"10px"} right={"10px"} bottom={"10px"} left={"10px"}/>
                        <i className="fas fa-arrow-right" onClick={() => this.props.handle("next")}></i>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Portfolio;