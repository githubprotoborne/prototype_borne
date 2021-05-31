import React, { Component } from "react"
import Menu from "../NavBar/Menu"
import NavBar from "../NavBar/NavBar"
import "../../../css/Container.css"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Title from "./Title"
import Processes from "./Processes"

import Contrast from "../Contrast/Contrast"
import { Link } from "react-router-dom"
import Footer from "../LegalInfo/Footer"
import { sub_container_processes, extractsSubCategories, scroll } from "../../Services/ContainerService/ContainerService"

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      processes: [],
      id: props.location.id,
      sub_container: [],
      subcontainer_index: this.props.match.params.category_index - 1
    }

    this.extractsSubCategories = extractsSubCategories
    this.sub_container_processes = sub_container_processes
  }
  // get processes from the database
  getContainerProcesses() {
    axios.get("/get-processes", {
      params: {
        id: sessionStorage
          .getItem("process_id")
      }
    })
      .then((response) => {
        this.setState({
          processes: this.sub_container_processes(response.data),
          sub_container: this.extractsSubCategories(response.data)
        })
      })
  }
  // this function set style for the 
  handle_choice_color(index) {
    for (let i = -1; i < this.state.sub_container.length; i++) {
      $(".section" + i).css("background-color", "")
      $(".section" + i).css("color", "")
    }
    //$(".section"+index).css("background-color","#577C90")
    $(".section" + index).css("color", "#fff")
  }
  firstItem() {
    $(".section" + this.state.subcontainer_index).css("background-color", "#577C90")
    $(".section" + this.state.subcontainer_index).css("color", "#fff")
  }
  componentDidMount() {
    this.getContainerProcesses.bind(this)()
    this.firstItem.bind(this)()
    this.setState({ subcontainer_index: this.state.subcontainer_index })
    // this.setIndex.bind(this)()

    // this.scroll.bind(this)()
    // this.setState({subcontainer_index:0})
    //set style for the active section item


  }
  componentDidUpdate() {
    //this.scroll.bind(this)()
    this.firstItem.bind(this)()
    //this.setIndex.bind(this) 
  }
  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }

  // handle section choose on scrolling

  render() {
    return (
      <div>

        <div id="side" >
          <div className="">
            <Menu></Menu>
            <Contrast></Contrast>
          </div>

        </div>
        <div id="contain">
          <div className=" sticky-top ">
            <div className="tablet-nav ">
              <div className="nav-position fixed ">
                <NavBar></NavBar>
              </div>
              <div className="desk-bread">
                <div className="bread-text">
                  <Breadcrumbs></Breadcrumbs>
                </div>

              </div>
            </div>
          </div>
          {
            ////////////////////////////////////desktop begin
          }
          <div className="desk-top ">
            <div className="row cont-container">
              <div className="col sections sections-cont" id="sec">

                <div className="sticky-top">
                  <div className=" title position-fixed " id="t">

                    <Title> </Title>
                            </div>
                  <div className="section-position fixed">

                    {// section begin///////////////////////////////// 
                    }
                    <ul className="">
                      <div className="">


                      </div>
                      {
                        //// ensemble des service
                      }

                      <Link to={this.state.processes.length > 0 ? "/sous-categories/-1/" + this.state.processes[0].processes[0].container_name + "/" + "Ensemble des démarches de la rubrique : " + this.state.processes[0].processes[0].container_name + "/" + 0
                        : "/"} className={"section-items" + " section" + -1} onClick={
                          () => {
                            this.setState({ subcontainer_index: -1 })
                            this.handle_choice_color.bind(this)(-1)
                          }
                        }>

                        <span className="section_text">Ensemble des démarches</span>


                      </Link>

                      {
                        /////////////////////////////////
                      }

                      {this.state.sub_container.map((value, index) =>

                        <Link to={"/sous-categories/-1/" + this.state.processes[0].processes[0].container_name + "/" + value.subcontainer_name + "/" + (index + 1)} key={index} className={"section-items" + " section" + index} onClick={
                          () => {
                            this.setState({ subcontainer_index: index })
                            this.handle_choice_color.bind(this)(index)
                          }
                        }>

                          <span className="section_text">{value.subcontainer_name}</span>

                        </Link>

                      )
                      }

                    </ul>
                    {//section end
                    }

                  </div>
                </div>

              </div>
              <div className="col processes-position">
                <div className="scroll-bar">
                  {<Processes processes={this.state.subcontainer_index !== -1 ? [this.state.processes[this.state.subcontainer_index]] : this.state.processes} allProcesses={this.state.processes} ></Processes>}
                </div>

              </div>

            </div>


          </div>
          <div className="container-footer"><Footer></Footer></div>

        </div>


      </div>

    )
  }
}