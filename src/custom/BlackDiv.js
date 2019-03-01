import React,{Component} from 'react';
class BlackDiv extends Component{
    styles={
        position:"absolute",
        top:this.props.top,
        right:this.props.right,
        bottom:this.props.bottom,
        left:this.props.left,
        backgroundColor:'black',
        zIndex:"-1",
        opacity:0.5,
    }
    render(){
        return(
            <div style={this.styles}>
                {this.props.children}
            </div>
        )
    }
}
export default BlackDiv;