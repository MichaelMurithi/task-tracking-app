import React from 'react'

export const Header = ({user}) => {
    return (
        <div className="header">
            <h1>Hello {user}</h1>
        </div>
    )
}
