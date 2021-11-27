import React, { Component } from "react";
import NewsCard from "./NewsCard";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageItem: 15,
    category: "science",
  };

  static propTypes = {
    country: PropTypes.string,
    pageItem: PropTypes.number,
    category: PropTypes.string,
    apikey: process.env.REACT_APP_NEWS_KEY,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizedfirstLetter(
      this.props.category
    )} Sector - News App`;
  }

  async updateNews(page) {
    this.props.setProgress(15);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${page}&pageSize=${this.props.pageItem}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parseData = await data.json();
    this.props.setProgress(80);

    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  capitalizedfirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageItem}`;
    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
    });
  };

  render() {
    return (
      <div>
        <br />
        <h1
          className="text-center heading text-light"
          style={{ margin: "35px 0px" }}
        >
          News App - Top {this.capitalizedfirstLetter(this.props.category)}{" "}
          Headlines
        </h1>

        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <br />
          <div className="container">
            <div className="row d-flex justify-content-around">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-2" key={element.url}>
                    {console.log(this.state.articles.length)}
                    <NewsCard
                      title={element.title ? element.title : " "}
                      description={
                        element.description ? element.description : ""
                      }
                      urlToImage={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg"
                      }
                      url={element.url}
                      author={
                        element.author ? element.author : "Unknown Author"
                      }
                      ondate={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        <br />
        <br />
      </div>
    );
  }
}
