import React, { Component } from 'react';
import {Route ,Router} from 'react-router-dom'
// npm i react-router
import './root.css'
import './index.html'
import Home from '../home'
import Login from '../login'
import Register from '../register'



// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as rootActions from "../../store/root/actions";
const menu = ['Home','Login','Register','Contact'];
export default class root extends Component {

  constructor(props) {
    
    super(props);
    this.state = {};
  }
  handleClick = () => { }
  render() {
    return <div className="root">
      <header>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">WebSiteName</a>
            </div>

            <Router>
              
               
                <Route path="home" component={Home} />
                <Route path="login" component={Login} />
                <Route path="register" component={Register} />
              
            </Router>
            <ul className="nav navbar-nav">
              <li><a href="#">{menu[0]}</a></li>
              <li><a href="#">{menu[1]}</a></li>
              <li><a href="#">{menu[2]}</a></li>
              <li><a href="#">{menu[3]}</a></li>
            </ul>
          </div>
        </nav>
      </header>
      main data
      <footer>
        <div class="footer">
          <p>Footer</p>
        </div>
      </footer>
      </div>;
  }
}
// export default root;
// export default connect(
//     ({ root }) => ({ ...root }),
//     dispatch => bindActionCreators({ ...rootActions }, dispatch)
//   )( root );
