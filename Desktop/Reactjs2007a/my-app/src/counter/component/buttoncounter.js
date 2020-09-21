import React from 'react';
class ButtonCounter extends React.Component{
    changeCounter = () =>{
        alert('ban vua click vao toi');
    }
    render(){
        return(
            <>
            <button onClick={this.props.click}> {this.props.children}</button>
            </>
        );
    }
}
export default ButtonCounter;