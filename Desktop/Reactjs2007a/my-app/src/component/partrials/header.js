// tao 1 component
import React from 'react';
// import thu vien reactjs
import './common.css';
// tao 1 class component
class HeaderPage extends React.Component{
 render(){

     // render dung de hien thi giao dien
     console.log(this.props.color)
     return(
         <header style={{backgroundColor:this.props.color}} >
             <p className='titileHeading'> This is my page</p>
         </header>
     )
 }
}
export default HeaderPage;