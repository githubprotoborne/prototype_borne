import "../../../css/Cont.css"

import { Link, useParams } from "react-router-dom"

const Processes = ({ processes }) => {

    let { process } = useParams()
    return (
        <div className="">
            <h1 className="process_title" >Liste des démarches</h1>
            { processes.map((value, index) =>
                <ul key={index} id={"section" + index} className="section">
                    <h3 className="process-section-title">{value !== undefined ? value.subcontainer_name : ""}</h3>
                    {value !== undefined ? value.processes.map((process, i) => <div key={i} >



                        <Link className="process_item" to={{
                            pathname: "/sous-categories/-1/" + processes[0].processes[0].container_name + "/" + process.subcontainer_name + "/0/" + process.process_name
                            , name: process.process_name, process_id: process.process_id
                        }} style={{ display: "block", textDecoration: "none" }}>

                            <div className="row">
                                <div className="col-1  process-text-icon">
                                    <span className="material-icons-outlined " aria-hidden="true">chevron_right</span>
                                </div>
                                <div className="col process-text-icon ">
                                    <span className=""> {process.process_name}</span>
                                </div>
                            </div>
                        </Link>


                    </div>) : ""}


                </ul>)}
        </div>
    )
}
export default Processes