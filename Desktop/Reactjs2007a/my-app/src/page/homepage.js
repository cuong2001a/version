import React from 'react';
import IndexPage from '../component/partrials/index';
class HomePage extends React.Component{
    render(){
        return(
            <React.Fragment>
                {/* cu phap comment trong jsx */}
               <IndexPage>
                   <section>
                       <h2> This is now page</h2>
                   </section>
               </IndexPage>
            </React.Fragment>
        );
    }
}
export default HomePage;