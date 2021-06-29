import React from 'react'
import { useIdleTimer } from 'react-idle-timer'
import routeConfig from "./routeConfig"
import { BrowserRouter, Redirect, Link, Route, Switch, Router, NavLink } from 'react-router-dom';


export default function (props) {
  const handleOnIdle = event => {



    //sessionStorage.removeItem("contrast")
    // window.location="/"
    if(getRemainingTime()<=10000){
    //  $(".session-container").css({display:"block"})
    //  sessionStorage.setItem("sessionAlert",true)
  location("/")
    }

  }

  const handleOnActive = event => {
   
    



  }

  const handleOnAction = event => {
    
    let time = getRemainingTime()
   

  }

  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 20,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    onAction: handleOnAction,
    debounce: 2000
  })

  return (
    <div>
      <div className="" >

        <BrowserRouter >


          <Switch>

            <Switch>
              {routeConfig.map((route, i) => (
                <Route key={route} {...route} />
              ))}
            </Switch>


          </Switch>
        </BrowserRouter>

      </div>
    </div>
  )
}