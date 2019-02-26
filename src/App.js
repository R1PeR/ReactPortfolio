import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Row,Col, Container} from 'react-bootstrap';
//import BackgroundImage from './custom/BackgroundImageDiv'
import BlackDiv from './custom/BlackDiv'
//import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {animateScroll as scroll} from 'react-scroll';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      page: 1
    }
    console.log(this.state.page);
  }
  handleToggleClick = () => {
    scroll.scrollToTop();
    if(this.state.page === 0){
      this.setState(({
        page: 1
      }));
    }else{
      this.setState(({
        page: 0
      }));
    } 
  }
  returnPageByIndex(){
    if(this.state.page===1){
     return(
        <Container className="container-page-1">
          <h3>SEBASTIAN WALUŚ</h3>
          <hr/>
          <Row>
            <Col xs={6} sm={4} className="column">
              <BlackDiv top={5} left={5} width={90} height={90}/>
              <i className="fab fa-html5"></i>
            </Col>
            <Col xs={6} sm={4} className="column">
              <BlackDiv top={5} left={5} width={90} height={90}/>
              <i className="fab fa-css3-alt"></i>
            </Col>
            <Col xs={6} sm={4} className="column">
              <BlackDiv top={5} left={5} width={90} height={90}/>
              <i className="fab fa-js"></i>
            </Col>
            <Col xs={6} sm={4} className="column">
              <BlackDiv top={5} left={5} width={90} height={90}/>
              <i className="fab fa-react"></i>
            </Col>
            <Col xs={6} sm={4} className="column">
              <BlackDiv top={5} left={5} width={90} height={90}/>
              <i className="fab fa-java"></i>
            </Col>
            <Col xs={6} sm={4} className="column">
              <BlackDiv top={5} left={5} width={90} height={90}/>
              <i className="fas fa-arrow-right" onClick={this.handleToggleClick}></i>
            </Col>
          </Row>
        </Container>
    )}else{
      return(
      <Container className="container-page-2">
        <h3>ABOUT ME</h3>
        <hr/>
        <Row>
          <Col xs={12} className="column-text">
            <BlackDiv top={0} left={5} width={90} height={100}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Col>
        </Row>
        <hr/>
        <h3>CONTACT ME</h3>
        <hr/>
        <Row>
          <Col xs={3} sm={3} className="column-contact">
            <BlackDiv top={5} left={5} width={90} height={90}/>
            <a href="https://www.linkedin.com/in/sebastian-waluś-a58455144"><i className="fab fa-linkedin-in"></i></a>
          </Col>
          <Col xs={3} sm={3} className="column-contact">
            <BlackDiv top={5} left={5} width={90} height={90}/>
            <a href="https://github.com/R1PeR"><i className="fab fa-github"></i></a>
          </Col>
          <Col xs={3} sm={3} className="column-contact">
            <BlackDiv top={5} left={5} width={90} height={90}/>
            <a href="mailto:sebastian.walus@op.pl"><i className="fas fa-envelope"></i></a>
          </Col>
          <Col xs={3} sm={3} className="column-contact">
            <BlackDiv top={5} left={5} width={90} height={90}/>
            <i className="fas fa-arrow-left" onClick={this.handleToggleClick}></i>
          </Col>
        </Row>
      </Container>
    )}; 
  }

  render() {
    return (
      <div className="wrapper">
        <Container className="container-wrapper">
          <TransitionGroup>
            <CSSTransition
              key={this.state.page}
              timeout={1000}
              classNames="fade"
            >
              {this.returnPageByIndex()}
            </CSSTransition>    
          </TransitionGroup>
        </Container>
      </div>
    );
  }
}

export default App;
