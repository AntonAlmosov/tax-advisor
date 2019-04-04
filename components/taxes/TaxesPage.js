import React from 'react'

export default ({data}) => {
    if (data.appartment)
        return(
            <div>
                <img src={data.image} />
                <p>this is appartment</p>
            </div>
        )
    else
        return(
        <div>
            <img src={data.image} />
            <p>this is not appartment</p>
        </div>)
}