import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [], // Blogs dependent on article
      loading: false,
      page: 1,
    };
  }

  static defaultProps = {
    category: "general",
    pageSize: "6",
  };

  static propTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.string,
  };

  async componentDidMount() {
    this.callAPi();
    console.log(this.props.category);
  }

  componentDidUpdate(pp) {
    if (pp.category !== this.props.category) {
      this.callAPi();
    console.log(pp);
    }
  }
  callAPi = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=fb9e37a6f83b49da8f321ee5bf61c962&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    }); //, () => console.log("State Updated")
  };

  nextPage = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=fb9e37a6f83b49da8f321ee5bf61c962&pageSize=${
      this.props.pageSize
    }&page=${this.state.page + 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loading: false,
    });
    console.log("Next", this.state.articles);
    console.log("Next Parsed", parsedData.articles);
    console.log("Next Data", data);
    console.log("Next Url", url);
  };

  prePage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apiKey=fb9e37a6f83b49da8f321ee5bf61c962&pageSize=${
      this.props.pageSize
    }&page=${this.state.page - 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
    console.log("Previous", this.state.articles);
    console.log("Previous Parsed", parsedData.articles);
  };

  render() {
    return (
      <div>
        <h2 className="text-center ">Latest News</h2>
        {this.state.loading && <Spinner />}
        <div className="d-flex flex-wrap justify-content-around">
          {!this.state.loading &&
            this.state.articles &&
            this.state.articles.map((element) => {
              return (
                <div key={element.url}>
                  <NewsItem
                    key={element.title}
                    title={element.title}
                    description={element.description}
                    newsUrl={element.url}
                    imageUrl={element.urlToImage}
                  />
                </div>
              );
            })}
        </div>

        
        {!this.state.loading && (
          <div className="container d-flex justify-content-between my-3">
            {this.state.page !== 1 && (
              <button
                className="btn btn-dark"
                onClick={this.prePage}
                type="button"
              >
                Previous
              </button>
            )}
            {this.state.page === 1 && <div></div>}
            {this.state.page < Math.ceil(this.state.totalResults / 20) && (
              <button
                className="btn btn-dark"
                onClick={this.nextPage}
                type="button"
                id="asd"
              >
                Next
              </button> ////////INFINITE SCROLL
            )}
          </div>
        )}
      </div>
    );
  }
}

export default News;
