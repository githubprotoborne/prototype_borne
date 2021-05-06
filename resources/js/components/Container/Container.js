import axios from "axios"
import React, { useEffect, useState } from "react"

class Container extends React.Component{
   
    constructor(props){
        super(props)
        this.state ={
            processes:[],
            id:props.location.id
        }
        if(props.location.id)
           sessionStorage.setItem("process_id",props.location.id)
        
          

    }
   
    getContainerProcesses(){
        axios.get("/get-processes",{ params: {id:sessionStorage.getItem("process_id")} })
        .then((response)=>{
              this.setState({processes:response.data})
        })
    }
   componentDidMount(){
       this.getContainerProcesses.bind(this)()
   }
   componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
}
    render(){
        return(
            <div>
                {this.state.processes.map((process,index)=><div key={index}>
                    <p>{process.process_name}</p>
                </div>)}
                
            </div>)

    }
    
    

}
export default  Container