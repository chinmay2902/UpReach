import React from 'react'
import loading from "./loading.gif"

export default function Spinner(){
        return (
            <div className="text-center my-5">
                <img src={loading} alt="Loading" style={{width:"30px",height:"30px",marginTop:"35px"}} />
            </div>
        )
    
}
