import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import About from './components/About'
import LoadingBar from 'react-top-loading-bar'
// import NewsDetails from './components/NewsDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css"

export default class App extends Component {
  state={
    progress:0
  }
  apiKey=process.env.REACT_APP_NEWS_API

  setProgress=(x)=>{
    this.setState({
      progress:x
    })
  }
  render() {

    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />

          <Switch>
            <Route exact exact path="/">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="news" />
            </Route>
            <Route exact path="/general">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" country="us" category="general" />
            </Route>
            <Route exact path="/sports">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" country="in" category="sports" />
            </Route>
            <Route exact path="/business">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="business" country="in" category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" country="in" category="entertainment" />
            </Route>
            <Route exact path="/health">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="health" country="in" category="health" />
            </Route>
            <Route exact path="/science">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="science" country="in" category="science" />
            </Route>
            <Route exact path="/technology">
              <News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" country="in" category="technology" />
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
