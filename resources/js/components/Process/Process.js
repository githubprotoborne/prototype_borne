import React, { Component, useEffect, useState } from 'react';
import axios from "axios";
import "../../../css/Process.css";
import Menu from "../NavBar/Menu"
import NavBar from "../NavBar/NavBar"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Contrast from "../Contrast/Contrast"






const Process = function (props) {
    String.prototype.sansAccent = function () {
        var accent = [
            /[\300-\306]/g, /[\340-\346]/g, // A, a
            /[\310-\313]/g, /[\350-\353]/g, // E, e
            /[\314-\317]/g, /[\354-\357]/g, // I, i
            /[\322-\330]/g, /[\362-\370]/g, // O, o
            /[\331-\334]/g, /[\371-\374]/g, // U, u
            /[\321]/g, /[\361]/g, // N, n
            /[\307]/g, /[\347]/g, // C, c
        ];
        var noaccent = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u', 'N', 'n', 'C', 'c'];

        var str = this;
        for (var i = 0; i < accent.length; i++) {
            str = str.replace(accent[i], noaccent[i]);
        }

        return str;
    }


    const [infoprocess, setProcess] = useState([])
    const [infoprocessAnex, setProcessDocAnex] = useState([])
    const phone_horaire = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    if (props.location.process_id) {
        sessionStorage.setItem("Process_id", props.location.process_id)
    }


    let process = function () {

        axios.get('/getprocess/' + sessionStorage.getItem("Process_id")
        )
            .then(
                (response) => {
                    setProcess(response.data.processOne)
                    setProcessDocAnex(response.data.processAnex
                    )
                }
            )
    }


    function displayProcess(text) {
        if (text == null || text === '') {
            return 'none';
        } else {
            return '';
        }
    }


    let display_provider_horaire = (horaire_div, icon_1, icon_2) => {
        const provider_horaire_div = document.querySelector(horaire_div)
        if (provider_horaire_div.classList.contains("none")) {
            provider_horaire_div.classList.remove("none")
            document.querySelector(icon_1).classList.remove("none")
            document.querySelector(icon_2).classList.add("none")
        } else {
            provider_horaire_div.classList.add("none")
            document.querySelector(icon_1).classList.add("none")
            document.querySelector(icon_2).classList.remove("none")
        }
    }


    function position_process_body() {
        const process_body = document.querySelector('.process-body') || false
        const width = window.matchMedia("(min-width: 1200px)").matches

        if (process_body && width) {
            return { marginTop: + document.querySelector('.process-body').offsetTop + "px" }
        } else {
            return { marginTop: + "0" }
        }
    }



    useEffect(() => { process() }, [])

    return (<div>


        <div>
            <div id="side">
                <Menu></Menu>
                <Contrast></Contrast>
            </div>
            <div id="contrast">

            </div>
        </div>
        <div id="contain" className='contain-home'>
            <NavBar></NavBar>
            <div className="bread-home"><Breadcrumbs></Breadcrumbs></div>

            {infoprocess.map((value, index) => <div key={index}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 ">

                            <div className="providers" style={position_process_body()}>

                                <h3>Démarche proposée par :</h3>
                                <h3 className={displayProcess(value.provider_proposed_by)}>{value.provider_proposed_by}</h3>
                                <div className="provider-logo">
                                    <img src={"/images/" + value.provider_proposed_by.sansAccent().replace("'", " ") + ".svg"} onError={(e) => { e.target.onerror = null; e.target.src = "/images/default_image.svg" }} alt={"Logo de " + value.provider_proposed_by} />
                                </div>
                                <h3 className={displayProcess(value.provider_service)}>{value.provider_service}</h3>






                                <div className="container-fluid">
                                    {/* AFFICHAGE DU TELEPHONE + HORAIRE  */}
                                    <div className={displayProcess(value.provider_phone) + " row"}>

                                        <div className="col-xl-3 col-lg-12"><p className="provider-icons"><span class="material-icons-outlined icons">call</span></p></div>
                                        <div className="col-xl-6 col-lg-12">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-xl-12 col-lg-12"><div className="provider-text"><p>{value.provider_phone}</p></div></div>
                                                    <div className="col-xl-12 col-lg-12">
                                                        <div className="view-horaire">
                                                            <div onClick={() => { display_provider_horaire(".provider_phone_timetable", ".provider_phone_expand_less", ".provider_phone_expand_more") }} >Voir les horaires
                                                            <span class="provider_phone_expand_less material-icons none">expand_less</span>
                                                                <span class="provider_phone_expand_more material-icons">expand_more</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-12"></div>

                                        <div className="provider_phone_timetable none container-fluid">
                                            {value.provider_phone_timetable.split(";", 7).map((phone_horaire_value, phone_horaire_index) =>
                                                <div key={phone_horaire_index} className="row">
                                                    <li className="col-4">{phone_horaire[phone_horaire_index]}</li> <li className="col-8">{phone_horaire_value}</li>
                                                </div>)}
                                        </div>
                                    </div>
                                    {/* FIN AFFICHAGE DU TELEPHONE + HORAIRE  */}



                                    {/* AFFICHAGE DU LIEU + HORAIRE  */}
                                    <div className={displayProcess(value.provider_postal_address) + " row"}>

                                        <div className="col-xl-3 col-lg-12"><p className="provider-icons"><span class="material-icons-outlined icons">place</span></p></div>
                                        <div className="col-xl-6 col-lg-12">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-xl-12 col-lg-12"><div className="provider-text"><p>{value.provider_postal_address}</p></div></div>
                                                    <div className="col-xl-12 col-lg-12"><div className="provider_postal_address_timetable_rdv"><p >(Sur rendez-vous : je prends <a href={value.provider_postal_address_timetable_rdv}>rendez-vous</a>)</p></div></div>
                                                    <div className="col-xl-12 col-lg-12">
                                                        <div className="view-horaire">
                                                            <div onClick={() => { display_provider_horaire(".provider_postal_address_timetable", ".provider_address_timetable_expand_less", ".provider_address_timetable_expand_more") }} >Voir les horaires
                                                                <span class="provider_address_timetable_expand_less material-icons none">expand_less</span>
                                                                <span class="provider_address_timetable_expand_more material-icons">expand_more</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-12"></div>

                                        <div className="provider_postal_address_timetable none container-fluid">
                                            {value.provider_postal_address_timetable.split(";", 7).map((postal_address_horaire_value, postal_address_horaire_index) =>
                                                <div key={postal_address_horaire_index} className="row">
                                                    <li className="col-4">{phone_horaire[postal_address_horaire_index]}</li> <li className="col-8">{postal_address_horaire_value}</li>
                                                </div>)}
                                        </div>
                                    </div>
                                    {/* FIN AFFICHAGE DU LIEU + HORAIRE  */}



                                    <div className={displayProcess(value.provider_write_online) + " row"}>
                                        <div className="col-xl-3 col-lg-12"><p className="provider-icons"><span class="material-icons-outlined icons">edit</span></p></div>
                                        <div className="col-xl-6 col-lg-12"><div className="provider_write_online"><div><a href={value.provider_write_online}><h4>Nous écrire en ligne</h4></a></div></div></div>
                                        <div className="col-xl-3 col-lg-12"></div>
                                    </div>



                                </div>
                            </div>
                        </div>

                        <div className="col-xl-8">
                            <div>
                                <div className="process">


                                    <div className="process_name-title">
                                        <h1>{value.process_name}</h1>
                                    </div>


                                    <div className="process-body">

                                        <div className="process-body-text">

                                            <div className="container-fluid">

                                                <div className={displayProcess(value.process_description) + " row"}>
                                                    <div className="col-md-1"><div className="process-icon"><span class="material-icons-outlined process-icon-info">info</span></div></div>
                                                    <div className="col-md"><div className="process-txt"><p>{value.process_description}</p></div></div>
                                                </div>

                                                <div className={displayProcess(infoprocessAnex[0] ? " " : "") + " row"}>
                                                    <div className="col-md-1"><div className="process-icon"></div></div>
                                                    <div className="col-md">
                                                        <p>Pour cette démarche vous aurez besoin :</p>
                                                        <ul className="docAnnexe">
                                                            {infoprocessAnex.map((docAnnexe, i) =>
                                                                <li key={i}>

                                                                    {docAnnexe.annex_document_name}

                                                                </li>)}
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className={displayProcess(value.process_draft_mode) + " row"}>
                                                    <div className="col-md-1"><div className="process-icon"><span class="material-icons icons">check_circle_outline</span></div></div>
                                                    <div className="col-md"><div className="process-txt"><p>Possibilité de reprendre la démarche plus tard : {value.process_draft_mode ? "Oui" : "Non"}</p></div></div>
                                                </div>

                                                <div className={displayProcess(value.process_duration) + " row"}>
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
        </div>
    </div>)
}



export default Process;

