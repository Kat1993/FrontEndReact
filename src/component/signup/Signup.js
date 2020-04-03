import React, { Component } from 'react';
import Axios from 'axios';


class Signup extends Component {
  state={
    student:{
      firstName:'',
      lastName:'',
      age:'',
      telephone:'',
      email:'',
      password:''
    }
  }
  hendelSubmit =( event) =>{
    event.preventDefault();
    Axios.post('http://localhost:8080/submitStudentDetails', this.state.student).then(response =>{
   //navigate to thank you page
   this.props.history.push('/thank-you')
    }).catch(error =>{
      //display error massege
    } );
 
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

    render() {
      
        return (
            <div className ="sign-up-form">
            <form onSubmit={this.hendelSubmit} className ="container">
                <h3>Sign Up below</h3>
            <div className="row">
                <div className="col">
                  <input onChange={this.hendelChange} type="text" name="firstName" value={this.state.student.firstName} className="form-control" placeholder="First name"/>
                </div>
                <div class="col">
                  <input onChange={this.hendelChange} type="text" name ="lastName" value={this.state.student.lastName} className="form-control" placeholder="Last name"/>
                </div>
            </div>

            <div className="row">
                <div className="col">
                  <input onChange={this.hendelChange} type="text" name ="telephone" value={this.state.student.telephone} className="form-control" placeholder="Telephone"/>
                </div>
                <div class="col">
                  <input onChange={this.hendelChange} type="text" name="age" value={this.state.student.age} className="form-control" placeholder="Age"/>
                </div>
            </div>

            <div className="row">
                <div className="col">
                  <input  onChange={this.hendelChange} type="text" name ="email" value={this.state.student.email} className="form-control" placeholder="Email"/>
                </div>
                <div class="col">
                  <input  onChange={this.hendelChange} type="password"  name ="password" value={this.state.student.password} className="form-control" placeholder="Password"/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-sm">Sign up</button>
        </form>
        </div>
         

         
        );
    }
}

export default Signup;