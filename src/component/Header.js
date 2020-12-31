import React from 'react'

function Header(pr){
        return (
            <div>
                <h1 className="fname"> {pr.data.fname} </h1>
                <h1 className="lname"> {pr.data.lname} </h1>
            </div>
        )
    }

 export default Header