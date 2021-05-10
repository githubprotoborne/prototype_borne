import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../../../css/Container.css"
import Menu from "../NavBar/Menu"
import NavBar from "../NavBar/NavBar"
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import Section from "./Section"
import Title from "./Title"

class Container extends React.Component{

    constructor(props){
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
    // iter on the response data array to get all sub container and return a new array
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
              
                 <Menu></Menu>
               
               </div>
             <div id="contain container-fluid">
                 
              <div className="nav-position  ">
                   <div className="tablet-nav fixed-top"> <NavBar></NavBar></div> 
              </div>
       
                <div className="bread"><Breadcrumbs></Breadcrumbs>
                               <div className="mobile-only-title">
                               <Title></Title>
                               <div  className='section-mobile-section'>  <ul className="">
              <div className="">
           



</div>
<li className="section-items " id="first-item">
<a className="active"  href="#section0">
<span className="section_text">{this.state.processes.length>0?this.state.processes[0].subcontainer_name:""}</span>
</a>

</li>

{this.state.sub_container.slice(1,this.state.sub_container.length).map((value,index)=>

<li key={index} className="section-items  "> 
<a  href={"#section"+(index+1)} className="inactive"> 
<span className="section_text">{value.subcontainer_name}</span>
</a>

</li>

)
}

</ul></div>
                               </div>
                </div>
                   <div className="m1 menu container">
                 
                      <div id="menu-center" className="row">
                          <div className="col">
        
                           <div className="section-desk pos">
                              <div  className="tablet-title">
                               <Title className="tablet-title fixed"></Title>
                               </div >
                             
                               </div>


{
  /////////////////////////:::::::::::
}
                        <div ></div>




          
      </div>
      <div className="false">
        

      </div>
      <div className="col processes">
          <h1 className="process_title">Démarches</h1>
    {this.state.processes.map((value,index)=>
    <ul  key ={index}id={"section"+index} className="section">
          {value.processes.map((process,i)=><div>
           
            <li key={i} className="process_item">
            
        <Link  to={{
            pathname:"/demarche",
            process :process
        }} style={{height:"40px",display:"block", textDecoration:"none"}}>

            <div className="row"> 
                 <div className="col-1  c">
                   <span className="material-icons-outlined " aria-hidden="true">chevron_right</span> 
                 </div>
                 <div className="col c ">
                 <span className=""> {process.process_name}</span>
                 </div>
            </div>
        </Link>
        
        </li>
          </div>)}
      

    </ul>)}
    </div>
    </div>
  </div>

             </div>
   
            </div>
        )
    
        }

}
export default  Container