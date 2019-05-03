import React from 'react';

const retention = (props) =>(
<div className="ui container">
  <br/>
  <div className="ui secondary menu">
    <div className="header item">Brand</div>
    <a className="active item">
      Home
    </a>
    <a className="item">
      Messages
    </a>
    <a className="item">
      Friends
    </a>
    <div className="right menu">
      <div className="item">
        <div className="ui icon input">
          <input type="text" placeholder="Search..."/>
          <i className="search link icon"></i>
        </div>
      </div>
      <a className="ui item">
        Logout
      </a>
    </div>
  </div>
  <div className="ui divider"></div>
  <br/>
  <div className="ui grid">
    <div className="four wide column">
      <div className="ui secondary vertical pointing fluid menu">
        <a className="item">
          Home
        </a>
        <a className="item">
          Messages
        </a>
        <a className="item active">
          Friends
        </a>
      </div>
    </div>
    <div className="twelve wide column">
      <div className="ui form">
        <div className="field">
          <input type="text" name="first-name" placeholder="First name"/>
        </div>
        <div className="field">
          <textarea placeholder="Some example text..."></textarea>
        </div>
      </div>
    </div>
  </div>
</div>

);

export default retention;