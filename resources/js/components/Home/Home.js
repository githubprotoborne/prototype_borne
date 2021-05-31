import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
import ChoiceBar from "../ChoiceBar/ChoiceBar"
import Menu from "../NavBar/Menu"

import '../../../css/Home.css'
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Contrast from "../Contrast/Contrast"
import Footer from "../LegalInfo/Footer"
import SessionTimeout from "../SessionTimeout"
import SessionTimeoutDialog from "../Session/SessionTimeoutDialog"
import NavBar from "../NavBar/NavBar"
import ChoiceBarTablet from "../ChoiceBar/ChoiceBarTablet"


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            containers_state_one: [],//state processes
            containers_state_two: [],//
            containers_local_one: [],//locals processes
            containers_local_two: []
      
        }
    }
 displaySession(){
        if(sessionStorage.getItem("sessionAlert")){
           return ""
        }
        else return ""
    }
    getContainers() {
        axios.get("/first-containers")
            .then((response) => {
                this.setState({
                    containers_state_one: response.data.slice(3, 6),
                    containers_state_two: response.data.slice(6, 9),
                    containers_local_one: response.data.slice(9, 12),
                    containers_local_two: response.data.slice(12, 15)
                })

            })

    }
   
    componentDidMount() {
        this.getContainers.bind(this)()
    }
    render() {

        return (
            <div>
                <div >
                    <div id="side">
                        <Menu></Menu>
                        <Contrast></Contrast>
                     


                    </div>
                    <div id="contrast">

                    </div>
                </div>
                <div id="contain" className='contain-home'>
                    <NavBar></NavBar>
                    <ChoiceBar></ChoiceBar>
                    <div className="tablet"><ChoiceBarTablet></ChoiceBarTablet></div>


                    <div className="presentation container-fluid presentation-home">
                        <div className="state_containers big-row-one row">

                            <div className="col">


                                <p className="contain-title">Vie administrative</p>



                                <div className="state_containers_one row ">

                                    {this.state.containers_state_one.map((
                                        value, index
                                    ) =>
                                        <Link key={index} className="home-button category_button" to={{
                                            pathname: "/sous-categories/" + value.container_id + "/" + value.container_name,
                                            id: value.container_id,
                                            name: value.container_name,
                                            icon: value.container_icon
                                        }} style={{ textAlign: "center" }}>
                                            {value.container_icon ?
                                                <div>

                                                    {value.container_icon.split(",").map((v, i) => <span key={i} className="material-icons-outlined home-icon" aria-hidden="true">
                                                        {v}
                                                    </span>)}
                                                </div> : ""

                                            }
                                            <span className="homepage_button name">{value.container_name}</span>
                                            <span className="description">{value.container_description}</span>

                                        </Link>

                                    )}
                                </div>
                                <div className="state_containers_two row">

                                    {this.state.containers_state_two.map((
                                        value, index
                                    ) =>
                                        <Link key={index} className="home-button category_button" to={{
                                            pathname: "/sous-categories/" + value.container_id + "/" + value.container_name,
                                            id: value.container_id,
                                            name: value.container_name,
                                            icon: value.container_icon
                                        }} style={{ textAlign: "center",alignItems:"center",textJustify:"center"}} >
                                            {value.container_icon ?
                                                <div>

                                                    {value.container_icon.split(",").map((v, i) => <span key={i} aria-hidden="true" className="material-icons-outlined home-icon">
                                                        {v}
                                                    </span>)}
                                                </div> : ""

                                            }
                                            <span className="homepage_button name">{value.container_name}</span>
                                            <span className="description">{value.container_description}</span>

                                        </Link>

                                    )}
                                </div>

                            </div>


                        </div>

                        <div className="local_containers state_containers row">

                            <div className="col">
                                <p className="contain-title">Vie locale</p>
                                <div className="local_containers_one row">
                                    {this.state.containers_local_one.map((
                                        value, index
                                    ) =>
                                        <Link key={index} className="home-button category_button" to={{
                                            pathname: "/sous-categories/" + value.container_id + "/" + value.container_name,
                                            id: value.container_id,
                                            name: value.container_name,
                                            icon: value.container_icon
                                        }} style={{ textAlign: "center" }}>
                                            {value.container_icon ?
                                                <div >

                                                    {value.container_icon.split(",").map((v, i) => <span aria-hidden="true" key={i} className="material-icons-outlined home-icon">
                                                        {v}
                                                    </span>)}

                                                    
                                                </div> : ""


                                            }
                                            <span className="homepage_button name">{value.container_name}</span>
                                            <span className="description">{value.container_description}</span>

                                        </Link>

                                    )}
                                </div>
                                <div className="local_containers_two row">
                                    {this.state.containers_local_two.map((
                                        value, index
                                    ) =>
                                        <Link key={index} className="home-button category_button" to={{
                                            pathname: "/sous-categories/" + value.container_id + "/" + value.container_name,
                                            id: value.container_id,
                                            name: value.container_name,
                                            icon: value.container_icon
                                        }} style={{ textAlign: "center", textAlign: "center" }} >
                                            {value.container_icon ?
                                                <div>

                                                    {value.container_icon.split(",").map((v, i) => <span aria-hidden="true" key={i} className="material-icons-outlined home-icon">
                                                        {v}
                                                    </span>)}
                                                </div> : ""


                                            }
                                            <span className="homepage_button name">{value.container_name}</span>
                                            <span className="description">{value.container_description}</span>

                                        </Link>

                                    )}
                                </div>

                            </div>

                        </div>
                    </div>

                    <Footer>     </Footer>

                </div>

            </div>
        )
    }

}
export default Home