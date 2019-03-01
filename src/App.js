import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap';
//import BackgroundImage from './custom/BackgroundImageDiv'
//import BlackDiv from './custom/BlackDiv'
import Home from './pages/home'
import About from './pages/about'
import Portfolio from './pages/portfolio'
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
  handleToggleClick = (to) =>{
    scroll.scrollToTop();
    console.log(to)
    if(to === "next"){
      this.setState(({
        page: (this.state.page+1)
      }));
    }else if(to === "previous"){
      this.setState(({
        page: (this.state.page-1)
      }));
    }
  }
  returnPageByIndex(){
    switch(this.state.page){
      case 1:
        return(
          <Home handle={this.handleToggleClick}/>
        )
      case 2:
          return(
            <About handle={this.handleToggleClick}/>
          )
      case 3:
        return(
          <Portfolio handle={this.handleToggleClick}/>
        )
      default:
          return(
            <Home/> 
          )
    }
  }

  render() {
    return (
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
    );
  }
}

export default App;
