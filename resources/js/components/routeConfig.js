import react from "react";
import Cont from "./Container/Cont";
import Container from "./Container/Container";
import Home from "./Home/Home";
import Test from "./NavBar/Test";
import NotFound from "./NotFound/NotFound";
import Process from "./Process/Process";
import Subcontainer from "./subcontainer/Subcontainer";

const routesConfig = [
  {
    path: "/",
    component: Home,
    exact: true,
    breadcrumb :"Accueil"
  },
  
  {
    path: "/test",
    component: Container,
  
  },
  {
    path: "/sous-categories/:id/:name/mes-demarches/:i/:category_index",
    component: Container,
    exact:true,
    breadcrumb: "Liste des démarches"
  },
  {
    path: "/sous-categories/:id/:name",
    component: Subcontainer,
    breadcrumb: "Les sous catégories"
  },
 
  {
    path: "/demarche/:process_name/demarche",
    component: Process,
    breadcrumb: "la demarche"

  },
 

  
  {
    path: "*",
    component: NotFound,
    breadcrumb:null
  }
 
];

export default routesConfig;