import React, { Component } from 'react';
import './register.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as registerActions from "../../store/register/actions";
export default class register extends Component {
  initForm = {
    name: { value: '', isValid: true, error: '' },
    mobile: { value: '', isValid: true, error: '' },
    email: { value: '', isValid: true, error: '' },
    password: { value: '', isValid: true, error: '' },
    validForm: true
  };

  constructor(props) {
    super(props);
    this.state = {
      formValue: this.initForm
    };
  }


  submitHandler = (event) => {
    event.preventDefault();
    console.log("Submit Called")
    for (var key in this.state.formValue) {
      if (this.state.formValue[key]['value'] === '' && typeof this.state.formValue[key] === 'object') {
        this.initForm[key]['error'] = "Error at -- " + key;
        this.initForm[key]['isValid'] = false;
        this.initForm['validForm'] = false;
      } else if (typeof this.state.formValue[key] === 'object') {
        this.initForm[key]['error'] = "";
        this.initForm[key]['isValid'] = true;
        this.initForm['validForm'] = true;
      }
    }
    this.setState({ formValue: this.initForm });
    if(this.state.formValue.validForm){
      console.log("SUbmmited",this.state.formValue) // Api
    }
  }



  changeHandler = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    if (value === '') {
      this.initForm[key]['value'] = value;
      this.initForm[key]['error'] = "this feild is required";
      this.initForm[key]['isValid'] = false;
      this.initForm['validForm'] = false;
    } else if (event.target.type === 'email' &&
      !(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/.test(value))) {
      this.initForm[key]['value'] = value;
      this.initForm[key]['error'] = "Invalid Email";
      this.initForm[key]['isValid'] = false;
      this.initForm['validForm'] = false;

    } else if (event.target.type === 'password' &&
      !(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/.test(value))) {
      this.initForm[key]['value'] = value;
      this.initForm[key]['error'] = "Invalid Password";
      this.initForm[key]['isValid'] = false;
      this.initForm['validForm'] = false;
    } else if (event.target.classList.contains('mobile') &&
      !(/^[0-9]{10}$/.test(value))) {
      this.initForm[key]['value'] = value;
      this.initForm[key]['error'] = "Invalid Mobile max is 10 digit";
      this.initForm[key]['isValid'] = false;
      this.initForm['validForm'] = false;
    } else {
      this.initForm[key]['value'] = value;
      this.initForm[key]['error'] = "";
      this.initForm[key]['isValid'] = true;
      this.initForm['validForm'] = true;
    }

    this.setState({ formValue: this.initForm })

  }
  render() {
    return <form className="form col-md-4 col-md-offset-4" onSubmit={this.submitHandler.bind(this)}>
      <div className="input-group">
        <label>Name</label>
        <input name="name" onChange={this.changeHandler.bind(this)}
          className="form-control" type="text"></input>
        <div className="alert alert-danger" >{this.state.formValue.name.error}</div>
      </div>
      <div className="input-group">
        <label>Mobile</label>
        <input name="mobile" onChange={this.changeHandler.bind(this)}
          className="form-control mobile" type="text"></input>
        <div className="alert alert-danger" >{this.state.formValue.mobile.error}</div>
      </div>
      <div className="input-group">
        <label>Email</label>
        <input name="email" onChange={this.changeHandler.bind(this)}
          className="form-control" type="email"></input>
        <div className="alert alert-danger" >{this.state.formValue.email.error}</div>
      </div>
      <div className="input-group">
        <label>Password</label>
        <input name="password" onChange={this.changeHandler.bind(this)}
          className="form-control" type="password"></input>
        <div className="alert alert-danger" >{this.state.formValue.password.error}</div>
      </div>
      <div className="input-group">
        <button className="btn btn-danger" type="reset">Reset</button>&nbsp;&nbsp;&nbsp;

        {(() => {
          if (this.state.formValue.validForm === true) {
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
//     ({ register }) => ({ ...register }),
//     dispatch => bindActionCreators({ ...registerActions }, dispatch)
//   )( register );