import React from 'react';

const feed = (props) =>(
<div className="ui feed">
  <div className="event">
    <div className="label">
      <img src="https://i.imgur.com/htjWvzW.jpg"/>
    </div>
    <div className="content">
      <div className="summary">
        <a className="user">
          Elliot Fu
        </a> added you as a friend
        <div className="date">
          1 Hour Ago
        </div>
      </div>
      <div className="meta">
        <a className="like">
          <i className="like icon"></i> 4 Likes
        </a>
      </div>
    </div>
  </div>
  <div className="event">
    <div className="label">
      <img src="https://i.imgur.com/lFwAaMr.jpg"/>
    </div>
    <div className="content">
      <div className="summary">
        <a>Helen Troy</a> added <a>2 new illustrations</a>
        <div className="date">
          4 days ago
        </div>
      </div>
      <div className="extra images">
        <a><img src="https://i.imgur.com/wSqSoWi.png"/></a>
        <a><img src="https://i.imgur.com/wSqSoWi.png"/></a>
      </div>
      <div className="meta">
        <a className="like">
          <i className="like icon"></i> 1 Like
        </a>
      </div>
    </div>
  </div>
  <div className="event">
    <div className="label">
      <img src="https://i.imgur.com/lFwAaMr.jpg"/>
    </div>
    <div className="content">
      <div className="summary">
        <a>Joe Henderson</a> posted on his page
        <div className="date">
          3 days ago
        </div>
      </div>
      <div className="extra text">
        Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.
      </div>
      <div className="meta">
        <a className="like">
          <i className="like icon"></i> 5 Likes
        </a>
      </div>
    </div>
  </div>
</div>

);

export default feed;