import React from 'react'
import Button from './Button'

export const Header = ({user}) => {
    const onClick = (e) =>{
        console.log("I have been clicked")
    } 
    return (
        <header className="header">
            <h1>Hello {user}</h1>
            <Button color='green' text='Hello' onClick={onClick}/>
        </header>
    )
}
