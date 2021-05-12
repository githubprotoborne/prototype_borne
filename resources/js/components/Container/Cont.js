import React, { Component } from "react"
import Menu from "../NavBar/Menu"
import NavBar from "../NavBar/NavBar"
import "../../../css/Cont.css"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Title from "./Title"
import Processes from "./Processes"
import Section from "./Section"
import Contrast from "../Contrast/Contrast"
export default class Cont extends Component{
    constructor(props){
        super(props)
        super(props)
        this.state ={
            processes:[],
            id:props.location.id,
            sub_container:[]
        }
        this.extractsSubCategories=this.extractsSubCategories.bind(this)
        this.sub_container_processes.bind(this)
    /* check if the process_id coming through the url is 
      set on the current session,if not use the session process_id
    
    */
        if(props.location.id){
            sessionStorage.setItem("process_id",props.location.id) 
            sessionStorage.setItem("container_name",props.location.name)
            sessionStorage.setItem("container_icon",props.location.icon) 
            
        }
    }

    extractsSubCategories(data=Array()){
        let array=[]
        array.push({subcontainer_name:data[0].subcontainer_name,processes:[]})
        for(let i=0;i<data.length;i++){
            let found =false
            for(let y =0;y<array.length;y++){
                if(array[y].subcontainer_name===data[i].subcontainer_name){
                    found =true;
                }
                   
            }
            if(found===false){
                array.push({subcontainer_name:data[i].subcontainer_name,processes:[]})
            }
        }
        return array
      }
    // group processes by sub containers and return a new array
      sub_container_processes(data=Array()){
          let array = this.extractsSubCategories(data)
          console.log(array,"array")
          for(let i=0;i<data.length;i++){
           for(let y=0;y<array.length;y++){
               if(data[i].subcontainer_name===array[y].subcontainer_name){
                 
                  array[y].processes.push(data[i]) 
                
               }
           }
          }
          return array
   
       }
       // get processes from the database
      getContainerProcesses(){
          axios.get("/get-processes",{ params: {id:sessionStorage
              
              
              .getItem("process_id")} })
          .then((response)=>{
              
                this.setState({
                    processes:this.sub_container_processes(response.data),
                    sub_container:this.extractsSubCategories(response.data)
                  })
          })
      }
     componentDidMount(){
         this.getContainerProcesses.bind(this)()
         this.scroll.bind(this)()
     }
     componentDidUpdate(){
      this.scroll.bind(this)()
     }
     componentWillUnmount() {
      // fix Warning: Can't perform a React state update on an unmounted component
      this.setState = (state,callback)=>{
          return;
      };
  }
  // handle section choose on scrolling
  scroll(){
      (function() {
          'use strict';
        
          var section = document.querySelectorAll(".section");
          var sections = {};
          var i = 0;
        
          Array.prototype.forEach.call(section, function(e) {
            sections[e.id] = e.offsetTop;
          });
        
          window.onscroll = function() {
            var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        
            for (i in sections) {
              if (sections[i] <= scrollPosition) {
                document.querySelector('.active').setAttribute('class', 'inactive');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
              }
            }
          };
        })();
  }
  render(){
      return(
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
                   <div className="desk-bread desk-bread-cont">
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
                <div className="row">
                     <div className="col sections sections-cont" id="sec">
                         
                            <div className="sticky-top">
                            <div className=" title position-fixed " id="t">
                        
                        <Title>

                        </Title></div>
                   <div className="section-position fixed">
                   <Section processes={this.state.processes} sub_container={this.state.sub_container}></Section>
                    
                   </div>
                            </div>
                                 
                     </div>
                     <div className="col processes-position">
                       <Processes processes={this.state.processes}></Processes>

                   </div>

          </div>
                     

     </div>
            {
                ///////// desktop end
            }

          {
              //////////
          }
       
     
     </div>
            



                 
          </div>  

      )
  }
}