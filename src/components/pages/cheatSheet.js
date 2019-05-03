import React from 'react';
import { Button } from 'semantic-ui-react'

const cheatSheet = (props) =>(
<div className="ui container">
        <h1 className="ui large header">Header</h1>
        <Button content='Click Here' />
        <button className="ui button">Click There</button>

      <button className="ui button">Read More</button>
      <button className="ui primary button">Read More</button>
      <button className="ui secondary button">Read More</button>
      <button className="ui positive button">Read More</button>
      <button className="ui negative button">Read More</button>
      <br/><br/>
      <button className="ui disabled red button">Read More</button>
			<button className="ui loading blue button">Read More</button>
			<button className="ui green button">Read More</button>
			<button className="ui massive purple button">Read More</button>
			<button className="ui huge yellow button">Read More</button>
			<button className="ui big brown button">Read More</button>
			<button className="ui large orange button">Read More</button>
			<button className="ui medium olive button">Read More</button>
			<button className="ui small teal button">Read More</button>
			<button className="ui tiny violet button">Read More</button>
			<button className="ui mini grey button">Read More</button>
      <br/><br/>
      <button className="ui basic fluid button">Read More</button>
      <button className="ui basic red button">Read More</button>
      <button className="ui basic green button">Read More</button>
      <button className="ui basic blue button">Read More</button>
      <button className="ui basic teal button">Read More</button>
      <button className="ui basic brown button">Read More</button>

      {/* ICONS */}
      <button className="ui icon button">
        <i className="pause icon"></i>
        Pause
      </button>
      <button className="ui labeled icon button">
        <i className="cloud icon"></i>
      </button>
      <button className="ui right labeled icon button">
        <i className="right arrow icon"></i>
        Next
      </button>
    
      {/* <!-- LABELS --> */}
      <div className="ui label">
        <i className="mail icon"></i> 23
      </div>

      <div className="inline field">
        <input type="text" />
        <div className="ui left pointing label">
            That username is taken
        </div>
      </div>

      {/* <!-- BREADCRUMB --> */}
      <div className="ui breadcrumb">
			  <a className="section">Home</a>
			  <div className="divider"> / </div>
			  <a className="section">Store</a>
			  <div className="divider"> / </div>
			  <div className="active section">T-Shirt</div>
			</div>

      {/* <!-- LISTS --> */}
      <div className="ui list">
			  <div className="item">Apples</div>
			  <div className="item">Pears</div>
			  <div className="item">Oranges</div>
			</div>

      <div className="ui link list">
			  <div className="active item">Home</div>
			  <a className="item">About</a>
			  <a className="item">Jobs</a>
			  <a className="item">Team</a>
			</div>

      <div className="ui celled horizontal list">
			  <div className="item">About Us</div>
			  <div className="item">Contact</div>
			  <div className="item">Support</div>
			</div>

      <hr/>

      <form className="ui form">
        <div className="field">
          <label>First Name</label>
          <input type="text" name="first-name" placeholder="First Name"/>
        </div>
        <div className="field">
          <label>Last Name</label>
          <input type="text" name="last-name" placeholder="Last Name"/>
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox"/>
            <label>I agree to the Terms and Conditions</label>
          </div>
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>

      <div className="ui form">
			  <div className="inline fields">
			    <label>Phone Number</label>
			    <div className="field">
			      <input type="text" placeholder="(xxx)"/>
			    </div>
			    <div className="field">
			      <input type="text" placeholder="xxx"/>
			    </div>
			    <div className="field">
			      <input type="text" placeholder="xxxx"/>
			    </div>
			  </div>
			</div>

      <hr/>

      {/* <!-- MESSAGES --> */}
      <div className="ui message">
        <div className="header">
          Some Message
        </div>
        <p>This is a message</p>
      </div>

      <div className="ui success message">
        <div className="header">
          Some Message
        </div>
        <p>This is a message</p>
      </div>

      <div className="ui error message">
        <div className="header">
          Some Message
        </div>
        <p>This is a message</p>
      </div>

      <div className="ui purple message">
        <div className="header">
          Some Message
        </div>
        <p>This is a message</p>
      </div>

      <hr/>

      {/* <!-- TABLES & PAGINATION --> */}
      <table className="ui  table">
			  <thead>
			    <tr>
				    <th>Header</th>
				    <th>Header</th>
				    <th>Header</th>
			  	</tr>
			  </thead>
			  <tbody>
			    <tr>
			      <td>
              <div className="ui ribbon label">First</div>
            </td>
			      <td>Cell</td>
			      <td>Cell</td>
			    </tr>
			    <tr className="positive">
			      <td>Cell</td>
			      <td>Cell</td>
			      <td>Cell</td>
			    </tr>
			    <tr className="error">
			      <td>Cell</td>
			      <td>Cell</td>
			      <td>Cell</td>
			    </tr>
			  </tbody>
			  <tfoot>
			    <tr><th colSpan="3">
			      <div className="ui right floated pagination menu">
			        <a className="icon item">
			          <i className="left chevron icon"></i>
			        </a>
			        <a className="item">1</a>
			        <a className="item">2</a>
			        <a className="item">3</a>
			        <a className="item">4</a>
			        <a className="icon item">
			          <i className="right chevron icon"></i>
			        </a>
			      </div>
			    </th>
			  </tr></tfoot>
			</table>

      <hr/>

      {/* <!-- SEGMENTS --> */}
      <div className="ui segment">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>

      <div className="ui raised segment">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>

      <div className="ui stacked segment">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>

      <div className="ui piled segment">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>

      <div className="ui segments">
        <div className="ui segment">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className="ui red segment">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className="ui green inverted segment">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className="ui segment">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>

      <hr/>

      {/* <!-- STEPS --> */}
      <div className="ui steps">
        <div className="step">
          <i className="truck icon"></i>
          <div className="content">
            <div className="title">Shipping</div>
            <div className="description">Choose your shipping options</div>
          </div>
        </div>
        <div className="active step">
          <i className="payment icon"></i>
          <div className="content">
            <div className="title">Billing</div>
            <div className="description">Enter billing information</div>
          </div>
        </div>
        <div className="disabled step">
          <i className="info icon"></i>
          <div className="content">
            <div className="title">Confirm Order</div>
          </div>
        </div>
      </div>

      <hr/>

      {/* <!-- CONTENT BLOCK --> */}
      <div className="ui card">
        <div className="content">
          <div className="header">
            Content Block
          </div>
          <div className="meta">
            Meta Info
          </div>
          </div>
          <div className="content">
            <p>This is my content</p>
          </div>
          <div className="content extra">
            <button className="ui button" type="button" name="button">Read More</button>
          </div>
      </div>

      <hr/>

      {/* <!-- ITEM --> */}
      <div className="ui items">
        <div className="item">
          <div className="image">
            <img src="https://semantic-ui.com/images/wireframe/image.png" alt=".."/>
          </div>
          <div className="content">
            <a className="header">Header</a>
            <div className="meta">
              <span>Description</span>
            </div>
            <div className="description">
              <p></p>
            </div>
            <div className="extra">
              Additional Details
            </div>
          </div>
        </div>
        <div className="item">
          <div className="image">
            <img src="https://semantic-ui.com/images/wireframe/image.png" alt=".."/>
          </div>
          <div className="content">
            <a className="header" href="#">Header</a>
            <div className="meta">
              <span>Description</span>
            </div>
            <div className="description">
              <p></p>
            </div>
            <div className="extra">
              Additional Details
            </div>
          </div>
        </div>
      </div>

      <hr/>

      {/* <!-- STATISTIC --> */}
      <div className="ui statistic">
        <div className="value">
          5,550
        </div>
        <div className="label">
          Downloads
        </div>
      </div>

      <hr/>

      {/* <!-- GRID SYSTEM --> */}
      <div className="ui grid">
        <div className="row">
          <div className="column">
            <button className="ui huge button"></button>
          </div>
          <div className="column">
            <button className="ui huge button"></button>
          </div>
          <div className="column">
            <button className="ui huge button"></button>
          </div>
          <div className="column">
            <button className="ui huge button"></button>
          </div>
        </div>
        <div className="column">
          <button className="ui huge button"></button>
        </div>
        <div className="column">
          <button className="ui huge button"></button>
        </div>
        <div className="column">
          <button className="ui huge button"></button>
        </div>
        <div className="column">
          <button className="ui huge button"></button>
        </div>
        <div className="column">
          <button className="ui huge button"></button>
        </div>
        <div className="column">
          <button className="ui huge button"></button>
        </div>
        <div className="column">
          <button className="ui huge button"></button>
        </div>
        <div className="column">
          <button className="ui huge button"></button>
        </div>
        <div className="column">
          <button className="ui huge button"></button>
        </div>
        <div className="column">
          <button className="ui huge button"></button>
        </div>
        <div className="column">
          <button className="ui huge button"></button>
        </div>
        <div className="column">
          <button className="ui huge button"></button>
        </div>
      </div>

      <div className="ui grid">
        <div className="column four wide">
          <button className="ui huge button fluid"></button>
        </div>
        <div className="column four wide">
          <button className="ui huge button fluid"></button>
        </div>
        <div className="column four wide">
          <button className="ui huge button fluid"></button>
        </div>
        <div className="column four wide">
          <button className="ui huge button fluid"></button>
        </div>
      </div>

      <div className="ui grid">
        <div className="column four wide">
          <button className="ui huge button fluid"></button>
        </div>
        <div className="column eight wide">
          <button className="ui huge button fluid"></button>
        </div>
        <div className="column four wide">
          <button className="ui huge button fluid"></button>
        </div>
      </div>

      <div className="ui grid">
        <div className="column four row">
          <div className="left floated column">
            <button className="ui huge button fluid"></button>
          </div>
          <div className="right floated column">
            <button className="ui huge button fluid"></button>
          </div>
        </div>
      </div>

    </div>
);

export default cheatSheet;