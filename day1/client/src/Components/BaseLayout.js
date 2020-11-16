

import React from 'react'

function BaseLayout (props) {
    return (
        <div>
            <h1>HEADER</h1>
            <div>{props.children}</div>
            <h1>FOOTER</h1>
        </div>
    )
}

export default BaseLayout;