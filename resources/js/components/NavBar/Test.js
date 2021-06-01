
import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { useParams } from 'react-router';
import "../../../css/Process.css";





const Test = function (props) {

    const [infoprocess, setProcess] = useState([])
    let { id } = useParams()



    let process = function () {
        axios.get('/get-process', {
            params: {
                id: id //props.location.process.process_id
            }
        })
            .then(
                (response) => {
                    console.log(response.data)
                    setProcess(response.data)

                }
            )
    }





    useEffect(() => {
        process()
        console.log(id)

    }, [])

    return (<div>

    </div>)

}

export default Test;
