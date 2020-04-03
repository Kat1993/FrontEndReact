import React, { Component } from 'react';

import Header from '../header/Header';
import Signup from '../signup/Signup';
import Footer from '../footer/Footer';
import AboutUs from '../aboutUs/AboutUs';
import  {Route, withRouter}  from 'react-router-dom';
import ThankYou from '../thankyou/ThankYou';
import HomePage from '../homepage/HomePage';








class Layout extends Component {
    render() {
        let routes =(
             <React.Fragment>
            <Route exact path="/" component={Signup}/>
            <Route  path="/sign-up" component={Signup}/>
            </React.Fragment>
        );
        if (localStorage.getItem("loggedInUser")){
            routes =(
                <React.Fragment>
                   < Route exact path="/" component={HomePage}/>
                    <Route  path="/home" component={HomePage}/>
                </React.Fragment>
            )
        }

        return (
            
            <div>
               < Header { ...this.props}/>
                {routes}
                
                <Route  path="/about-us" component={AboutUs}/>
                <Route path ="/thank-you" component={ThankYou}/>
                
               <Footer/> 
            </div>
        );
    }
}

export default withRouter(Layout);