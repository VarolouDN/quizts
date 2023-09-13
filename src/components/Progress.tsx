import React from "react";

type ProgressType={
    index:number
}

export default function Progress({index}:ProgressType){
    return (
        <div className='progress'>
            <progress className='progressBar' max={15} value={index}/>
        </div>
    )
}