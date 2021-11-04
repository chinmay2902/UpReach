import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from  './components/News'
import About from './components/About'
// import NewsDetails from './components/NewsDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    
    return (
      <>
         <Router>
          <Navbar />


            <Switch>
              <Route exact exact path="/">
                <News  key="news"  />
              </Route>
              <Route exact path="/general">
                <News  key="general" country="us" category="general" />
              </Route>
              <Route exact path="/sports">
                <News  key="sports" country="in" category="sports" />
              </Route>
              <Route exact path="/business">
                <News  key="business" country="in" category="business" />
              </Route>
              <Route exact path="/entertainment">
                <News  key="entertainment" country="in" category="entertainment" />
              </Route>
              <Route exact path="/health">
                <News  key="health" country="in" category="health" />
              </Route>
              <Route exact path="/science">
                <News key="science" country="in" category="science" />
              </Route>
              <Route exact path="/technology">
                <News key="technology"  country="in" category="technology" />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/newsDetails">
                {/* <NewsDetails /> */}
              </Route>
            </Switch>
          </Router>
      </>
    )
  }
}
