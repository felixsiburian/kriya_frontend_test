import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'

function Page2(){
    const history = useHistory()

    const isClick = event => {
        history.push("/page1")
    }

    return(
        <body>
            <h2>Page2</h2>
            <button onClick={isClick}>Back</button>
        </body>
    )
}

export default Page2;