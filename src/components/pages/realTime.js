import React from 'react';

const addDoc = (props) =>(
<div className="thirteen wide column">
  <div className="ui segment">


    <div className="ui grid two columns">
      <div className="column">
        <div className="ui header">
          <i className="icon table"></i>
          <div className="content">
            Peer Review Dashboard
            <div className="sub header">Complete</div>
          </div>
        </div>
      </div>

      <div className="right aligned column">
        <button id="toggle-flags" className="circular ui icon red button">
                <i className="flag icon"></i>
              </button>

        <button id="toggle-reviewed" className="circular ui icon green button">
                <i className="write icon"></i>
              </button>

        <div className="ui search dropdown selection"><select id="group-id">
                <option value="">Groups</option>

                
                <option value="admin">admin</option>
                

              </select><i className="dropdown icon"></i><input className="search" tabIndex="0"/>
          <div className="default text">Groups</div>
          <div className="menu" tabIndex="-1">
            <div className="item" data-value="admin">admin</div>
          </div>
        </div>

        <div className="ui search dropdown selection"><select id="student-id">
                <option value="">Staff ID</option>

                
                <option value="RT8gsgmcePFtHthDw">Bob Smith</option>
                

              </select><i className="dropdown icon"></i><input className="search" tabIndex="0"/>
          <div className="default text">Staff ID</div>
          <div className="menu" tabIndex="-1">
            <div className="item" data-value="RT8gsgmcePFtHthDw">131432</div>
          </div>
        </div>

        <div id="clear-student" className="ui button">Clear</div>
      </div>
    </div>

    <div className="ui clearing divider"></div>


    <div className="ui stackble right aligned fluid two column grid">


      <div className="reactive-table-filter column">
        <div id="reactive-table-15-filter" className="ui fluid icon input">

          <input className="reactive-table-input form-control" type="text" placeholder="Filter"/>

          <i className="inverted circular search link icon"></i>
        </div>
      </div>


    </div>


    <table id="reactive-table-15" className="ui very basic table reactive-table">
      <thead>
        <tr>


          <th className="sortable user.username" fieldid="0">
            Name&nbsp;&nbsp;

            <i className="sort content ascending icon"></i>

          </th>


          <th className="user.status.lastLogin sortable" fieldid="1">Logged In</th>


          <th className="professionalism sortable" fieldid="2">Role</th>


          <th className="listening sortable" fieldid="3">Received</th>


          <th className="seeing sortable" fieldid="4">Assign</th>


          <th className="speaking sortable" fieldid="5">Review</th>


          <th className="thinking sortable" fieldid="6">Email</th>


        </tr>
      </thead>
      <tbody>

        <tr className="">
          <td className="user.username"><a className="pick-user">Phil Collins</a></td>
          <td className="user.status.lastLogin">
            <a className="ui green empty circular label"></a>
          </td>
          <td className="professionalism">
            Reviewer
          </td>
          <td className="listening">
            <a className="ui green empty circular label"></a>
          </td>
          <td className="seeing">
            <a className="ui green empty circular label"></a>
          </td>
          <td className="speaking">
            <a className="ui red empty circular label"></a>
          </td>
          <td className="thinking">
            <a>phil.collins@uts.edu.au</a>
          </td>
        </tr>
        
                <tr className="">
          <td className="user.username"><a className="pick-user">Patty Smith</a></td>
          <td className="user.status.lastLogin">
            <a className="ui green empty circular label"></a>
          </td>
          <td className="professionalism">
            Coordinator
          </td>
          <td className="listening">
            <a className="ui green empty circular label"></a>
          </td>
          <td className="seeing">
            <a className="ui orange empty circular label"></a>
          </td>
          <td className="speaking">
            <a className="ui red empty circular label"></a>
          </td>
          <td className="thinking">
            <a>patty.smith@uts.edu.au</a>
          </td>
        </tr>
        
                <tr className="">
          <td className="user.username"><a className="pick-user">Cliff Richards</a></td>
          <td className="user.status.lastLogin">
            <a className="ui green empty circular label"></a>
          </td>
          <td className="professionalism">
            Admin
          </td>
          <td className="listening">
            <a className="ui lightgrey empty circular label"></a>
          </td>
          <td className="seeing">
            <a className="ui lightgrey empty circular label"></a>
          </td>
          <td className="speaking">
            <a className="ui red empty circular label"></a>
          </td>
          <td className="thinking">
            <a>cliff.richards@uts.edu.au</a>
          </td>
        </tr>

      </tbody>
    </table>


    <div className="ui fluid stackable two column grid reactive-table-navigation">
      <div className="middle aligned left column">

        <div className="ui form rows-per-page">
          <div className="inline field">
            <label>Show</label>
            <input type="text"/>

            <span className="rows-per-page-label">rows per page</span>
          </div>
        </div>

      </div>

      <div className="middle aligned right column">
        <div className="ui form page-number">
          <div className="inline field">


            <label>Page</label>
            <input type="text"/>
            <span>of</span>
            <span className="page-number-count">1</span>


          </div>
        </div>
      </div>

    </div>


  </div>
</div>

);

export default addDoc;