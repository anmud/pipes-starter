import React from 'react'

import heroStyles from './hero.module.scss';

const SimpleHero = ({children}) => {
    return (
        <header className={`defaultHero ${heroStyles.defaultHero}`}>
            {children}
        </header>
    )
}

export default SimpleHero;