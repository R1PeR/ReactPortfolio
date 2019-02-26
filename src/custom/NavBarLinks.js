import React,{Component} from 'react';
class NavBar extends Component{

    render(){
        return(
            <ul className={this.props.className}>
                {this.props.children}
            </ul>     
        )
    }
}
export default NavBar;