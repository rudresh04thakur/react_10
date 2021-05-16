import React, { Component } from 'react';
import './product.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as productActions from "../../store/product/actions";
export default class product extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  // }
  render() {
    return <div className="component-product">
      {
        (() => {
          console.log(window.location.pathname)
          if (window.location.pathname != "/home") {
            return <div> Hello! component product</div>
          }else{
            return <div> Hello! component Product GB</div>
          };
        })()
      }
    </div>;
  }
}
// export default connect(
//     ({ product }) => ({ ...product }),
//     dispatch => bindActionCreators({ ...productActions }, dispatch)
//   )( product );