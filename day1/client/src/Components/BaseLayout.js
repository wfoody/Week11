

import React from 'react'
import Menu from './Menu';

function BaseLayout (props) {
    return (
        <div>
            <Menu />            
            <div>{props.children}</div>
            <h1>© 2020</h1>
        </div>
    )
}

export default BaseLayout;