import React from 'react';
import Result from './component/result.js';
import ButtonCounter from './component/buttoncounter.js';
import './counter.css';

class Counter extends React.Component {
    constructor (props) {
        super(props);  // de su dung dc tat ca cac props cua class cha truyen xuong
        // tao ra 1 state cho component nào đó 
        this.state = {
            count : 0
        }
        this.viewIncrement = this.viewIncrement.bind(this);
    }
    // dinh nghia ham su li xu kien
    changeIncreasementCounter = () =>{
      // cap nhat la state o day 
        //this.setState({count: this.state.count +1}); // object
        this.setState((state) =>{
            return {... state, count: state.count +1}
        });
    }
    changDecreasementCounter = () =>{
        this.setState((state) =>{
            return {count: state.count -1}
        });
    }
    viewIncrement(){
        this.changeIncreasementCounter();
        this.changeIncreasementCounter();
        this.changeIncreasementCounter();
    }
    render() {
        return(
            <>
            <div className="container">
            <Result result={this.state.count}/>
            <ButtonCounter onclick={this.viewIncrement}>+</ButtonCounter>
            <ButtonCounter onclick={this.changDecreasementCounter}>-</ButtonCounter>
            </div>
            </>
        )
    }
}
export default Counter;