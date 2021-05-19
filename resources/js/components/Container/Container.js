import React, { Component } from "react"
import Menu from "../NavBar/Menu"
import NavBar from "../NavBar/NavBar"
import "../../../css/Container.css"
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Title from "./Title"
import Processes from "./Processes"
import Section from "./Section"
import Contrast from "../Contrast/Contrast"
import { useParams } from "react-router"
export default class Container extends Component{
    constructor(props){
        
        super(props)
        this.state ={
            processes:[],
            id:props.location.id,
            sub_container:[],
            subcontainer_index:this.props.match.params.category_index
        }
        console.log(this.state.subcontainer_index)
        this.extractsSubCategories=this.extractsSubCategories.bind(this)
        this.sub_container_processes.bind(this)
   
       
    }
    setIndex(){
      console.log(this.state.subcontainer_index)
      if(this.state.subcontainer_index==="-1"){
        this.setState({subcontainer_index:-1})
      }
    }
    extractsSubCategories(data=Array()){
        let array=[]
        array.push({subcontainer_name:data[0].subcontainer_name,processes:[]})
        for(let i=0;i<data.length;i++){
            let found =false;
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
      handle_choice_color(index){
      
        
        for(let i=-1;i<this.state.sub_container.length;i++){
          $(".section"+i).css("background-color","")
          $(".section"+i).css("color","")
        }
        //$(".section"+index).css("background-color","#577C90")
        $(".section"+index).css("color","#fff")
          
        
      }
      firstItem(){
        $(".section"+this.state.subcontainer_index).css("background-color","#577C90")
        $(".section"+this.state.subcontainer_index).css("color","#fff")
          

      }
     componentDidMount(){
         this.getContainerProcesses.bind(this)()
         this.firstItem.bind(this)()
         this.setIndex.bind(this)()
        
        // this.scroll.bind(this)()
        // this.setState({subcontainer_index:0})
        //set style for the active section item
      
        
     }
     componentDidUpdate(){
      //this.scroll.bind(this)()
      this.firstItem.bind(this)()
      this.setIndex.bind(this)()
     
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
                <div className="row cont-container">
                     <div className="col sections sections-cont" id="sec">
                         
                            <div className="sticky-top">
                            <div className=" title position-fixed " id="t">
                        
                        <Title>

                        </Title></div>
                   <div className="section-position fixed">
               
      {// section begin///////////////////////////////// 
      }
        <ul className="">
        <div className="">


</div>
{
  //// ensemble des service
}

<li  className={"section-items"+" section"+-1} onClick={
  ()=>{
    this.setState({subcontainer_index:-1})
    this.handle_choice_color.bind(this)(-1)
  }
}> 
<a  href={"#section"+(0)} > 
<span className="section_text">Ensemble des services</span>
</a>

</li>

{
  /////////////////////////////////
}

{this.state.sub_container.map((value,index)=>

<li key={index} className={"section-items"+" section"+index} onClick={
  ()=>{
    this.setState({subcontainer_index:index})
    this.handle_choice_color.bind(this)(index)
  }
}> 
<a  href={"#section"+(index+1)} > 
<span className="section_text">{value.subcontainer_name}</span>
</a>

</li>

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
                        {<Processes processes={this.state.subcontainer_index!==-1 ?[this.state.processes[this.state.subcontainer_index]]:this.state.processes} allProcesses={this.state.processes} ></Processes>}
                         </div>

                   </div>

          </div>
                     

     </div>
          
     
     </div>
                    
          </div>  

      )
  }
}