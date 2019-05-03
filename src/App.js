import React from 'react';
import {Switch, Route} from "react-router-dom";

import TabMenu from './containers/TabMenu';
import SideBar from './containers/sideBar';
import Home from './containers/Home';

import HeaderMenu from './components/layout/headerMenu';
import AboutUs from './components/pages/aboutUs';
import Jobs from './components/pages/jobs';
import CheatSheet from './components/pages/cheatSheet';
import Footer from './components/layout/footer';
import RealTime from './components/pages/realTime';
import Acquisition from './components/pages/acquisition';
import Behaviour from './components/pages/behaviour';
import Retention from './components/pages/retention';

import './App.css';


function App() {
  return (
    <div className="main">
      <HeaderMenu/>
      <div className="contentHolder">
        <TabMenu>
          <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/cheatSheet" component={CheatSheet}/>
                  <Route exact path="/aboutUs" component={AboutUs}/>          
                  <Route exact path="/jobs" component={Jobs}/>          
                  <Route exact path="/retention" component={Retention}/>          
                  <Route exact path="/realTime" component={RealTime}/>          
                  <Route exact path="/acquisition" component={Acquisition}/>          
                  <Route exact path="/behaviour" component={Behaviour}/>          
          </Switch>
        </TabMenu>
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
