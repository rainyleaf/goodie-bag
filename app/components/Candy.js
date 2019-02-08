import React from 'react'

function Candy(props){
    console.log(props)
    return (
        <li>{props.candy.name}</li>
    )
}

export default Candy
