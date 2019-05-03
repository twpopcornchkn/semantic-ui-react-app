import React from 'react';
import { Progress } from 'semantic-ui-react'

const progress = (props) =>(
<div className="ui inverted segment">
<Progress percent={80} warning inverted>In Progress</Progress>

  <div className="ui active inverted placeholder">
    <div className="image header">
      <div className="line"></div>
      <div className="line"></div>
    </div>
    <div className="paragraph">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  </div>
</div>

);

export default progress;