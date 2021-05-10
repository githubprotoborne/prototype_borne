import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { useParams } from 'react-router';
import "../../css/process.css";
import NavBar from './NavBar/NavBar';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';


const Bug = function () {

    const [infoprocess,setinfoprocess] = useState([])
    let processes = function() {
        axios.get("/getprocesses")
                .then(
                    (response) => {setinfoprocess(response.data)  }
                    // (response) => {setinfoprocess(response.data); alert(JSON.stringify(response.data))  }
                )
    }
    
    useEffect(()=>{processes()},[])

    return (<div>
{infoprocess.map((value, index)=><div>{value.process_name}</div>)}
        skjdhfjksdhjfk
    </div>)
}

export default Bug;

