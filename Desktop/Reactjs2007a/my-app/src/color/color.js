import React from 'react';

import View from './component/view';
import ButtonColor from './component/buttoncolor';

class Color extends React.Component{
    constructor(props){
        super(props);
        this.state={
            color:'black'
        }
    }
    setColor = (e) => {
        const nameButton = e.target.name;
        this.setState({...this.state , color:nameButton}, () =>{
            console.log('vua thay mau sac');
        })
    }
    // setColorRed = (e) => {

    //     //console.log(e.target.name);
    //     const nameButton = e.target.name;
    //     this.setState({... this.state, color:'red'}, () =>{
    //         console.log('vua thay mau sac');
    //     })
    // }
    // setColorYellow = () => {
    //     this.setState({... this.state, color:'yellow'}, () =>{
    //         console.log('vua thay mau sac');
    //     })
    // }
    // setColorGreen = () => {
    //     this.setState({... this.state, color:'green'}, () =>{
    //         console.log('vua thay mau sac');
    //     })
    // }
  
    render(){
        return (
            <>
            <View color={this.state.color}/>
            <ButtonColor name="red" click={this.setColor}>Red</ButtonColor>
            <ButtonColor name='yellow' click={this.setColor}>yellow</ButtonColor>
            <ButtonColor name='green' click={this.setColor}>green</ButtonColor>
            </>
        )
    }
}
export default Color;