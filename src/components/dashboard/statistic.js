import React from 'react';

const statistic = (props) =>(
    <div>
        <div className="ui statistics">
            <div className="statistic">
                <div className="value">
                    22
    </div>
                <div className="label">
                    Saves
    </div>
            </div>
            <div className="statistic">
                <div className="text value">
                    Three<br />
                    Thousand
    </div>
                <div className="label">
                    Signups
    </div>
            </div>
        </div>
        <div className="ui statistics">
            <div className="statistic">
                <div className="value">
                    <i className="plane icon"></i> 5
    </div>
                <div className="label">
                    Flights
    </div>
            </div>
            <div className="statistic">
                <div className="value">
                    <img src="https://i.imgur.com/9xP2agG.jpg" className="ui circular inline image" />
                    42
    </div>
                <div className="label">
                    Team Members
    </div>
            </div>

        </div>
    </div>
);

export default statistic;