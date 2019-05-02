import React from 'react';
import {Switch, Route} from "react-router-dom";

import TabMenu from './containers/TabMenu';
import SideBar from './containers/sideBar';
import Home from './containers/Home';

import HeaderMenu from './components/headerMenu';
import AboutUs from './components/aboutUs';
import Jobs from './components/jobs';
import CheatSheet from './components/cheatSheet';
import Footer from './components/footer';
import './App.css';


function App() {
  return (
    <div className="main">
      <HeaderMenu/>
      <div class="content">
        <TabMenu>
          <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/cheatSheet" component={CheatSheet}/>
                  <Route exact path="/aboutUs" component={AboutUs}/>          
                  <Route exact path="/jobs" component={Jobs}/>          
          </Switch>
        </TabMenu>
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
