import { useEffect } from 'react';
import '../../../css/app.css'

const Test2 =(props)=>{


    const trigerMenu =()=>{
var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");
menu_btn.addEventListener("click", () => {
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-cont");
});

    }
    useEffect(()=>{
        trigerMenu()
    })
    return (
        <div>
            {//props.location.data
            }
hhhhhh
  <a class="btn border-0 h" id="menu-btn">
            
<span className="material-icons-outlined">menu</span>
  </a>
            <div class="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column" id="sidebar">
  <ul class="nav flex-column text-white w-100">
    <a href="#" class="nav-link h3 text-white my-2">
      Side Nav
    </a>
    <li href="#" class="nav-link">
      <span class="mx-2">Home</span>
    </li>
    <li href="#" class="nav-link">
      <span class="mx-2">About</span>
    </li>
    <li href="#" class="nav-link">
      <span class="mx-2">Contact</span>
    </li>
  </ul>
</div>
        </div>
    )
}
export default Test2