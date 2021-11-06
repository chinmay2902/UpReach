import React from 'react'
import "./css/newsItem.css"


export default function NewsItem(props) {

    let formatTime = (time) => {
        let t = new Date(time)
        return t.getDate() + "/" + t.getMonth() + "/" + t.getFullYear()
    }
    let dateMatch = (time) => {
        let today = new Date()
        let t = new Date(time)
        // console.log(t,t.getDate(),today,today.getDate())
        if (today.getDate() === t.getDate()) return true
        return false
    }


    const { title, dec, url, img, time, auther } = props;
    return (
        <>
            {/* <Link to="/newsDetails"> */}
            <a href={url} target="_blank" rel="noopener noreferrer" >

                <div className="card bg-secondary text-dark">
                    {dateMatch(time) &&
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            New
                        </span>
                    }
                    <img src={img} alt="" />
                    <div className="card-header">
                        <h5 className="card-title "><strong>{title.substring(0, 40)}...</strong></h5>

                    </div>
                    <div className="card-body">
                        <p className="card-text">{dec ? dec.substring(0, 50) : "blank"}...</p>
                        <p className="card-text text-right">Auther:{auther ? auther : "Unknown"}
                            <small> Time:{time ? formatTime(time) : "Unknown"}</small></p>
                    </div>
                </div>

            </a>
            {/* </Link> */}

        </>
    )

}
