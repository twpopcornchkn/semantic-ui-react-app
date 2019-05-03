import React from 'react';
import {withRouter} from 'react-router-dom';


const breadCrumb = (props) =>{

    const unCamelCase = (str) =>{
        return str
            // insert a space between lower & upper
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            // space before last upper in a sequence followed by lower
            .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
            // uppercase the first character
            .replace(/^./, function(str){ return str.toUpperCase(); })
    }
    return(
<div className="container">      
<div className="ui breadcrumb">
  <a href="/" className="section">Home</a>
  <div className="divider"> / </div>
  <div className="active section">{unCamelCase(props.location.pathname.replace("/", ""))}</div>
</div>
<br/><br/>
</div>  
);

};

export default withRouter(breadCrumb);