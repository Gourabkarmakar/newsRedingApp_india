import React, { Component } from "react";
import NewsCard from "./NewsCard";

export default class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ec493eeef9df4d2a8a85c75d6c0a2048&page=1";
    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
      articles: parseData.articles,
    });
  }

  render() {
    return (
      <div className="container my-3">
        <br></br>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-2" key={element.url}>
                <NewsCard
                  title={element.title?element.title:""}
                  description={element.description?element.description:""}
                  urlToImage={element.urlToImage?element.urlToImage:"https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg"}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
