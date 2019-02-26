import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
class Dropdown extends Component{
    render(){
        return(
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.text}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    {this.props.children}
                </div>
            </li>
        )
    }
}
export default Dropdown;