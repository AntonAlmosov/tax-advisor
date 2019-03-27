import React from 'react';

export default ({data}) => {
    return(
        <div>
            <span>{data.title}</span>
            <span>{data.price}</span>
        </div>
    )
}