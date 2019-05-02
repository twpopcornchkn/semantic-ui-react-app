import React, { Component } from 'react'
import { Grid, Menu, Segment, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import BreadCrumb from '../components/breadCrumb';



class SuiMenu extends Component {
  render() {
    return (

      <Grid className="tabMenu">
        <Grid.Column>
          <div className="ui visible left vertical sidebar menu">
            <a href="/" className="item">
              <i className="gamepad icon"></i>
              Real-Time
            </a>
            <a href="/acquisition" className="item">
              <i className="handshake outline icon"></i>
              Acquisition
            </a>
            <a href="/retention" className="item">
              <i className="retweet icon"></i>
              Retention
            </a>
            <a href="/behaviour" className="item">
              <i className="cogs icon"></i>
              Behaviour
            </a>
          </div>
        </Grid.Column>

        <Grid.Column stretched width={14} className="pusher">
          <Segment>
            <BreadCrumb />
            {this.props.children}
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default withRouter(SuiMenu);



