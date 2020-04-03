import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';



class Header extends Component {
   state= {
     student:{
       email:'',
       password:''
     }
   }
   hendelChange= (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    const tempStudent = {...this.state.student}
    tempStudent[name] = value;
    this.setState({
      student:tempStudent

    }
    );
  }






  hendelSubmit =( event) =>{
    event.preventDefault();


   //navigate to thank you page
   localStorage.setItem("loggedInUser", 'john.doe@email.com');
   this.props.history.push("/home");

   Axios.post('http://localhost:8080/login', this.state.student).then(response =>{
   const studentFromBACK = response.data;
   localStorage.setItem("loggedInUser", studentFromBACK.email);
   this.props.history.push("/home")
    }).catch(error =>{
      //display error massege
    } );

  }
   signOut =() => {
     localStorage.removeItem("loggedInUser");
     this.props.history.push("/");
   }
    render() {
let links =(
                  <li className="nav-item">
                    <Link className="nav-link" to ="/sign-up">Sign up</Link>
                  </li>
);

      let SignInSignOut=(
        <form onSubmit={this.hendelSubmit} className="form-inline mt-2 mt-md-0">
        <input value={this.state.student.email}  onChange={this.hendelChange} name ="email"className="form-control mr-sm-2" type="text" placeholder="Email" aria-label="Search"/>
        <input value ={this.state.student.password}  onChange={this.hendelChange}  name ="password" className="form-control mr-sm-2" type="text" placeholder="Password" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign in</button>
      </form>
      );
      if(localStorage.getItem("loggedInUser")){
        links=(
          <li className="nav-item">
                    <Link className="nav-link" to ="/settings">Settings</Link>
                  </li>
        );
   SignInSignOut =  <button onClick={this.signOut} className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign Out</button>

      }
        return (
            <header className="heder-morgin">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <Link className="navbar-brand" to ="/home">Student Portal</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/about-us">About us <span className="sr-only">(current)</span></Link>
                  </li>
                  {links}
                  
                </ul>
              {SignInSignOut}
              </div>
            </nav>
          </header>
          
        );
    }

  }

export default Header;