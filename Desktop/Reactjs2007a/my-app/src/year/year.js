import React from 'react';

import Input from './component/input';
import ButtonYear from './component/buttonyear';
import Result from './component/resuslt';

class Year extends React.Component{
    constructor() {
        super();

       this.state={
           year:null,
           message:null
       }

    }
    changeInput = (e) => {
        let valYear = e.target.value; // lay ra gia tri ma nguoi dung nhap vao o input
        // cap nhap vao state 
        this.setState({...this.state,year: valYear});
    }
    kiemTraNamNhuan =() =>{
        let year = this.state.year;
        if(!isNaN(year) && year.length >0){
            // thuc su la so
            year = parseInt(year);
            // kiem tra nam nhuan
            if(year% 400 ===0){
                this.setState({message: `${year} la nam nhuan duong lich`});
            }else if(year%4 ===0 && year%100 !==0){
                this.setState({message: `${year} la nam nhuan duong lich`});
            }else{
                this.setState({message: `${year} khong la nam nhuan duong lich`});
            }
        } else{
            this.setState({message: `${year} khong phai la so vuia long nhap so`});
        }
    }
    render(){
        console.log(this.state.year);
        return(
            <>
            <Input change={this.changeInput} year={this.state.year}/>
            <ButtonYear click={this.kiemTraNamNhuan}>Kiem tra chan le</ButtonYear>
            <Result result={this.state.message}/>
            </>
        )
    }
}
export default  Year;