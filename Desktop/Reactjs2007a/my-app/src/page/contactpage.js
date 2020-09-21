import React from 'react';
import IndexPage from '../component/partrials/index';
class ContactPage extends React.Component{
    render(){
        return(
            <React.Fragment>
                {/* cu phap comment trong jsx */}
               <IndexPage>
                   <section>
                       <h2> This is contact page</h2>
                   </section>
               </IndexPage>
            </React.Fragment>
        );
    }
}
export default ContactPage;