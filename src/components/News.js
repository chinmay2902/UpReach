import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export default class News extends Component {
    static defaultProps={
        country:"us",
        category:"business"
    }
    constructor(){
        super();
        this.state={
            article:[],
            loading:false,
            page :1
        }
    }

    async componentDidMount(){
        let data=await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c4c5386a38847e18c83b08f4fb88e4d&page=1&pageSize=9`);
        this.setState({loading:true})
        data = await data.json();
        this.setState({
            article: data.articles,
            loading:false
        })
    }
    prevPage=async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c4c5386a38847e18c83b08f4fb88e4d&page=${this.state.page-1}&pageSize=9`
        this.setState({loading:true})
        let data=await fetch(url);
        data = await data.json();
        this.setState({
            page:this.page-1,
            article: data.articles,
            loading:false
        })
    }
    nextPage=async ()=>{
        console.log("Next")
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4c4c5386a38847e18c83b08f4fb88e4d&page=${this.state.page + 1}&pageSize=9`
        this.setState({loading:true})
        let data=await fetch(url);
        data = await data.json();
        this.setState({
            page: this.state.page+1,
            article: data.articles,
            loading:false
        })
    }
    render() {
        return (
            <div className="container my-5">
               {this.state.loading && <Spinner />}
             <div className="row">
             {!this.state.loading && this.state.article.map((element)=>{
                 return  <div className="col-md-4 my-5" key={element.url}>
                        <NewsItem  title={element.title} dec={element.description} url={element.url} img={element.urlToImage} time={element.publishedAt}
                        content={element.content}  auther={element.author}  />
                    </div>
             })}
                 
                
             </div>
             <div className="d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button"  className="btn btn-dark" onClick={this.prevPage}>&larr;Previous </button>
                <button type="button" className="btn btn-dark" onClick={this.nextPage}>Next &rarr;</button>
             </div>
            </div>
        )
    }
}
