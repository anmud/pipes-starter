import React from 'react'


const SimpleHero = ({children}) => {
    return (
        <div className="mainContainer">
           <header className="hero">
            {children}
           </header>
        </div>
        
    )
}

export default SimpleHero;