import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { useParams } from 'react-router';
import "../../../css/process.css";




const Process = function () {

    const [infoprocess, setProcess] = useState([])
    const [infoprocessAnex, setProcessDocAnex] = useState([])
    const process_text = useParams();




    let process = function () {
        axios.get('/getprocess/' + process_text.process_name)
            .then(
                (response) => { setProcess(response.data.processOne), setProcessDocAnex(response.data.processAnex) }
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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-2 align-self-center">
                        <div className="providers">
                            <p>Démarche proposé par :</p>
                            <div className="provider-logo"><img src="/IMAGES/Logo-simplici-chambery-baseline.png" alt={value.provider_name} /></div>

                            <div className="container-fluid">
                                <div className="row" style={displayTest(value.provider_phone)}>
                                    <div className="col-xl-3 col-lg-12"><p className="provider-icons"><span class="material-icons icons">call</span></p></div>
                                    <div className="col-xl-9 col-lg-12"><div className="provider-text"><p>{value.provider_phone}</p></div></div>
                                </div>
                                <div className="row" style={displayTest(value.provider_mail)}>
                                    <div className="col-xl-3 col-lg-12"><p className="provider-icons"><span class="material-icons icons">email</span></p></div>
                                    <div className="col-xl-9 col-lg-12"><div className="provider-text"><p>{value.provider_mail}</p></div></div>
                                </div>
                                <div className="row" style={displayTest(value.provider_postal_address)}>
                                    <div className="col-xl-3 col-lg-12"><p className="provider-icons"><span class="material-icons icons">place</span></p></div>
                                    <div className="col-xl-9 col-lg-12"><div className="provider-text"><p>{value.provider_postal_address}</p></div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-10">
                        <div className="">
                            <div className="process">


                                <div className="process_name-title">
                                    <h1>{value.process_name}</h1>
                                </div>


                                <div className="process-body">

                                    <div className="process-body-text">

                                        <div className="container-fluid">

                                            <div className="row">
                                                <div className="col-md-1"><div className="process-icon"><span class="material-icons-outlined process-icon-info">info</span></div></div>
                                                <div className="col-md"><div className="process-txt"><p>{value.process_description}</p></div></div>
                                            </div>
                                            
                                            <div className="row">
                                            <div className="col-md-1"><div className="process-icon"></div></div>
                                                <div className="col-md">
                                                    <p>Pour cette démarche vous aurez besoin :</p>
                                                    {infoprocessAnex.map((docAnnexe, i) =>
                                                        <div key={i}>
                                                            <li>
                                                                {docAnnexe.annex_document_name}
                                                            </li>
                                                        </div>)}
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-1"><div className="process-icon"><span class="material-icons icons">check_circle_outline</span></div></div>
                                                <div className="col-md"><div className="process-txt"><p>Possibilité de reprendre la démarche plus tard : {value.process_draft_mode ? "Oui" : "Non"}</p></div></div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-1"><div className="process-icon"><span class="material-icons icons">timer</span></div></div>
                                                <div className="col-md"><div className="process-txt"><p>Temps estimé : {value.process_duration} minutes</p></div></div>
                                            </div>
                                        </div>

                                       


                                        <div className="container" >
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <div className="process-button">
                                                        <div>
                                                            <p className="">Je numérise un document avec le scanner</p>
                                                            <p className=""><span class="material-icons-outlined icons">scanner</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <a href={value.process_link}>
                                                        <div className="process-button">
                                                            <div>
                                                                <p>Je commence ma démarche</p>
                                                                <p className=""><span class="material-icons icons">arrow_forward</span></p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
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

