import "./App.css";
import React, { Component } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_KEY;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar color="#faf00f" progress={this.state.progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="general"
                country="in"
                pageItem={15}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="business"
                country="in"
                pageItem={10}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="entertainment"
                country="in"
                pageItem={10}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="health"
                country="in"
                pageItem={10}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="science"
                country="in"
                pageItem={10}
                category="science"
              />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="sports"
                country="in"
                pageItem={10}
                category="sports"
              />
            }
          />

          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="technology"
                country="in"
                pageItem={10}
                category="technology"
              />
            }
          />
        </Routes>

        <Footer />
      </Router>
    );
  }
}
