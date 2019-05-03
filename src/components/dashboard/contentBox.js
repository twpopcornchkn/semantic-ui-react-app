import React from 'react';

const contentBox = (props) =>(
    <div className="contentBox">
        <div className={"contentBoxInner ui raised very padded text segment " + props.classes}>
            <h4 className="ui header">{props.header}</h4>
            <div className="ui divider"></div>
            {props.content || props.children}
        </div>
    </div>
);

export default contentBox;