import React, { Component } from 'react';
import { Route, BrowserRouter as Router,Link } from 'react-router-dom'
// npm i react-router
import './root.css'
import './index.html'
import Home from '../home'
import Login from '../login'
import Register from '../register'
import Product from '../product'



// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as rootActions from "../../store/root/actions";
const menu = ['Home', 'Login', 'Register', 'Product'];
export default class root extends Component {

  constructor(props) {

    super(props);
    this.state = {};
  }
  handleClick = () => { }
  render() {
    return <div className="component-root">
    <Router>
      <header>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to={'/'}>WebSiteName</Link>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to={'/home'}>{menu[0]}</Link></li>
              <li><Link to={'/home/product'}>{menu[3]}</Link></li>
              <li><Link to={'/login'}>{menu[1]}</Link></li>
              <li><Link to={'/register'}>{menu[2]}</Link></li>
            </ul>
          </div>
        </nav>
      </header>
      
        <Route path="/home" component={Home}><Home></Home></Route>
        <Route path="/home/product" component={Product}><Product></Product></Route>
        <Route path="/login" component={Login} ><Login></Login></Route>
        <Route path="/register" component={Register} ><Register></Register></Route>
      
      </Router>
      <footer>
        <div className="footer">
          <p>Footer</p>
        </div>
      </footer>
    </div>
  }
}
// export default root;
// export default connect(
//     ({ root }) => ({ ...root }),
//     dispatch => bindActionCreators({ ...rootActions }, dispatch)
//   )( root );




