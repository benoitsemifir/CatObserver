import React from 'react'

export const CatDiv = (props) => {
    return (
        <div>
            <img src={props.catImg} alt="Un chat"/>
            <button onClick={props.handleClick}>Un autre !</button>
        </div>
    )
}
