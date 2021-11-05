import React, { Component } from 'react'
import "./css/newsItem.css"
// import {
    
//     Link
//   } from "react-router-dom";

export default class NewsItem extends Component {
   
    constructor(){
        super();
        this.state={
           
        }
    }
    formatTime=(time)=>{
        let t = new Date(time)
        return t.getDate()+"/"+t.getMonth()+"/"+t.getFullYear()
    }
    dateMatch=(time)=>{
        let today=new Date()
        let t=new Date(time)
        // console.log(t,t.getDate(),today,today.getDate())
        if(today.getDate()==t.getDate())return true
        return false
    }
    
    render() {
        const {title,dec,url,img,time,content,auther}=this.props;
        return (
            <>
            {/* <Link to="/newsDetails"> */}
            <a href={url} target="_blank">
           
                <div className="card bg-secondary text-dark">
                {this.dateMatch(time)&&
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                New
            </span>
                }    
                
                <img src={img} alt="" />
                
                <div className="card-header">
                    <h5 className="card-title "><strong>{title.substring(0,40)}...</strong></h5>
                   
                </div>
                    <div className="card-body">
                        <p className="card-text">{dec?dec.substring(0,50):"blank"}...</p>
                        <p className="card-text text-right">Auther:{auther?auther:"Unknown"} 
                        <small> Time:{time?this.formatTime(time):"Unknown"}</small></p>
                        
                    </div>
                    
               
                </div>

            </a>
            {/* </Link> */}
            
            </>
        )
    }
}
