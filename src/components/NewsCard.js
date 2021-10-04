import React, { Component } from "react";

export default class NewsCard extends Component {
  render() {
    let {title, description, urlToImage, url} = this.props
    return (
      <>
        <div className="card" style={{width: "18rem"}}>
          <img src= {urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0,25)}...</h5>
            <p className="card-text">
              {description.slice(0,60)}...
            </p>
            <br/>
            <a href={url} className="btn btn-primary" target="_blank" rel="noreferrer">
              Read More...
            </a>
          </div>
        </div>
      </>
    );
  }
}