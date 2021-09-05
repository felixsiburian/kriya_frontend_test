import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import '../../_assets/css/custom.css'

function Page1(){
    const history = useHistory()

    const isClick = event => {
        history.push("/page2")
    }

    let [responseDataTable, setResponseDataTable] = useState([])
    const fetchData = React.useCallback(() => {
        axios({
            "method":"GET",
            "url":"https://jsonplaceholder.typicode.com/todos",
            "headers":{
                "content-type":"applciation/json"
            }
        })
        .then((response) => {
            setResponseDataTable(response.data)
            console.log(responseDataTable, "data table")
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])
    
    return (
        <body>
            <div class="header">
                <h1>Page1</h1>
                <button onClick={isClick}>Checkout</button>
            </div>
            <div class="row">
                <div class="leftcolumn">
                    <h2>Title</h2>
                    {responseDataTable.map(data => (
                        <div class="data-left">
                            {data.title} <input type="number" min="0"></input>
                        </div>
                    ))}
                </div>
            </div>
        </body>
    )
}

export default Page1;