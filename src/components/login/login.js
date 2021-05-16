import React, { Component } from 'react';
import './login.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as loginActions from "../../store/login/actions";
export default class login extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
        initForm:{
          email:{value:'',isValid:true,error:''},
          password:{value:'',isValid:true,error:''}
        }
      };
  }

  blurHandler = (event)=>{
    if(event.target.value == ''){
     this.state.initForm.error = "This fiels is rquired"
     this.state.initForm[event.target.name].isValid = false;
    }else{
      this.state.initForm[event.target.name].error = '';
      this.state.initForm[event.target.name].isValid = true;
    }
    
  }

  render() {
    return <form className="form col-md-4 col-md-offset-4">
      <div className="input-group">
        <label>Email</label>
        <input name="email" onBlur={this.blurHandler.bind(this)} defaultValue={this.state.initForm.email.value} className="form-control" type="email"></input>
        {(()=>{
          if(this.state.initForm['email'].isValid==false){
             return <div className="alert alert-danger"> 
              {this.state.initForm['email'].error}
            </div>
          }
        })()

        }
      </div>
      <div className="input-group">
        <label>Password</label>
        <input name="password"  onBlur={this.blurHandler.bind(this)} onChange={()=>{}} className="form-control" type="password"></input>
      </div>
      <div className="input-group">
        <button className="btn btn-danger" type="reset">Reset</button>&nbsp;&nbsp;&nbsp;
        <button className="btn btn-success" type="submit">Submit</button>
      </div>
    </form>
  }
}
// export default connect(
//     ({login}) => ({...login}),
//     dispatch => bindActionCreators({...loginActions}, dispatch)
//   )( login );