import React, { Component } from 'react';
import './login.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as loginActions from "../../store/login/actions";
export default class login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initForm: {
        email: { value: '', isValid: false, error: '' },
        password: { value: '', isValid: false, error: '' },
      },
      validForm: false
    };
  }


  submitHandler = (event) => {
    event.preventDefault();
    // for(var key in this.state.initForm){
    //   if(this.state.initForm[key]['value']==='' && this.state.initForm[key]==='object'){
    //     this.state.initForm
    //   }
  }



  blurHandler = (event) => {
    let key = event.target.name;

    if (event.target.value === '') {
      this.setState({
        initForm: {
          ...this.state.initForm,
          [key]: {
            isValid: false,
            error: "This field required"
          },
          
        }
      })
      this.setState({'validForm': false})

    } else if (event.target.type === 'email' && !(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/.test(event.target.value))) {
      this.setState({
        initForm: {
          ...this.state.initForm,
          [key]: {
            isValid: false,
            error: "No valid email id"
          },
        
        }
      })
      this.setState({'validForm': false})
    } else if (event.target.type === 'password' &&
      !(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/.test(event.target.value))) {
      this.setState({
        initForm: {
          ...this.state.initForm,
          [key]: {
            isValid: false,
            error: "No a Valid Password. it must contain number and special char"
          },
        }
      })
      this.setState({'validForm': false})
    } else {
      this.setState({
        initForm: {
          ...this.state.initForm,
          [key]: {
            isValid: true,
            error: ""
          }
        }
      })
      
    }
    //Has Bug for disable submit button 
    for (key in this.state.initForm) {
      if (typeof (this.state.initForm[key]) === 'object') {
        if (this.state.initForm[key]['isValid'] === true) {
          console.log("in if --- ", key, this.state.validForm)
          this.setState({'validForm': true})
        } 
        if (this.state.initForm[key]['isValid'] === false) {
          console.log("in else --- ", key, this.state.validForm)
          this.setState({'validForm': false})
        }

      }
    }
  }

  render() {
    return <form className="form col-md-4 col-md-offset-4">
      <div className="input-group">
        <label>Email</label>
        <input name="email" onBlur={this.blurHandler.bind(this)} onChange={() => { }}
          className="form-control" type="email"></input>
        <div className="alert alert-danger" >{this.state.initForm.email.error}</div>
      </div>
      <div className="input-group">
        <label>Password</label>
        <input name="password" onBlur={this.blurHandler.bind(this)} onChange={() => { }}
          className="form-control" type="password"></input>
        <div className="alert alert-danger" >{this.state.initForm.password.error}</div>
      </div>
      <div className="input-group">
        <button className="btn btn-danger" type="reset">Reset</button>&nbsp;&nbsp;&nbsp;

        {(() => {
          if (this.state.validForm === true) {
            return <button className="btn btn-success" type="submit" >Submit</button>
          } else {
            return <button className="btn btn-success" type="submit" disabled >Submit</button>
          }
        })()
        }


      </div>
    </form>
  }
}
// export default connect(
//     ({login}) => ({...login}),
//     dispatch => bindActionCreators({...loginActions}, dispatch)
//   )( login );