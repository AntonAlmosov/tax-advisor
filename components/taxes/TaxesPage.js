import React from 'react'

export default ({data}) => {
    if (data.appartment)
        return(
            <div>
                <p>this is appartment</p>
            </div>
        )
    else
        return(
        <div>
            <p>this is not appartment</p>
        </div>)
}