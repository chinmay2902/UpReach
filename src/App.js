import React from 'react'
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
import { useState } from 'react'

export default function App(){
  const [progress,setProgress]=useState(0)
  const apiKey=process.env.REACT_APP_NEWS_API


    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />

          <Switch>
            <Route exact path="/">
              <News setProgress={setProgress} apiKey={apiKey} key="new" />
            </Route>
            <Route exact path="/general">
              <News setProgress={setProgress} apiKey={apiKey} key="general" country="us" category="general" />
            </Route>
            <Route exact path="/sports">
              <News setProgress={setProgress} apiKey={apiKey} key="sports" country="in" category="sports" />
            </Route>
            <Route exact path="/business">
              <News setProgress={setProgress} apiKey={apiKey} key="business" country="in" category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News setProgress={setProgress} apiKey={apiKey} key="entertainment" country="in" category="entertainment" />
            </Route>
            <Route exact path="/health">
              <News setProgress={setProgress} apiKey={apiKey} key="health" country="in" category="health" />
            </Route>
            <Route exact path="/science">
              <News setProgress={setProgress} apiKey={apiKey} key="science" country="in" category="science" />
            </Route>
            <Route exact path="/technology">
              <News setProgress={setProgress} apiKey={apiKey} key="technology" country="in" category="technology" />
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
