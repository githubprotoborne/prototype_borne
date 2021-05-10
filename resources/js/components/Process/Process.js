import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { useParams } from 'react-router';
import "../../../css/process.css"


const Process = function () {

    const [infoprocess, setProcess] = useState([])
    const [infoprocessAnex, setProcessDocAnex] = useState([])
    const process_text = useParams();




    let process = function () {
        axios.get('/getprocess/' + process_text.process_name)
            .then(
                (response) => { setProcess(response.data.processOne) , setProcessDocAnex(response.data.processAnex) }
            )
    }


    function displayTest(text) {
        let divStyle
        if (text == null || text == '')
            return divStyle = {
                display: 'none'
            }
    }



    useEffect(() => { process() }, [])

    return (<div>

        {infoprocess.map((value, index) => <div key={index}>       
            <div className="process-global">
                <div>
                    Démarche proposé par :
                    <h1 >{value.provider_name}</h1>
                </div>

                <div className="process">


                    <div className="process_name-title">
                        <h1>{value.process_name}</h1>
                    </div>


                    <div className="process-body">



                        <div className="process-body-text">

                            <div className="process-icon-txt">
                                <div className="process-icon description-icon">
                                    <span class="material-icons-outlined">info</span>
                                </div>
                                <p>{value.process_description}</p>
                            </div>

                            <div className="process_doc">
                                <p>Pour cette démarche vous aurez besoin :</p>
                                {infoprocessAnex.map((docAnnexe, i) =>
                                    <div key={i}>
                                        <li>
                                            {docAnnexe.annex_document_name}
                                        </li>
                                    </div>
                                )
                                }
                            </div>


                            <div className="process-icon-txt">
                                <div className="process-icon">
                                    <span class="material-icons">check_circle_outline</span>
                                </div>
                                <p>
                                    Possibilité de reprendre la démarche plus tard : {
                                        value.process_draft_mode ? "Oui" : "Non"
                                    }
                                </p>
                            </div>

                            <div className="process-icon-txt" style={displayTest(value.process_duration)}>
                                <div className="process-icon">
                                    <span class="material-icons">timer</span>
                                </div>
                                <p>Temps estimé : {value.process_duration} minutes</p>
                            </div>


                            <div className="process-buttons" >
                                <div>
                                    <div className="process-button process-scan">
                                        <div>
                                            <p className="process-scan-text">Je numérise un document avec le scanner</p>
                                            <p className="process-scan-icon"><span class="material-icons">scanner</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="process-button process-demarche">
                                        <a href={value.process_link}>
                                            <div>
                                                <p>Je commence ma démarche</p>
                                                <p className="process-demarche-icon"><span class="material-icons">arrow_forward</span></p>
                                            </div>
                                        </a>
                                    </div>
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

