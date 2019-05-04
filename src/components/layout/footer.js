import React from 'react';

const footer = (props) =>(
<div className="ui inverted vertical footer segment">
    <div className="ui center aligned container">
      <div className="ui stackable inverted divided grid">
        <div className="three wide column">
          <h4 className="ui inverted header">Learning & Support</h4>
          <div className="ui inverted link list">
            <a href="#" className="item">Help Center</a>
            <a href="#" className="item">Printer</a>
          </div>
        </div>
        <div className="three wide column">
          <h4 className="ui inverted header">Developers</h4>
          <div className="ui inverted link list">
            <a href="#" className="item">Developers Site</a>
          </div>
        </div>
        <div className="three wide column">
          <h4 className="ui inverted header">Related Products</h4>
          <div className="ui inverted link list">
            <a href="#" className="item">Business View</a>
            <a href="#" className="item">Business Solutions Directory</a>
          </div>
        </div>
        <div className="seven wide column">
          <h4 className="ui inverted header">Company</h4>
          <p>Thanks for using our products and services (“Services”). The Services are provided by another company.</p>
        </div>
      </div>
      <div className="ui inverted section divider"></div>
      <i className="globe icon"></i>
      <div className="ui horizontal inverted small divided link list">
        <a className="item" href="#">Site Map</a>
        <a className="item" href="#">Contact Us</a>
        <a className="item" href="#">Terms and Conditions</a>
        <a className="item" href="#">Privacy Policy</a>
      </div>
    </div>
  </div>

);

export default footer;