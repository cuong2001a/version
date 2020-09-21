import React from 'react';

class Input extends React.Component{
    render() {
        return (
            <input
             className="input" 
             defaultValue={this.props.year}
             onChange= {this.props.change}/>
        )
    }
}
export default Input;