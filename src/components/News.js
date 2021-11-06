import React, {useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props){
    
    const [article,setArticle]=useState([])
    const [loading,setLoading]=useState(true)
    const [page,setPage]=useState(1)
    const [totalResult,setTotalResult]=useState(0)

    const updateNews=async ()=>{
        props.setProgress(10)
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=9`);
        props.setProgress(40)
        data = await data.json();
        props.setProgress(70)
        setArticle(data.articles)
        setTotalResult(data.totalResult)
        setLoading(false)
        props.setProgress(100)
    } 

    useEffect(()=>{
        updateNews()
    },[])
    
    const fetchMore= async ()=>{
        
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=9`
        setPage(page+1)
        let data = await fetch(url);
        let pastdata = await data.json();
        setArticle(article.concat(pastdata.articles))
        setTotalResult(pastdata.totalResult)
    }

 
        return (
            <>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={article.length}
                    next={fetchMore}
                    hasMore={article.length!==totalResult}
                    loader={<Spinner />}
                >
                    <div className="container mt-5">

                    <div className="row">
                        {article.map((element) => {
                            return <div className="col-md-4 my-5" key={element.url}>
                            <NewsItem  title={element.title} dec={element.description} url={element.url} img={element.urlToImage} time={element.publishedAt}
                            content={element.content}  auther={element.author}  />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>

                
                {/* <div className="d-flex justify-content-between">
                <button disabled={page<=1} type ="button"  className="btn btn-dark" onClick={prevPage}>&larr; Previous </button>
                <button type ="button" className="btn btn-dark" onClick={nextPage}>Next &rarr; </button>
                </div> */}
            </>
        )
    
}

News.defaultProps = {
    country: "us",
    category: "business"
}
