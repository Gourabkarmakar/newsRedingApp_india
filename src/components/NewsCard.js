import React, { Component } from "react";

export default class NewsCard extends Component {
  render() {
    let { title, description, urlToImage, url, author, ondate } = this.props;
    
    return (
      <>
        <div className="card">
          <img
            src={urlToImage}
            className="card-img-top"
            style={{ height: "30vh", objectFit: "cover" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 25)}...</h5>
            <p className="card-text">{description.slice(0, 60)}...</p>
            <p className="card-text" style={{height: '10vh'}}><small className="text-muted"> By {author} on {new Date(ondate).toGMTString()} </small></p>
            <br />
            <a
              href={url}
              className="btn btn-outline-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Read More...
            </a>
          </div>
        </div>
      </>
    );
  }
}
