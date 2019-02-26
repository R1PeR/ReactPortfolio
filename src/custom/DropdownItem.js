import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
class DropdownItem extends Component{
    render(){
        return(
            <NavLink className="dropdown-item text-center text-dark" to={this.props.to} activeStyle={{color:'orange'}}>{this.props.text}</NavLink>
        )
    }
}
export default DropdownItem;