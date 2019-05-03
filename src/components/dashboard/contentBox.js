import React from 'react';

const contentBox = (props) =>(
    <div class="contentBox">
        <div className={"contentBoxInner ui raised very padded text segment " + props.classes}>
            <h4 className="ui header">{props.header}</h4>
            <div class="ui divider"></div>
            {props.content || props.children}
        </div>
    </div>
);

export default contentBox;