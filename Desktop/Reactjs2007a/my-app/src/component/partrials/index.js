import React from 'react';
import HeaderPage from '../partrials/header';
import NavbarPage from '../partrials/nav';
import FooterPage from '../partrials/footer';
class IndexPage extends React.Component{
    render(){
        return(
            <>
            <HeaderPage
            color='black'
            title='header page'/>
            <NavbarPage/>
            {this.props.children}
            <FooterPage/>
            </>
            
            
        )
    }
}
export default IndexPage;