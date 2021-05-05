import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { useParams } from 'react-router';
import "../../css/process.css"


const Process = function () {

    const [infoprocess, setinfoprocess] = useState([])

    const process_text = useParams();




    let process = function () {
        axios.get('/getprocess/' + process_text.process_name)
            .then(
                (response) => { setinfoprocess(response.data) }
            )
    }




    useEffect(() => { process() }, [])

    return (<div>

        {infoprocess.map((value, index) => <div key={index}>
            <div className="process-global">

                <div>
                    Démarche proposé par
                    <h1 >{value.provider_name}</h1>
                </div>

                <div className="process">


                    <div className="process_name-h1">
                        <h1>{value.process_name}</h1>
                    </div>


                    <div className="process-body">



                        <div className="process-body-text">
                            <p>{value.process_description}</p>
                            Pour cette démarche vous aurez besoin :
                            <p>
                                jfdghkfhgkhgfkgffghdilg
                            </p>
                            <p>
                                Possibilité de reprendre la démarche plus tard : {
                                    value.process_draft_mode ? "Oui" : "Non"
                                }
                            </p>
                            <p>
                                Temps estimé : {value.process_duration} minutes
                            </p>
                            <div className="process-buttons">
                                <div className="process-button">
                                    <p>Je numérise un document avec le scanner</p>
                                </div>

                                <div className="process-button">
                                    <p>Je commence ma démarche</p>
                                </div>
                            </div>

                        </div>




                    </div>



                </div>
            </div>
        </div>)}
    </div>)
}

export default Process;
