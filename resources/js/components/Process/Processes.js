import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

const Processes = function () {

const [infoprocess, setinfoprocess] = useState([])

let processes = function() {
    axios.get("/getprocesses")
            .then(
                (response) => {setinfoprocess(response.data) 
               
                }
                // (response) => {setinfoprocess(response.data); alert(JSON.stringify(response.data))  }
            )
}

useEffect(()=>{processes()},[])

return (<div>

    {infoprocess.map((value, index)=><div>{value.process_name}</div>)}

    </div>)
}

export default Processes;
