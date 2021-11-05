import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    static defaultProps = {
        country: "us",
        category: "business"
    }
    constructor() {
        super();
        this.state = {
            article: [],
            loading: true,
            page: 1,
            totalResult:0
        }
    }

    async componentDidMount() {
        this.props.setProgress(10)
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=9`);
        this.props.setProgress(40)
        data = await data.json();
        this.props.setProgress(70)
        this.setState({
            article: data.articles,
            totalResult:data.totalResult,
            loading:false
        })
        this.props.setProgress(100)
    }
    
    fetchMore= async ()=>{
        this.setState({
            page:this.state.page +1 
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=9`
        
        let data = await fetch(url);
        let pastdata = await data.json();
        this.setState({
            article: this.state.article.concat(pastdata.articles),
            totalResult:pastdata.totalResult
        })
        
    }

    render() {
        return (
            <>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.article.length}
                    next={this.fetchMore}
                    hasMore={this.state.article.length!==this.state.totalResult}
                    loader={<Spinner />}
                >
                    <div className="container">

                    <div className="row">
                        {this.state.article.map((element) => {
                            return <div className="col-md-4 my-5" key={element.url}>
                            <NewsItem  title={element.title} dec={element.description} url={element.url} img={element.urlToImage} time={element.publishedAt}
                            content={element.content}  auther={element.author}  />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>

                
                {/* <div className="d-flex justify-content-between">
                <button disabled={this.state.page<=1} type ="button"  className="btn btn-dark" onClick={this.prevPage}>&larr; Previous </button>
                <button type ="button" className="btn btn-dark" onClick={this.nextPage}>Next &rarr; </button>
                </div> */}
            </>
        )
    }
}
