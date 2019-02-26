import React,{Component} from 'react';
class BackgroundImageDiv extends Component{
    styles = {
        height: this.props.height+'rem',
        backgroundColor: 'black',
        backgroundImage: "url("+this.props.url+")",
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    render(){
        return(
            <div style={this.styles}>
                {this.props.children}
            </div>
        )
    }
}
export default BackgroundImageDiv;