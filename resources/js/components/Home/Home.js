import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
import ChoiceBar from "../ChoiceBar/ChoiceBar"
import Menu from "../NavBar/Menu"
import NavBar from "../NavBar/NavBar"
import '../../../css/Home.css'
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Contrast from "../Contrast/Contrast"

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            containers_state_one:[],//state processes
            containers_state_two:[],//
            containers_local_one:[],//locals processes
            containers_local_two:[]

        }
    }
     getContainers(){
         axios.get("/first-containers")
        .then((response)=>{
            this.setState({containers_state_one:response.data.slice(4,7),
                containers_state_two:response.data.slice(7,10),
                containers_local_one:response.data.slice(10,13),
                containers_local_two:response.data.slice(13,16)})
            console.log(response.data.slice(4,10))
        })

    }
    componentDidMount(){
        this.getContainers.bind(this)()
    }
    render(){
 
        return(
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
                <div className="bread-home"><Breadcrumbs></Breadcrumbs></div>
              
                <div className="presentation container-fluid presentation-home">
                      <div className="state_containers row">
                      
                               <div className="col">
                                
                                
                               <p className="contain-title">Vie administrative</p>
                          
                                
                                
                                  <div className="state_containers_one row ">
                               
                               {this.state.containers_state_one.map((
                                value,index
                               )=><div  key={index}className="btn category_button">
                                    <Link  className="home-button" to={{
                           pathname:"/sous-categories/"+value.container_id+"/"+value.container_name,
                           id:value.container_id,
                           name:value.container_name,
                           icon:value.container_icon
                            }} style={{textDecoration:"none"}}>
                                {value.container_icon?
                                       <div>

                                           {value.container_icon.split(",").map((v,i)=><span key={i} className="material-icons-outlined home-icon" aria-hidden="true">
                                              {v}
                                           </span>)}
                                       </div>:""
                                     
                                     }
                                    <span className="homepage_button name">{value.container_name}</span>
                                     <span className="description">{value.container_description}</span>
                                     
                                    </Link>
                                    
                               </div>)}
                           </div>
                           <div className="state_containers_two row">
                         
                           {this.state.containers_state_two.map((
                                value,index
                               )=><div  key={index}className="btn category_button">
                                    <Link className="home-button" to={{
                              pathname:"/sous-categories/"+value.container_id+"/"+value.container_name,
                              id:value.container_id,
                              name:value.container_name,
                              icon:value.container_icon
                               }} style={{textDecoration:"none"}} >
                                     {value.container_icon?
                                       <div>

                                           {value.container_icon.split(",").map((v,i)=><span key={i}  aria-hidden="true" className="material-icons-outlined home-icon">
                                              {v}
                                           </span>)}
                                       </div>:""
                                     
                                     }
                                    <span className="homepage_button name">{value.container_name}</span>
                                     <span className="description">{value.container_description}</span>
                                   
                                    </Link>
                                    
                               </div>)}
                           </div>

                               </div>
                        

                      </div>
                     
                      <div className="local_containers state_containers row">
                         
                         <div className="col">
                         <p className="contain-title">Vie locale</p>
                         <div className="local_containers_one row">
                         {this.state.containers_local_one.map((
                                value,index
                               )=><div key={index} className="btn category_button" id="button-phone">
                                    <Link className="home-button" to={{
                                 pathname:"/sous-categories/"+value.container_id+"/"+value.container_name,
                                 id:value.container_id,
                              name:value.container_name,
                              icon:value.container_icon
                                 }} style={{textDecoration:"none"}}>
                                      {value.container_icon?
                                       <div>

                                           {value.container_icon.split(",").map((v,i)=><span aria-hidden="true" key={i} className="material-icons-outlined home-icon">
                                              {v}
                                           </span>)}
                                       </div>:""
                                     
                                     
                                     }
                                    <span className="homepage_button name">{value.container_name}</span>
                                     <span className="description">{value.container_description}</span>
                                    
                                    </Link>
                                    
                               </div>)}
                         </div>
                           <div className="local_containers_two row">
                           {this.state.containers_local_two.map((
                                value,index
                               )=><div key ={index}className="btn category_button" id="button-phone">
                                    <Link className="home-button" to={{
                                     pathname:"/sous-categories/"+value.container_id+"/"+value.container_name,
                                     id:value.container_id,
                                     name:value.container_name,
                                     icon:value.container_icon
                                    }} style={{textDecoration:"none"}} >
                                         {value.container_icon?
                                       <div>

                                           {value.container_icon.split(",").map((v,i)=><span  aria-hidden="true" key={i} className="material-icons-outlined home-icon">
                                              {v}
                                           </span>)}
                                       </div>:""
                                     
                                     
                                     }
                                    <span className="homepage_button name">{value.container_name}</span>
                                     <span className="description">{value.container_description}</span>
                                    
                                    </Link>
                                    
                               </div>)}
                           </div>

                         </div>

                      </div>
                </div>

                </div>
                
            </div>
        )
    }

}
export default Home