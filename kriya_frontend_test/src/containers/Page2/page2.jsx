import React from 'react'
import { useHistory } from 'react-router-dom'

function Page2(){
    const history = useHistory()

    const isClick = event => {
        history.push("/")
    }

    const isClickPage1 = event => {
        history.push("/")
    }

    return(
        <body>
            <h2>Page2</h2>
            <button onClick={isClick}>Back</button>
            <button onClick={isClickPage1}>Beli</button>
        </body>
    )
}

export default Page2;