import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {withRouter, Link} from 'react-router-dom';

class hMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name });
      this.props.history.push(name);
    }

  render() {
    const { activeItem } = this.state

    return (
  
    <div className="ui attached stackable menu inverted">
    <div className="ui container">
        <Link to="/" className="item">
          <i className="home icon"></i> Home
        </Link>
        <Link to="/aboutUs" className="item">
          <i className="grid layout  icon"></i> About Us
        </Link>
        <Link to="/jobs" className="item">
          <i className="mail  icon"></i> Jobs
        </Link>
        <div className="ui simple dropdown item">
        More
        <i className="dropdown icon"></i>
        <div className="menu">
            <a className="item"><i className="edit icon"></i> Edit Profile</a>
            <a className="item"><i className="globe icon"></i> Choose Language</a>
            <a className="item"><i className="settings icon"></i> Account Settings</a>
        </div>
        </div>
        <div className="right item">
        <div className="ui input"><input type="text" placeholder="Search..."/></div>
        </div>
    </div>
    </div>
    )
  }
}

export default withRouter(hMenu);

